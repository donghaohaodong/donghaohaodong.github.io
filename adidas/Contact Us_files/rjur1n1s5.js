



/* ControlTag Loader for adidas NA 9ba60e7d-29b5-4dc3-8e7b-105df6abe4ad */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.29.0","schema_version":3},"confid":"rjur1n1s5","context_terms":[],"publisher":{"name":"adidas NA","active":true,"uuid":"9ba60e7d-29b5-4dc3-8e7b-105df6abe4ad","version_bucket":"stable","id":2340},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"user_data_timing":"load","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"dfp_premium":true,"control_tag_namespace":"adidasus"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"//connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"//link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","click":"//apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","is_optout":"//beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"site":{"name":"adidas US","cap":255,"id":1651627,"organization_id":2340,"uid":"rjur1n1s5"},"tags":[{"id":29220,"name":"Krux DTC URL Prams","content":"<script>\n  \n(function(){\n  var urlParams = Krux('require:util').urlParams();\n\n  var i,toCollect = ['cm_mmc','cm_mmc1','cm_mmc2','cm_mmca1','cm_mmca2','gclsrc'];\n\n  for (i =0;i<toCollect.length;i++){\n      if(urlParams[toCollect[i]]){\n          Krux('set','page_attr_'+toCollect[i],urlParams[toCollect[i]]);\n      }\n  }\n})();\n  \n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":29221,"name":"Krux DTC UTM Params","content":"<script>\n(function(){\n\n\tvar params = Krux('require:util').urlParams();\n\t\n\tKrux ('set', { \n\t'page_attr_adidasUs_utm_source': params.utm_source,\n\t'page_attr_adidasUs_utm_medium': params.utm_medium,\n\t'page_attr_adidasUs_utm_campaign': params.utm_campaign,\n\t'page_attr_adidasUs_utm_content': params.utm_content,\n\t'page_attr_adidasUs_utm_term': params.utm_term \n\t});\n\t\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":29331,"name":"Krux Datalayer ingester","content":"<script>\n(function() {\n    var dataObj = Krux('scrape.js_global', 'krux_data'),\n        userKeys = 'user',\n        omitKeys = 'false',\n        custDelimit = 'false',\n        prefix = 'undefined_',\n        config = {\n            'userKeys': userKeys ? userKeys.split(',') : undefined,\n            'omitKeys': (omitKeys ? omitKeys.split(',') : []).concat([\n                /gtm\\./, // GTM events\n                /sessionid/i, // Session ids\n                /\\.phpsessid$/i, // Session ids\n                /\\.sid$/i, // Session ids\n                /\\.zenid$/i, // Session ids\n                /\\.requestid$/i // Request ids\n            ]),\n            'omitValues': [\n                /.*@.*(?:\\..*)+/, // Email Addresses\n                /gtm\\./, // GTM events\n                /^(https?:)?\\/\\/[^\\/]+/, // URLs\n                /^\\/[^\\/]+/, // URL paths\n                /.{255}/ // Long values\n            ],\n            'customDelimited': custDelimit ? custDelimit.split(',') : undefined,\n            'caseSensitive': 'false' === 'true',\n            'useFullPath': 'false' === 'true',\n            'useLastValue': 'false' === 'true',\n            'convertAttrNames': []\n        };\n    if (!prefix.match(/^$|null|undefined|false/)) {\n        config.convertAttrNames.push({\n            pattern: /((?:page|user)_attr_)/,\n            replacement: '$1' + prefix\n        });\n    }\n    Krux('ingestDataLayer', dataObj, config);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":30031,"name":"Transaction DTC","content":"<script>\n(function() {\n    function fire_pixel(transactionParams) {\n        Krux('require:http').pixel({\n            url: '//beacon.krxd.net/transaction.gif',\n            data: transactionParams\n        });\n    }\n\n    function date_from_string(date_string) {\n        if (!Date.parse(date_string)) return;\n        var date_obj = new Date(date_string),\n            year = date_obj.getFullYear() + '-',\n            day = date_obj.getDate(),\n            month = date_obj.getMonth() + 1;\n\n        month = (month < 9) ? '0' + month + '-' : month + '-';\n        day = (day < 9) ? '0' + day : day;\n\n        var date = year + month + day;\n        return date;\n    }\n    function krux_to_string(idx) {\n        var tmp = Krux('scrape.js_global', idx) || [];\n        if (typeof(tmp) === 'string') {\n            return tmp;\n        } else {\n            return tmp.join();\n        }\n    }\n\n    var transInfo = {};\n\n    var pickupParams = ['customer_city', 'customer_country', 'customer_payment_type', 'customer_shipping_method',\n        'is_customizable', 'order_gift_card_amount', 'order_level_discount', 'order_pre_discount_amount', 'order_subtotal',\n        'product_brand', 'product_category', 'product_collection', 'product_color', 'product_gender', 'product_group',\n        'product_line_style', 'product_model_id', 'product_name', 'product_personalization',\n        'product_price_type', 'product_purchase_type', 'product_quantity', 'product_rating', 'product_reviews',\n        'product_size', 'product_sku', 'product_sport', 'product_status', 'product_type', 'product_video', 'signup_step'\n    ];\n    var priceParams = [\n        ['product_price', 'page.product.price']\n    ];\n\n    transInfo.price = Krux('scrape.js_global', 'utag_data.order_subtotal_eur');\n    transInfo.quantity = Krux('scrape.js_global', 'utag_data.total_products');\n    transInfo.date = date_from_string(Krux('scrape.js_global', 'utag_data.order_time'));\n    transInfo.site_name = Krux('scrape.js_global', 'utag_data.site_name') || 'none';\n    for (i = 0; i < pickupParams.length; i++) {\n        transInfo[pickupParams[i]] = krux_to_string('utag_data.' + pickupParams[i]);\n    }\n    for (i = 0; i < priceParams.length; i++) {\n        transInfo[priceParams[i][0]] = krux_to_string('krux_data.' + priceParams[i][1]);\n    }\n    var order_id = Krux('scrape.js_global', 'krux_data.user.order_id');\n\n    transInfo._kpid = Krux('get', 'pubid');\n\n    if (transInfo.price && transInfo.quantity && transInfo.date && order_id) {\n        fire_pixel(transInfo);\n    }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":30271,"name":"US - FBCA Pixel","content":"<!-- Facebook Pixel Code -->\n<script>\n! function(f, b, e, v, n, t, s) {\n  if (f.fbq) return;\n  n = f.fbq = function() {\n    n.callMethod ?\n      n.callMethod.apply(n, arguments) : n.queue.push(arguments)\n  };\n  if (!f._fbq) f._fbq = n;\n  n.push = n;\n  n.loaded = !0;\n  n.version = '2.0';\n  n.queue = [];\n  t = b.createElement(e);\n  t.async = !0;\n  t.src = v;\n  s = b.getElementsByTagName(e)[0];\n  s.parentNode.insertBefore(t, s)\n}(window,\n  document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');  \n  fbq('init', '1420556241555304'); // Insert your pixel ID here.\n\n(function() {\n  if (fbq) {\n    var lsSegs = parent.Krux('get', 'user_segments') || Krux('get', 'user_segments') || []; // Segs in LS -> It is in an iframe so that parent.Krux\n    var targetSegIds = 'rwvdyp78f,rwvedryk2,rwvdr4hof,rwvd3m1hb,rwvd767yj,rwu96hp9q,rvrcohzq2,rwu94r61e,rvr3fetjr,rwu92etei,rvr3ht2nk,rwu9z5iwg,rvntox4qw,rwu9ww9ki,rvr3tq6ft,rwu9ua2hr,rvr3wutxp,rvkaffjw2,rwvcqq30b,rv7j3t06s,rrgzt493d,rwvcmbhkm,rts7kc1c3,rrgzpo1e3,rvkaffjw2'.split(','); // Segs to target\n      \n    // console.log('krux segments retrieved: ' + lsSegs);\n    \n    targetSegIds.map(function(seg) {\n      if (lsSegs.indexOf(seg) !== -1) {\n        fbq('track', 'ViewContent', {\n          segment_id: seg\n        });\n      }\n    });\n  }\n})();\n</script>\n\n\n","target":null,"target_action":"append","timing":"onload","method":"iframe","priority":null,"template_replacement":false,"internal":false,"criteria":["and",["and",["and",["contains","$url","adidas.com/us"]],["andNot",["matches","$url","development|staging"]]]]},{"id":31995,"name":"Krux UTM Media Tag - Search","content":"<script>\n(function() {\n\n    var protocol = location.protocol === 'https:' ? 'https:' : 'http:',\n        impressionURL = Krux('get', 'url_impression'),\n        config = 'rkriqfoji',\n        utmParams = Krux('scrape.js_global', 'krux_data.page') || Krux('require:util').urlParams(),\n        _ = Krux('require:underscore'),\n        confID = utmParams.k_confid || utmParams.utm_confid || (!config.match(/^$|config|undefined|false|null/) && config),\n        pixelParam, store;\n\n    // Function to remove empty values from an object, needed for object comparison\n    function filterConfig(config) {\n        return _.omit(config, function(value) {\n            return !value;\n        });\n    }\n\n    // Function to retrieve capping info from sessionStorage\n    function get(key) {\n        try {\n            return JSON.parse(sessionStorage.getItem(key) || '[]');\n        } catch (e) {\n            return [];\n        }\n    }\n\n    // Function to add capping info to sessionStorage\n    function set(key, value) {\n        try {\n            sessionStorage.setItem(key, JSON.stringify(value));\n        } catch (e) {}\n    }\n\n    // Function to check if tag is valid by comparing aginst capping info\n    function configValidate(config) {\n        for (var i = 0; i < store.length; i++) {\n            if (_.isEqual(store[i], config)) return false;\n        }\n        return true;\n    }\n\n    // Ensure minimum requirements are met\n    if (confID && utmParams.utm_campaign && utmParams.utm_source) {\n        pixelParam = filterConfig({\n            'confid': confID,\n            'campaignid': utmParams.k_campaign || utmParams.utm_campaign,\n            'siteid': utmParams.k_source || utmParams.utm_source,\n            'advertiserid': utmParams.k_advertiserid || utmParams.utm_advertiserid,\n            'placementid': utmParams.k_placementid || utmParams.utm_placementid,\n            'adid': utmParams.k_adid || utmParams.utm_adid,\n            'creativeid': utmParams.k_creativeid || utmParams.utm_creativeid\n        });\n\n        // Retrieve capping info\n        store = get('k_utm_store');\n\n        if (configValidate(pixelParam)) {\n            // Update capping info to prevent re-fires\n            store.push(pixelParam);\n            set('k_utm_store', store);\n            Krux('require:http').pixel({\n                url: protocol + impressionURL,\n                data: pixelParam\n            });\n        }\n    }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["or",["contains","$page_attr_cm_mmc",["AdieSEM_Google"]],["contains","$page_attr_cm_mmc",["AdieSEM_PLA_Google"]]]]]},{"id":31996,"name":"Krux Media Tag Social","content":"<script>\n(function() {\n\n    var protocol = location.protocol === 'https:' ? 'https:' : 'http:',\n        impressionURL = Krux('get', 'url_impression'),\n        config = 'rkrisraxx',\n        utmParams = Krux('scrape.js_global', 'krux_data.page') || Krux('require:util').urlParams(),\n        _ = Krux('require:underscore'),\n        confID = utmParams.k_confid || utmParams.utm_confid || (!config.match(/^$|config|undefined|false|null/) && config),\n        pixelParam, store;\n\n    // Function to remove empty values from an object, needed for object comparison\n    function filterConfig(config) {\n        return _.omit(config, function(value) {\n            return !value;\n        });\n    }\n\n    // Function to retrieve capping info from sessionStorage\n    function get(key) {\n        try {\n            return JSON.parse(sessionStorage.getItem(key) || '[]');\n        } catch (e) {\n            return [];\n        }\n    }\n\n    // Function to add capping info to sessionStorage\n    function set(key, value) {\n        try {\n            sessionStorage.setItem(key, JSON.stringify(value));\n        } catch (e) {}\n    }\n\n    // Function to check if tag is valid by comparing aginst capping info\n    function configValidate(config) {\n        for (var i = 0; i < store.length; i++) {\n            if (_.isEqual(store[i], config)) return false;\n        }\n        return true;\n    }\n\n    // Ensure minimum requirements are met\n    if (confID && utmParams.utm_campaign && utmParams.utm_source) {\n        pixelParam = filterConfig({\n            'confid': confID,\n            'campaignid': utmParams.k_campaign || utmParams.utm_campaign,\n            'siteid': utmParams.k_source || utmParams.utm_source,\n            'advertiserid': utmParams.k_advertiserid || utmParams.utm_advertiserid,\n            'placementid': utmParams.k_placementid || utmParams.utm_placementid,\n            'adid': utmParams.k_adid || utmParams.utm_adid,\n            'creativeid': utmParams.k_creativeid || utmParams.utm_creativeid\n        });\n\n        // Retrieve capping info\n        store = get('k_utm_store');\n\n        if (configValidate(pixelParam)) {\n            // Update capping info to prevent re-fires\n            store.push(pixelParam);\n            set('k_utm_store', store);\n            Krux('require:http').pixel({\n                url: protocol + impressionURL,\n                data: pixelParam\n            });\n        }\n    }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["or",["contains","$page_attr_cm_mmc",["AdiPaidSocial"]],["contains","$page_attr_cm_mmc",["AdiSocialMedia"]]]]]},{"id":29216,"name":"Krux DTC Standard","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":45,"name":"TubeMogul user match","content":"<script>\r\n    (function() {\r\n        new Image().src = location.protocol + '//sync-tm.everesttech.net/upi/pid/NC4WTmcy?redir=' + encodeURIComponent('https://beacon.krxd.net/usermatch.gif?partner_id=cb276571-e0d9-4438-9fd4-80a1ff034b01&puid=${TM_USER_ID}');\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.1c86c30cac854ccdacab6e3099f5b9ee', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());