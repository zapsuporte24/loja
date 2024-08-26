
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.48ba907a985e4f54d64b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6721.latest.pt-BR.3df8209083289e7d749d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6276.latest.pt-BR.a91148d59ab9163c723b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7623.latest.pt-BR.d3dbd54ce6ce8588a9a8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.9a20a82d94119fcb3ebc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9033.latest.pt-BR.255b8a9d0304673e30f6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3502.latest.pt-BR.9ed854e0783852147f46.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1519.latest.pt-BR.31d9fdc0eefc437489a1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4415.latest.pt-BR.053c2eda76c8241f2aec.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4760.latest.pt-BR.5c9da987da1880f599ff.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/737.latest.pt-BR.1f9692226eb9a8787532.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4253.latest.pt-BR.740c1e01b1f934f2ea4d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3337.latest.pt-BR.d960d980bc591c14afb7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.04e7271456ff96f12daf.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/6721.latest.pt-BR.5e47e00c5eff4e2cef27.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.7030762cc777f3a6277f.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.1d7ba5c5498e967a4d84.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  