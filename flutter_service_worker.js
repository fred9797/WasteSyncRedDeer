'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dd072fcc67a7acc4ecd572df0e149e52",
"splash/img/light-2x.png": "ac28f5676830c074cee4a118e32e7ec7",
"splash/img/dark-4x.png": "5194026eef10042248c02ae921c51f83",
"splash/img/light-3x.png": "13e7884c79dc81622fe8463ca1a44f18",
"splash/img/dark-3x.png": "13e7884c79dc81622fe8463ca1a44f18",
"splash/img/light-4x.png": "5194026eef10042248c02ae921c51f83",
"splash/img/dark-2x.png": "ac28f5676830c074cee4a118e32e7ec7",
"splash/img/dark-1x.png": "f28d90b34166d5c0353e63b93faaa47c",
"splash/img/light-1x.png": "f28d90b34166d5c0353e63b93faaa47c",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "71b11ba64821b6fdd48b52c3eda11f23",
"favicon.ico": "dfeda262fc0b51d7434bc70848fd5806",
"index.html": "02aa9a1d728188fdbea2220486a0ace5",
"/": "02aa9a1d728188fdbea2220486a0ace5",
"main.dart.js": "10863c5cb7a459303946e2153b4b6248",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-192.png": "ceebffef800930097cd2d48b6a205c52",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon-512.png": "6d3539c350e8c60ea8bff4ca4259ce9c",
"manifest.json": "2207477af4de6d93a61812bd05cfc89d",
"assets/AssetManifest.json": "32399d65a7baa6e80dbc072422f2c05f",
"assets/NOTICES": "3168d52234e77e5415a764a2239263ae",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/shaders/ink_sparkle.frag": "89c22b3a7c52efd52b0b526bb616ad7b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/warning.png": "b3b0229a67a44900f558d0f249387bab",
"assets/assets/images/trademark.jpg": "48bce0c7d9748c324c1b53af90892ddc",
"assets/assets/images/BlueBin3.png": "4f1616d4ca40a7324932e2c59a59a970",
"assets/assets/images/WasteSync_ca.png": "24e2583fe376c758b43ef9c9a1a50b08",
"assets/assets/images/rain1.jpg": "b546c0ab3beb41abe4da5ff3c7900208",
"assets/assets/images/thumb_image_6_copy.jpg": "536defd1374a4771bafaf249bc95fb2d",
"assets/assets/images/WebAppLogo.png": "07fe09d0baf419b3adc3311bb337a748",
"assets/assets/images/thumb_image_13_copy.jpg": "776ad5cbfcdc3ccc64a05b0c377412f5",
"assets/assets/images/thumb_image_8.jpg": "86c0322d8d1a08eef57109bae33a93a1",
"assets/assets/images/thumb_image_9.jpg": "e82cfa8c0b90649f94f7f07de10741ce",
"assets/assets/images/give.png": "f61bc353279f077723a7a50cc9d91ba8",
"assets/assets/images/thumb_image_23.jpg": "794693afbdc52e17fbe95c01e5cea44a",
"assets/assets/images/thumb_image_22.jpg": "b44c4c78bb850155ef256739302fcbe7",
"assets/assets/images/leaf_icon.png": "a8156cc66e78f675d184161ea8cf7368",
"assets/assets/images/thumb_image_20.jpg": "18e71e67c99f40550c075051f1ca2ad5",
"assets/assets/images/thumb_image_21.jpg": "b34dbb7b1a35f2fb51a9b24d01d1e463",
"assets/assets/images/thumb_image_19.jpg": "5c4e7fc72c9fa856831185770725bc14",
"assets/assets/images/thumb_image_25.jpg": "0c7829a560d4e324d4cb051b0c3755e5",
"assets/assets/images/boot2_icon.png": "3eaf10bf35dde30a39be58fbac5686f2",
"assets/assets/images/thumb_image_24.jpg": "8e94678ff92cae354ddd3b99077d1c2a",
"assets/assets/images/thumb_image_18.jpg": "8882d0a4117b0c449644eb99793279c4",
"assets/assets/images/thumb_image_26.jpg": "2040d965a140eb8e01207c01128a3018",
"assets/assets/images/Icon%2520v23.png": "a41b508bb2cfacd41ad4784760453abc",
"assets/assets/images/AppleStoreIcon.png": "4d45436274b04d904274db94089c5935",
"assets/assets/images/thumb_image_27.jpg": "de43b9d85f782cc0513b47605d4bd98d",
"assets/assets/images/thumb_image_16.jpg": "c9839668dcc195048533b9b82dcffeb1",
"assets/assets/images/thumb_image_17.jpg": "d122219b5d071fdfd537af173161df81",
"assets/assets/images/thumb_image_15.jpg": "892c4ea39cd6b17f741feff87259976e",
"assets/assets/images/thumb_image_29.jpg": "7d93eb483cada16bab4c53e9985babdd",
"assets/assets/images/thumb_image_28.jpg": "869ec11fe8346fc04d871287c2da52e6",
"assets/assets/images/thumb_image_10_copy.jpg": "9a40510aa5ac10c76f9141849516e959",
"assets/assets/images/thumb_image_14.jpg": "864ac82e842decfbd6136bbcb9bcf965",
"assets/assets/images/pdf_red_v10.png": "b2aecbaa1cd14b2a76abe1c3b8db8689",
"assets/assets/images/thumb_image_10.jpg": "9a40510aa5ac10c76f9141849516e959",
"assets/assets/images/thumb_image_11.jpg": "518865028eea8291ac31ec79e873fd00",
"assets/assets/images/BowerPonds2.png": "2060ea3a5b91647906bb4924e9964119",
"assets/assets/images/thumb_image_13.jpg": "776ad5cbfcdc3ccc64a05b0c377412f5",
"assets/assets/images/GooglePlayIcon.png": "5495cac13bea7559856112c6a6b7fbad",
"assets/assets/images/recycle-bottle.png": "ec565a80301aee5a9745d1378862832b",
"assets/assets/images/free_icon.png": "d33e4873269b818f87d543de6dc7a734",
"assets/assets/images/thumb_image_12.jpg": "6c1b28e2a64b5af0eb0ffc2e1265982b",
"assets/assets/images/calendar_icon.png": "64c7242e8954d171e30eb5c61b5bb25d",
"assets/assets/images/MaceInteractiveLogo.png": "7b173c3fa21e554556e71f929026c684",
"assets/assets/images/thumb_image_4.jpg": "0f116fd16759ebd4ed2109ec3d63548b",
"assets/assets/images/thumb_image_5.jpg": "4c9a946dac2a15653a710196c5cc57b2",
"assets/assets/images/calendar_red.png": "4138db41b5b5329c98a73835d3ee3d10",
"assets/assets/images/Recycling_blue.png": "be925e5d1c1dd76cc5b063db57e0aff8",
"assets/assets/images/thumb_image_7.jpg": "4ca1af6b0aeba1fca070d424e66ad2d9",
"assets/assets/images/geese1.jpg": "9d8a8bf5eaeb143ec62cfc9cc1c08e91",
"assets/assets/images/thumb_image_6.jpg": "536defd1374a4771bafaf249bc95fb2d",
"assets/assets/images/thumb_image_2.jpg": "e7bb80ba5e5fe3a9a9eb8645de296691",
"assets/assets/images/BlackBin4.png": "ffd0200f9c9608a456ed4a3d6f2039dc",
"assets/assets/images/calendar_white.png": "2a8c72ed47df5f59662146903bd51910",
"assets/assets/images/GreenBin5.png": "76e988f24b9e0fbca891df750d9bd76a",
"assets/assets/images/thumb_image_3.jpg": "9a2ad09afc999583422453c5168b0081",
"assets/assets/images/WMF7.png": "cca3a05cd425edad908969e622674af3",
"assets/assets/images/thumb_image_1.jpg": "5d7c7dc828dcda9eb07418ca28876f29",
"assets/assets/images/freeSymbol.png": "74bf703ee47dd1abdbc6f381c318ee2f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
