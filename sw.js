/* Registre récapitulatif — cache hors ligne
   À CHAQUE PUBLICATION : augmenter le numéro de VERSION ci-dessous.
   C'est ce qui fait apparaître « Nouvelle version disponible » sur les téléphones. */
var VERSION = "2.3.0";
var CACHE = "registre-" + VERSION;

var FICHIERS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png",
  "./fonts/inter-regular.woff",
  "./fonts/inter-medium.woff",
  "./fonts/inter-semibold.woff",
  "./fonts/inter-bold.woff",
  "./fonts/poppins-medium.woff",
  "./fonts/poppins-bold.woff"
];

/* Au-delà de ce délai, on sert la copie hors ligne plutôt que d'attendre un réseau lent. */
var DELAI_RESEAU = 4000;

self.addEventListener("install", function(e) {
  /* Pas de skipWaiting ici : la nouvelle version attend que l'utilisateur
     touche « Mettre à jour », pour ne jamais recharger pendant une saisie. */
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(FICHIERS); }).then(function() {
      /* L'ancienne version (registre-v1) n'affichait pas le bandeau : on la remplace tout de suite. */
      return caches.has("registre-v1").then(function(ancienne) { if (ancienne) return self.skipWaiting(); });
    })
  );
});

self.addEventListener("message", function(e) {
  if (e.data === "activer") self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(noms) {
      return Promise.all(noms.map(function(n) {
        return n === CACHE ? null : caches.delete(n);
      }));
    }).then(function() { return self.clients.claim(); })
  );
});

function mettreEnCache(req, rep) {
  if (rep && rep.ok && rep.type === "basic") {
    var copie = rep.clone();
    caches.open(CACHE).then(function(c) { c.put(req, copie); });
  }
  return rep;
}

/* Page : réseau d'abord (pour toujours avoir la dernière version),
   copie hors ligne si le réseau est absent ou trop lent. */
function reseauDabord(req) {
  return new Promise(function(ok) {
    var fini = false;
    var minuteur = setTimeout(function() {
      caches.match(req).then(function(r) { if (r && !fini) { fini = true; ok(r); } });
    }, DELAI_RESEAU);
    fetch(req).then(function(rep) {
      mettreEnCache(req, rep);
      if (!fini) { fini = true; clearTimeout(minuteur); ok(rep); }
    }).catch(function() {
      clearTimeout(minuteur);
      caches.match(req).then(function(r) {
        return r || caches.match("./index.html");
      }).then(function(r) {
        if (!fini) { fini = true; ok(r || Response.error()); }
      });
    });
  });
}

/* Icônes et autres fichiers fixes : copie d'abord, réseau sinon. */
function cacheDabord(req) {
  return caches.match(req).then(function(r) {
    return r || fetch(req).then(function(rep) { return mettreEnCache(req, rep); });
  });
}

self.addEventListener("fetch", function(e) {
  var req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;
  var page = req.mode === "navigate" || /\.html?$|\/$|\.webmanifest$/.test(new URL(req.url).pathname);
  e.respondWith(page ? reseauDabord(req) : cacheDabord(req));
});
