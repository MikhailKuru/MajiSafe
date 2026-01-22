<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const CACHE_NAME = 'majiSafe-cache-v1';</p>
<p class="p1">const APP_SHELL = [</p>
<p class="p1"><span class="Apple-converted-space">  </span>'/',</p>
<p class="p1"><span class="Apple-converted-space">  </span>'/index.html',</p>
<p class="p1"><span class="Apple-converted-space">  </span>'/sw.js',</p>
<p class="p1"><span class="Apple-converted-space">  </span>'https://unpkg.com/leaflet/dist/leaflet.css',</p>
<p class="p1"><span class="Apple-converted-space">  </span>'https://unpkg.com/leaflet/dist/leaflet.js'</p>
<p class="p1">];</p>
<p class="p2"><br></p>
<p class="p1">self.addEventListener('install', event =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>event.waitUntil(</p>
<p class="p1"><span class="Apple-converted-space">    </span>caches.open(CACHE_NAME)</p>
<p class="p1"><span class="Apple-converted-space">      </span>.then(cache =&gt; cache.addAll(APP_SHELL))</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">self.addEventListener('fetch', event =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>event.respondWith(</p>
<p class="p1"><span class="Apple-converted-space">    </span>caches.match(event.request).then(cached =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>return cached || fetch(event.request).then(response =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>return caches.open(CACHE_NAME).then(cache =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">          </span>cache.put(event.request, response.clone());</p>
<p class="p1"><span class="Apple-converted-space">          </span>return response;</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">      </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>}).catch(() =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>if (event.request.destination === 'document') {</p>
<p class="p1"><span class="Apple-converted-space">        </span>return caches.match('/index.html');</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>})</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p1">});</p>
</body>
</html>
