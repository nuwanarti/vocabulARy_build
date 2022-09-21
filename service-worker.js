/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/index.html","c283d7001f81142ff873f81ab26e4ade"],["/static/css/main.79586bbf.css","e1ea520f1a950df46f879d6725f1a973"],["/static/js/0.1ce871bb.chunk.js","5438fded50deccce56adf7d56eaa399a"],["/static/js/1.3cc2f649.chunk.js","b51d6862bdfa7545f2783f022ed257b5"],["/static/js/2.58ffb8b6.chunk.js","4ee0cb99987c9caf45bbbb6eadbb0d6e"],["/static/media/bed.29d4fd38.mp3","29d4fd38d347f885b501e5d99ca8b496"],["/static/media/bed.810d0371.png","810d03717e942d2b7d67e9e2419f8ba4"],["/static/media/bicycle.5734f7ad.mp3","5734f7adedc30dff3be9517f8269c26b"],["/static/media/bicycle.afe92407.png","afe924072a97d2894d0190a283f40814"],["/static/media/book.038405d7.mp3","038405d72d0daaa99b3a907a9303355a"],["/static/media/book.add1ea32.jpg","add1ea328e1053895df1e7ee3ebab40c"],["/static/media/book_1.e49e458f.png","e49e458f5b41a3bc876d1bd863452262"],["/static/media/book_2.2e6b91ab.png","2e6b91ab037c07be3cd09606781e2fad"],["/static/media/book_3.0071b642.png","0071b642b3fb2a46a528deea3788ac81"],["/static/media/book_4.eda35b6c.png","eda35b6c4b065bb9f4bbd94f05f54b6e"],["/static/media/book_honey.7857c672.png","7857c67212adf8b8536a9c5b402151dc"],["/static/media/bookshelf.27d2d145.png","27d2d14582965a9eb1f04a9985c0859f"],["/static/media/bookshelf.44a28d7d.mp3","44a28d7d785ec767d687da4d2bcd618e"],["/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/static/media/car.d058eb0a.mp3","d058eb0a6f7b0b9619d0c80ea367e077"],["/static/media/car.fbf99241.png","fbf99241ba6539036e087b15059f8ae7"],["/static/media/clock.14d09de8.png","14d09de89aa240d2cf4462b88cc825eb"],["/static/media/clock.5ff7b6df.mp3","5ff7b6df935ac948ee423c2f11c29be7"],["/static/media/cupboard.bdf53c55.png","bdf53c554e30e4651438693540901b5d"],["/static/media/cupboard.d712ab47.mp3","d712ab479d616e668e8fd43e0e9d1e29"],["/static/media/dressingTable.0d9e9e49.png","0d9e9e490a129094c913f502ed3d8b16"],["/static/media/dressingTable.be1ca87b.mp3","be1ca87bf71db14b1eceeb0b4be20915"],["/static/media/elephant.0947052c.mp3","0947052c3f0f7d7846404e65a8c2a5ed"],["/static/media/elephant.29543a86.png","29543a86b42867683e672838b28cc032"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/flower.402eb492.png","402eb49269b72606851a8d298e16d1e1"],["/static/media/flower.c33e84ab.mp3","c33e84ab2272c108dd103bf048d22db0"],["/static/media/giraffe.865c583f.png","865c583fb5c9e313836ef4e565b91412"],["/static/media/giraffe.b4975b8f.mp3","b4975b8faf73d4cec28afa83b0647eaf"],["/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/static/media/lamp.84f7e632.png","84f7e632746e3acfe32731cc14cc4c45"],["/static/media/lamp.c490bb6d.mp3","c490bb6d7b207c69236d9f96f88177df"],["/static/media/mirror.aad12de5.mp3","aad12de52a271cfc24418c6ec53b7a25"],["/static/media/mirror.c7863d94.png","c7863d94662693968d48630915f96ce8"],["/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/static/media/pillow.1effc30a.png","1effc30a8dd297de9db8c3fb01e0f966"],["/static/media/pillow.c5d30bcd.mp3","c5d30bcd6e6c531af27196e03df5a41e"],["/static/media/rabbit.10346f4b.mp3","10346f4bb5401338f48601ebf9b0997d"],["/static/media/rabbit.28eaa0b3.png","28eaa0b31eb466aa5dd356f5aa526cd8"],["/static/media/radio.06162acf.png","06162acf5a414c9db93c79c69e6123fb"],["/static/media/radio.3501519f.mp3","3501519fcf930788e3be6548e6f8bced"],["/static/media/ring.2a7ec980.mp3","2a7ec980373936b75ef666cc184dd04b"],["/static/media/ring.e60340da.png","e60340dac5748a6b8bf1db7abcb74dff"],["/static/media/shirt.469e2451.mp3","469e24512f2f8c7e30c03fa026dc2baa"],["/static/media/shirt.8888d719.png","8888d719539d1a8948e37595f6bc0f11"],["/static/media/shoes.1cacb7ad.mp3","1cacb7ad5396387e04e7435702bf135b"],["/static/media/shoes.b6cebb00.png","b6cebb00dd3d8ca0117d4d7f7d62ab16"],["/static/media/slippers.ac173aab.mp3","ac173aab478d127fc3862e2a37bad21c"],["/static/media/slippers.f69031e4.png","f69031e46221ca42315412e42a33ea2b"],["/static/media/socks.3546fa66.png","3546fa664f1d6f451da6235f90af58d3"],["/static/media/socks.be1e04b5.mp3","be1e04b5fe5015d1dd8f4dd4dab33dad"],["/static/media/stingray_2.07481d95.png","07481d95cf3c78e0fc4ae62fe330480f"],["/static/media/stingray_3.f28577f6.png","f28577f633a978b26434504ac3f9757f"],["/static/media/stingray_4.7b0c0b78.png","7b0c0b78f72a62f7720a2f19512e7f0a"],["/static/media/telephone.f4fd9c39.mp3","f4fd9c39afa67236e75ee341075a56d1"],["/static/media/tree.ba247312.png","ba2473121573b52e9f051939f92778a8"],["/static/media/tree.e4de2dac.mp3","e4de2dac01ea3571e6bd5ae5915f41b8"],["/static/media/trouser.466631e3.png","466631e3dc82f77001b6324b51d6c0f7"],["/static/media/trouser.b30c833c.mp3","b30c833cac9f987b95a64010f68eaebb"],["/static/media/vase.c2162390.png","c21623905cf26ddfce481d73457a208e"],["/static/media/vase.cb335d6a.mp3","cb335d6aef0d427ea290f7a43621ea47"],["/static/media/window.39a63c17.png","39a63c17f9bcd0d08cd7d13f320c447e"],["/static/media/window.ba040110.mp3","ba040110e765beee8b0320755d779706"],["/static/media/window_fish.1b794c88.png","1b794c889446251dbf231c9088268cda"],["/static/media/zebra.99e4f151.png","99e4f151f62179488f0c2a052e9e428b"],["/static/media/zebra.b032028a.mp3","b032028aeb2d9e785f6325884318cfdb"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







