
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"130",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(a){a=a.substring(1).split(\"\\x26\");for(var b=0;b\u003Ca.length;b++)if(\"utm\"===a[b].substring(0,3)||\"gclid\"===a[b].substring(0,5))d+=a[b]+\"\\x26\"}var d=\"\",c={};\"\"===document.referrer\u0026\u0026(c.dimension50=\"(NULL)\");\"\"!==window.location.search\u0026\u0026e(window.location.search);\"\"!==window.location.hash\u0026\u0026e(window.location.hash);0\u003Cd.length\u0026\u0026(c.dimension53=d);dataLayer.push({event:\"uaEvent\",uaStatus:\"tracked\"});var f=void 0;c.hitCallback=f;return c})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-11681763-186"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"(NULL)",
      "vtp_name":"p.t"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"u.huid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");ga(\"create\",\"",["escape",["macro",2],7],"\",\"auto\",{allowLinker:!0});ga(\"require\",\"displayfeatures\");ga(\"require\",\"linkid\");ga(\"set\",{anonymizeIp:!0,historyImportTask:null,contentGroup1:\"",["escape",["macro",3],7],"\"});\nvar a=\/([\\w-+.]+@[\\w-.]+)\/;ga(\"set\",\"\\x26dl\",window.location.href.replace(a,\"%removed%\"));a.test(document.referrer)\u0026\u0026ga(\"set\",\"\\x26dr\",document.referrer.replace(a,\"%removed%\"));a=",["escape",["macro",4],8,16],";\"undefined\"!==typeof a\u0026\u0026ga(\"set\",\"userId\",a);window.optimizely=window.optimizely||[];window.optimizely.push(\"activateUniversalAnalytics\");return!0})();"]
    },{
      "function":"__c",
      "vtp_value":".kijiji.ca"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function f(g,a){var b=new Date;b.setTime(b.getTime()+2592E6);b=\"expires\\x3d\"+b.toGMTString();var c=\"domain\\x3d\"+",["escape",["macro",6],8,16],",d=\"path\\x3d\/\";document.cookie=g+\"\\x3d\"+a+\"; \"+b+\"; \"+c+\"; \"+d}function h(a){a+=\"\\x3d\";for(var d=document.cookie.split(\";\"),b=0;b\u003Cd.length;b++){var c=d[b].trim();if(0==c.indexOf(a))return c.substring(a.length,c.length)}return\"\"}var e=\"eCGRN\";var a=h(e);\"\"===a\u0026\u0026(a=Math.floor(1E6*Math.random()));f(e,a);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"s"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",8],8,16],"){sr=\"\";srRaw=",["escape",["macro",8],8,16],".sr;for(var a=0;a\u003CsrRaw.length;a++){var e=srRaw[a].pos,f=srRaw[a].id,g=srRaw[a].rt,b=srRaw[a].ftr;if(b){for(var c=\"\",d=0;d\u003Cb.length;d++)c=c+b[d]+\"~\";b=c}else b=\"\";sr=sr+e+\",\"+f+\",\"+g+\",\"+b+\";\"}return sr}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"c"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"l"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"p"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={},b=",["escape",["macro",10],8,16],",c=",["escape",["macro",11],8,16],",e=",["escape",["macro",12],8,16],",f=",["escape",["macro",8],8,16],",d=",["escape",["macro",13],8,16],";b\u0026\u0026(b.l1\u0026\u0026(a.l1Cat=b.l1.id),b.l2\u0026\u0026(a.l2Cat=b.l2.id));c\u0026\u0026(c.l1\u0026\u0026(a.l1Loc=c.l1.id),c.l2\u0026\u0026(a.l2Loc=c.l2.id));e\u0026\u0026(a.pageType=e.t);f\u0026\u0026(a.keyword=f.kw);b=\"^(gtm.|uaEvent)\";d\u0026\u0026((new RegExp(b,\"i\")).test(d)||(a.event=d));return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"u"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var h={p:",["escape",["macro",12],8,16],",c:",["escape",["macro",10],8,16],",l:",["escape",["macro",11],8,16],",u:",["escape",["macro",15],8,16],"},e={1:[\"p.t\",\"(NULL)\"],2:[\"c.l1.id\"],3:[\"c.l2.id\"],4:[\"c.l3.id\"],5:[\"c.l4.id\"],6:[\"l.l1.id\"],7:[\"l.l2.id\"],8:[\"l.l3.id\"],9:[\"l.l4.id\"],10:[\"u.li\"]},b,f=\"\";for(b in e)if(e.hasOwnProperty(b)){var a=e[b];if(\"object\"===typeof a)a:{var c=a[0];a=a[1];c=c.split(\".\");for(var g=0,d=h;g\u003Cc.length;g++)if(d=d[c[g]],\"undefined\"===typeof d)break a;a=d}\"undefined\"!==typeof a\u0026\u0026(f=f+\"u\"+b+\"\\x3d\"+a+\";\")}return h=\nf})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"-1",
      "vtp_name":"c.c.id"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"-1",
      "vtp_name":"l.c.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"a.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"s.cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"clickInfo"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f={getDomain:function(){var a=\"",["escape",["macro",6],7],"\",b=a.replace(\".\",\"[.]\");return(new RegExp(b,\"i\")).test(document.domain)?a:document.domain},getCookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0;c\u003Cb.length;c++){var d=b[c].trim();if(0==d.indexOf(a))return d.substring(a.length,d.length)}},setCookie:function(a,b,c){var d=new Date;d.setTime(d.getTime()+c);c=\"expires\\x3d\"+d.toGMTString();d=\"domain\\x3d\"+this.getDomain();var e=\"path\\x3d\/\";document.cookie=a+\"\\x3d\"+b+\n\"; \"+c+\"; \"+d+\"; \"+e;return!0},parseCookieValue:function(a){var b={};a=a.split(\":\");for(var c=0;c\u003Ca.length;c++){var d=a[c].trim().split(\"\\x3d\");b[d[0]]=d[1]}return b},deleteCookie:function(a){var b=new Date;b.setTime(1);b=\"expires\\x3d\"+b.toGMTString();var c=\"domain\\x3d\"+this.getDomain(),d=\"path\\x3d\/\";document.cookie=a+\"\\x3d; \"+b+\"; \"+c+\"; \"+d;return!0},createEventCookie:function(a,b,c){var d=\"eCG_eh\",e=",["escape",["macro",3],8,16],",f=",["escape",["macro",17],8,16],",g=",["escape",["macro",18],8,16],",h=",["escape",["macro",19],8,16],"||\n\"\",k=",["escape",["macro",20],8,16],"||\"\",l=",["escape",["macro",21],8,16],"||\"\";a=\"ec\\x3d\"+a+\":ea\\x3d\"+b+\":el\\x3d\"+encodeURIComponent(c)+\":pt\\x3d\"+a+\":url\\x3d\"+window.location+\":cc\\x3d\"+f+\":lc\\x3d\"+g+\":aid\\x3d\"+h+\":ppt\\x3d\"+e+\":scid\\x3d\"+k+\":ci\\x3d\"+encodeURIComponent(JSON.stringify(l))+\":\";this.setCookie(d,a,3E4);return!0},readEventCookie:function(){var a;var b=\"eCG_eh\";b=this.getCookie(b);\"\"!==b\u0026\u0026\"undefined\"!==typeof b\u0026\u0026(a=this.parseCookieValue(b));a\u0026\u0026(a.el=decodeURIComponent(a.el||\"\"),a.ci=decodeURIComponent(a.ci||\n\"\"));return a},createClickInfoCookie:function(a){a={};var b=\"eCG_ci\";a.p={};a.p.ppt=\"",["escape",["macro",3],7],"\";",["escape",["macro",20],8,16],"\u0026\u0026(a.s={},a.s.cid=\"",["escape",["macro",20],7],"\");a.clickInfo=",["escape",["macro",21],8,16],";a=encodeURIComponent(JSON.stringify(a));this.setCookie(b,a,3E4);return!0},readClickInfoCookie:function(){var a=\"eCG_ci\";if(a=this.getCookie(a)){\":\"===a.slice(-1)\u0026\u0026(a=a.substr(0,a.length-1));var b=JSON.parse(decodeURIComponent(a))}return b},getCVsFromLegacyGACookie:function(){var a={};var b=\"__utmv\";\nb=this.getCookie(b);if(\"\"!==b\u0026\u0026\"undefined\"!==typeof b)for(cvArray=b.split(\"|\"),b=0;b\u003CcvArray.length;b++){var c=cvArray[b].trim().split(\"\\x3d\");4===c.length\u0026\u0026(a[\"cv\"+c[0]]={name:c[1],value:c[2],scope:c[3]})}return a}};return f})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"p.lng",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"kijiji.unhaggle.com\"==",["escape",["macro",23],8,16],"?21993:\/^PostAd$|^PostAdCategory$\/.test(",["escape",["macro",3],8,16],")||\/PostAd(Free|Paid)Success\/.test(",["escape",["macro",24],8,16],")?\"fr_CA\"==",["escape",["macro",25],8,16],"?32034:29467:[19623,50072]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){switch(",["escape",["macro",13],8,16],"){case \"FeatureAdSuccess\":return\"cCdyCJCot2AQ8P_k4QM\";case \"PostAdFreeSuccess\":return\"30djCLipt2AQ8P_k4QM\";case \"PostAdPaidSuccess\":return\"67JoCPqDw2AQ8P_k4QM\";case \"R2SEmailSuccess\":return\"IxhCCMept2AQ8P_k4QM\";case \"R2SPhoneBegin\":return\"xJxKCJuEw2AQ8P_k4QM\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"a"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"d"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"m"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"i"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function h(){if(a.s\u0026\u0026(a.s.u\u0026\u0026(a.accountType=a.s.u.at),a.s.attr)){var c=0;for(d in a.s.attr)a.s.attr.hasOwnProperty(d)\u0026\u0026c++;a.attrCount=c}if(a.a\u0026\u0026(a.a.u\u0026\u0026(a.accountType=a.a.u.at),a.a.attr)){c=0;for(d in a.a.attr)a.a.attr.hasOwnProperty(d)\u0026\u0026c++;a.attrCount=c;var b;a.a.attr.forsaleby_s\u0026\u0026(b=a.a.attr.forsaleby_s||\"\");a.a.attr.forrentbyhousing_s\u0026\u0026(b=a.a.attr.forrentbyhousing_s||\"\");a.a.attr.forsalebyhousing_s\u0026\u0026(b=a.a.attr.forsalebyhousing_s||\"\");a.a.attr.jobofferedby_s\u0026\u0026(b=a.a.attr.jobofferedby_s||\n\"\");a.a.attr.petofferedby_s\u0026\u0026(b=a.a.attr.petofferedby_s||\"\");a.forSaleBy=b}a.u\u0026\u0026a.u.be\u0026\u0026(a.bullseye=new String,\"undefined\"!=typeof a.u.be.um\u0026\u0026(a.bullseye+=\"age\\x3d\"+a.u.be.um+\";\"),\"undefined\"!=typeof a.u.be.us\u0026\u0026(a.bullseye+=\"gender\\x3d\"+a.u.be.us+\";\"),\"undefined\"!=typeof a.u.be.ebo\u0026\u0026(a.bullseye+=\"lastBuy\\x3d\"+a.u.be.ebo+\";\"),\"undefined\"!=typeof a.u.be.ebi\u0026\u0026(a.bullseye+=\"lastBid\\x3d\"+a.u.be.ebi+\";\"),\"undefined\"!=typeof a.u.be.ese\u0026\u0026(a.bullseye+=\"lastSearch\\x3d\"+a.u.be.ese+\";\"),\"undefined\"!=typeof a.u.be.evi\u0026\u0026\n(a.bullseye+=\"lastView\\x3d\"+a.u.be.evi+\";\"),\"undefined\"!=typeof a.u.be.ekw\u0026\u0026(a.bullseye+=\"lastKeywords\\x3d\"+a.u.be.ekw+\";\"));if(a.i\u0026\u0026a.i.srt){c=a.i.srt.f||\"\";var d=a.i.srt.d||\"\";a.i.srt.t=c+\"_\"+d}}function k(){var c;for(c in f)if(f.hasOwnProperty(c)){var b=f[c];if(\"object\"===typeof b)a:{var d=b[0];b=b[1];d=d.split(\".\");for(var g=0,e=a;g\u003Cd.length;g++)if(e=e[d[g]],\"undefined\"===typeof e)break a;b=e}\"undefined\"!==typeof b\u0026\u0026ga(\"set\",\"dimension\"+c,b)}}var a={p:",["escape",["macro",12],8,16],",c:",["escape",["macro",10],8,16],",\nl:",["escape",["macro",11],8,16],",s:",["escape",["macro",8],8,16],",u:",["escape",["macro",15],8,16],",a:",["escape",["macro",28],8,16],",d:",["escape",["macro",29],8,16],",m:",["escape",["macro",30],8,16],",i:",["escape",["macro",31],8,16],"};h();var f={39:[\"accountType\"],73:[\"u.ab\"],103:[\"forSaleBy\"],104:[\"attrCount\"],121:[\"u.cdt\"],122:[\"u.rt\"],123:[\"bullseye\"],130:[\"i.kw\"],131:[\"i.pn\"],132:[\"i.ps\"],133:[\"i.tr\"],134:[\"i.srt.t\"],167:[\"s.dc\"],168:[\"s.dcr\"],169:[\"s.dcp\"],170:[\"s.dcc\"],191:[\"u.abh\"]};k();return!0})();"]
    },{
      "function":"__c",
      "vtp_value":"931870493586891"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){\"undefined\"===typeof window.fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\"),window.fbq(\"set\",\"autoConfig\",!1,\"",["escape",["macro",33],7],"\"),window.fbq(\"init\",\"",["escape",["macro",33],7],"\"));\nreturn!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],"||\"\",b=\"\",c=\"\",d=\"\";",["escape",["macro",10],8,16],"\u0026\u0026",["escape",["macro",10],8,16],".c\u0026\u0026(b=",["escape",["macro",10],8,16],".c.id||\"\");",["escape",["macro",11],8,16],"\u0026\u0026",["escape",["macro",11],8,16],".c\u0026\u0026(c=",["escape",["macro",11],8,16],".c.id||\"\");",["escape",["macro",8],8,16],"\u0026\u0026(d=",["escape",["macro",8],8,16],".kw||\"\");return a={adId:a||\"\",topcategoryId:b||\"\",topLocationId:c||\"\",searchKeyword:d||\"\",FbPushViewContent:function(){window.fbq(\"track\",\"ViewContent\",{content_ids:this.adId,c:this.topcategoryId,l:this.topLocationId,content_type:\"product\"})},\nFbPushSearch:function(){window.fbq(\"track\",\"Search\",{c:this.topcategoryId,l:this.topLocationId,s:this.searchKeyword})},FbPushCompleteRegistration:function(){window.fbq(\"track\",\"CompleteRegistration\",{status:\"UserRegistrationAttempt\"})},FbPushAddToCart:function(){window.fbq(\"track\",\"AddToCart\",{content_ids:this.adId,c:this.topcategoryId,l:this.topLocationId,content_type:\"product\"})},FbPushAddToCartEmail:function(){window.fbq(\"track\",\"AddToCart\",{content_ids:this.adId,c:this.topcategoryId,l:this.topLocationId,\ncontent_type:\"product\",content_name:\"RES\"})},FbPushAddToCartPhone:function(){window.fbq(\"track\",\"AddToCart\",{content_ids:this.adId,c:this.topcategoryId,l:this.topLocationId,content_type:\"product\",content_name:\"RPB\"})},FbPushInitiateCheckout:function(){window.fbq(\"track\",\"InitiateCheckout\",{content_ids:this.adId,c:this.topcategoryId,l:this.topLocationId,content_type:\"product\"})},FbPushPurchase:function(){window.fbq(\"track\",\"Purchase\",{content_ids:this.adId,c:this.topcategoryId,l:this.topLocationId,\ncontent_type:\"product\",value:\"0.00\",currency:\"USD\"})},FbPushWatchList:function(){window.fbq(\"track\",\"AddToWishlist\",{content_ids:this.adId,c:this.topcategoryId,l:this.topLocationId,content_type:\"product\"})},FbPushPayment:function(){window.fbq(\"track\",\"AddPaymentInfo\",{content_ids:this.adId,c:this.topcategoryId,l:this.topLocationId,content_type:\"product\"})}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/www.google-analytics.com\/analytics.js\",\"ga\");ga(\"create\",\"",["escape",["macro",2],7],"\",\"auto\",{allowLinker:!0});ga(\"require\",\"displayfeatures\");ga(\"require\",\"linkid\");ga(\"require\",\"ec\");ga(\"set\",{anonymizeIp:!0,historyImportTask:null,\nforceSSL:!0,contentGroup1:\"",["escape",["macro",3],7],"\"});var a=\/([\\w-+.]+@[\\w-.]+)\/;ga(\"set\",\"\\x26dl\",window.location.href.replace(a,\"%removed%\"));a.test(document.referrer)\u0026\u0026ga(\"set\",\"\\x26dr\",document.referrer.replace(a,\"%removed%\"));a=",["escape",["macro",4],8,16],";\"undefined\"!==typeof a\u0026\u0026ga(\"set\",\"userId\",a);window.optimizely=window.optimizely||[];window.optimizely.push(\"activateUniversalAnalytics\");return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");ga(\"create\",\"",["escape",["macro",2],7],"\",\"auto\",{name:\"srp\",allowLinker:!0});ga(\"srp.require\",\"displayfeatures\");ga(\"srp.require\",\"linkid\");ga(\"srp.set\",{anonymizeIp:!0,historyImportTask:null,\ncontentGroup1:\"",["escape",["macro",3],7],"\"});var a=\/([\\w-+.]+@[\\w-.]+)\/;ga(\"srp.set\",\"\\x26dl\",window.location.href.replace(a,\"%removed%\"));a.test(document.referrer)\u0026\u0026ga(\"srp.set\",\"\\x26dr\",document.referrer.replace(a,\"%removed%\"));a=",["escape",["macro",4],8,16],";\"undefined\"!==typeof a\u0026\u0026ga(\"srp.set\",\"userId\",a);window.optimizely=window.optimizely||[];window.optimizely.push(\"activateUniversalAnalytics\");return!0})();"]
    },{
      "function":"__cid"
    },{
      "function":"__c",
      "vtp_value":""
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function h(){a.c\u0026\u0026\"undefined\"===typeof a.c.l1\u0026\u0026a.c.l0\u0026\u0026(a.c.l1=a.c.l0);if(a.p){if(a.p.pl_v=a.p.pl||\"\",a.p.v\u0026\u0026(a.p.pl_v+=\" (\"+a.p.v+\")\"),a.p.cfg){var b=\"\";for(d in a.p.cfg)a.p.cfg.hasOwnProperty(d)\u0026\u0026(b+=d+\"\\x3d\"+a.p.cfg[d]+\";\");a.p.cfgStr=b}}else a.p={};if(a.m){var c=a.m.t||\"\";b=a.m.dr||\"\";a.m.rt=c+\"_\"+b}a.d\u0026\u0026(a.d.gtm=",["escape",["macro",38],8,16],"+\" \"+",["escape",["macro",39],8,16],"+\":\"+",["escape",["macro",40],8,16],"+\" \");if(a.s\u0026\u0026(a.s.srt\u0026\u0026(c=a.s.srt.f||\"\",b=a.s.srt.dr||\"\",a.s.srt.t=c+\"_\"+b),b=a.s.attr)){var d;\nc=0;for(d in b)b.hasOwnProperty(d)\u0026\u0026c++;a.s.attrCount=c}a.clickInfo\u0026\u0026(a.clickInfoStr=JSON.stringify(a.clickInfo))}function k(){var b;for(b in f)if(f.hasOwnProperty(b)){var c=f[b];if(\"object\"===typeof c)a:{var d=c[0];c=c[1];d=d.split(\".\");for(var g=0,e=a;g\u003Cd.length;g++)if(e=e[d[g]],\"undefined\"===typeof e)break a;c=e}\"undefined\"!==typeof c\u0026\u0026ga(\"srp.set\",\"dimension\"+b,c)}}var a={p:",["escape",["macro",12],8,16],",c:",["escape",["macro",10],8,16],",l:",["escape",["macro",11],8,16],",s:",["escape",["macro",8],8,16],",u:",["escape",["macro",15],8,16],",a:",["escape",["macro",28],8,16],",\nd:",["escape",["macro",29],8,16],",m:",["escape",["macro",30],8,16],",clickInfo:",["escape",["macro",21],8,16],"};h();var f={1:[\"p.t\",\"(NULL)\"],2:void 0,3:void 0,4:void 0,5:void 0,6:void 0,7:void 0,8:void 0,9:[\"l.l4.id\"],10:[\"c.c.id\",-1],11:void 0,12:[\"l.c.id\",-1],13:void 0,14:void 0,15:[\"p.lng\"],16:[\"p.vurl\"],17:[\"p.cfgStr\"],19:[\"u.lip\"],20:[\"u.huid\"],21:void 0,22:void 0,23:[\"u.li\"],24:[\"u.at\"],25:[\"u.tg.stg\"],28:[\"u.tg.ptg\"],30:void 0,31:void 0,32:void 0,33:void 0,34:void 0,35:void 0,36:void 0,37:void 0,38:void 0,39:void 0,40:[\"s.kw\"],\n41:[\"s.pn\"],42:[\"s.ps\"],43:[\"s.tr\"],44:[\"l.d\"],45:void 0,46:[\"l.ltlng\"],47:[\"s.srt.t\"],48:[\"p.vt\"],49:void 0,68:void 0,69:void 0,70:void 0,71:void 0,73:[\"u.ab\"],74:void 0,100:[\"s.prc.mn\"],101:[\"s.prc.mx\"],103:void 0,104:void 0,105:[\"s.t\"],112:[\"s.cid\"],142:void 0,143:void 0,144:void 0,145:void 0,146:void 0,147:void 0,148:void 0,191:[\"u.abh\"]};k();return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){switch(",["escape",["macro",13],8,16],"){case \"FeatureAdSuccess\":return\"5DczCMf153YQxcnfzAM\";case \"PostAdFreeSuccess\":return\"xgTSCL3353YQxcnfzAM\";case \"PostAdPaidSuccess\":return\"ZK9GCMzE1HYQxcnfzAM\";case \"R2SEmailSuccess\":return\"isABCNz453YQxcnfzAM\";case \"R2SPhoneBegin\":return\"5OUGCPH453YQxcnfzAM\";case \"R2SExternalBegin\":return\"TzLyCND153YQxcnfzAM\"}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmz"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";void 0==a\u0026\u0026(a=\"other\");return-1!=a.search(\"criteo\")?1:0})();"]
    },{
      "function":"__e"
    },{
      "function":"__u"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"c.l1.id",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"o"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function setDimensions(){var data={p:",["escape",["macro",12],8,16],",c:",["escape",["macro",10],8,16],",l:",["escape",["macro",11],8,16],",s:",["escape",["macro",8],8,16],",u:",["escape",["macro",15],8,16],",a:",["escape",["macro",28],8,16],",d:",["escape",["macro",29],8,16],",m:",["escape",["macro",30],8,16],",o:",["escape",["macro",50],8,16],",clickInfo:",["escape",["macro",21],8,16],"};function getComplexValues(){if(data.c)if(typeof data.c.l1===\"undefined\"\u0026\u0026data.c.l0)data.c.l1=data.c.l0;if(data.p){data.p.pl_v=data.p.pl||\"\";if(data.p.v)data.p.pl_v+=\" (\"+data.p.v+\")\";if(data.p.cfg){var cfgStr=\"\";for(key in data.p.cfg)if(data.p.cfg.hasOwnProperty(key))cfgStr+=\nkey+\"\\x3d\"+data.p.cfg[key]+\";\";data.p.cfgStr=cfgStr}}else data.p={};if(data.m){var t,dr;t=data.m.t||\"\";dr=data.m.dr||\"\";data.m.rt=t+\"_\"+dr}if(data.d)data.d.gtm=",["escape",["macro",38],8,16],"+\" \"+",["escape",["macro",39],8,16],"+\":\"+",["escape",["macro",40],8,16],"+\" \";if(data.s){if(data.s.srt){var f,dr;f=data.s.srt.f||\"\";dr=data.s.srt.dr||\"\";data.s.srt.t=f+\"_\"+dr}var attr=data.s.attr;if(attr){var key,attrCount=0;for(key in attr)if(attr.hasOwnProperty(key))attrCount++;data.s.attrCount=attrCount}}if(data.clickInfo)data.clickInfoStr=\nJSON.stringify(data.clickInfo)}getComplexValues();var dimensionMap={1:[\"p.t\",\"(NULL)\"],2:[\"c.l1.id\"],3:[\"c.l2.id\"],4:[\"c.l3.id\"],5:[\"c.l4.id\"],6:[\"l.l1.id\"],7:[\"l.l2.id\"],8:[\"l.l3.id\"],9:[\"l.l4.id\"],10:[\"c.c.id\",-1],11:[\"c.c.n\"],12:[\"l.c.id\",-1],13:[\"l.c.n\"],14:[\"p.pl_v\"],15:[\"p.lng\"],16:[\"p.vurl\"],17:[\"p.cfgStr\"],19:[\"u.lip\"],20:[\"u.huid\"],21:[\"u.hue\"],22:[\"u.haid\"],23:[\"u.li\"],24:[\"u.at\"],25:[\"u.tg.stg\"],28:[\"u.tg.ptg\"],30:[\"a.id\"],31:[\"a.prc.amt\"],32:[\"a.prc.t\"],33:[\"a.ic\"],34:[\"a.t\"],35:[\"a.lpdt\"],\n36:[\"a.cdt\"],37:[\"m.rt\"],38:[\"a.dl\"],40:[\"s.kw\"],41:[\"s.pn\"],42:[\"s.ps\"],43:[\"s.tr\"],44:[\"l.d\"],45:[\"l.pcid\"],46:[\"l.ltlng\"],47:[\"s.srt.t\"],48:[\"p.vt\"],49:[\"a.acs\"],68:[\"d.ua\"],69:[\"d.ck\"],70:[\"p.ly\"],71:[\"d.s_ck\"],74:[\"d.gtm\"],86:[\"o.id\"],100:[\"s.prc.mn\"],101:[\"s.prc.mx\"],105:[\"s.t\"],112:[\"s.cid\"],142:[\"a.u.scr\"],143:[\"a.u.rc\"],144:[\"m.cid\"],145:[\"p.ppt\"],146:[\"a.u.huid\"],147:[\"clickInfoStr\"],148:[\"s.ssid\"]};function retrieveDataValue(key,defaultVal){var key=key.split(\".\"),i=0,context=data;for(;i\u003C\nkey.length;i++){context=context[key[i]];if(typeof context===\"undefined\")return defaultVal}return context}function applyDimensions(){var idx,val;for(idx in dimensionMap){if(!dimensionMap.hasOwnProperty(idx))continue;val=dimensionMap[idx];if(typeof val===\"object\")val=retrieveDataValue(val[0],val[1]);if(typeof val===\"undefined\")continue;ga(\"set\",\"dimension\"+idx,val)}}applyDimensions();var setLocalDimensions=",["escape",["macro",32],8,16],";return true})();"]
    },{
      "function":"__smm",
      "vtp_input":["macro",24],
      "vtp_map":["list",["map","key","PostAdFreeSuccess","value","1"],["map","key","PostAdPaidSuccess","value","1"],["map","key","R2SEmailSuccess","value","2"],["map","key","R2SBidSuccess","value","2"],["map","key","R2SChatSuccess","value","2"],["map","key","R2SPhoneBegin","value","2"],["map","key","R2SSMSBegin","value","2"],["map","key","R2SExternalBegin","value","2"],["map","key","FeatureAdSuccess","value","3"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"0",
      "vtp_name":"uaNonInt"
    },{
      "function":"__v",
      "vtp_name":"socialEvent",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"c.c.id",
      "vtp_defaultValue":"-1",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"l.c.id",
      "vtp_defaultValue":"-1",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_input":["macro",13],
      "vtp_map":["list",["map","key","R2SEmailSuccess","value","reply_pixel"],["map","key","R2SBidSuccess","value","reply_pixel"],["map","key","R2SPhoneBegin","value","reply_pixel"],["map","key","R2SSMSBegin","value","reply_pixel"],["map","key","R2SExternalBegin","value","reply_pixel"],["map","key","PostAdFreeSuccess","value","post_ad_pixel"],["map","key","PostAdPaidSuccess","value","post_ad_pixel"]]
    },{
      "function":"__c",
      "vtp_value":"6a8908bd-1a9b-48fc-b849-d5663fc1d181"
    },{
      "function":"__k",
      "vtp_name":"_ga"
    },{
      "function":"__r"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d={rn:",["escape",["macro",61],8,16],",aId:",["escape",["macro",19],8,16],"||0,cId:\"\",setCId:function(){var a=",["escape",["macro",29],8,16],";this.cId=this.rn;a\u0026\u0026(this.cId=a.ck||this.cId)},kw:function(){var a=",["escape",["macro",8],8,16],",b=\"\";return a?a.kw||b:b},tId:\"\",setTId:function(){this.setCId();this.tId=this.cId+\"_\"+this.aId+\"_\"+this.rn},basket:[],addToBasket:function(a,b,c){a=\"kijiji.unhaggle.com\"==",["escape",["macro",23],8,16],"?{id:\"unhaggle\",price:b,quantity:c}:{id:a,price:b,quantity:c};this.basket.push(a)},queue:[],getQueue:function(){return this.queue},\naddToQueue:function(a){for(var b=0;b\u003Ca.length;b++)this.queue.push(a[b])},setAccountId:function(a){a=[{event:\"setAccount\",account:a}];this.addToQueue(a)},setCustomerId:function(a){a=[{event:\"setCustomerId\",id:a}];this.addToQueue(a)},setSiteType:function(a){a=[{event:\"setSiteType\",type:a}];this.addToQueue(a)},setRegion:function(a){a=[{event:\"setData\",ui_region:a}];this.addToQueue(a)},setCity:function(a){a=[{event:\"setData\",ui_city:a}];this.addToQueue(a)},setCategory:function(a){a=[{event:\"setData\",\nui_category:a}];this.addToQueue(a)},setConvType:function(a){a=[{event:\"setData\",ui_convtype:a}];this.addToQueue(a)},setLanguage:function(a){a=[{event:\"setData\",ui_language:a}];this.addToQueue(a)},getProductList:function(){for(var a=[],b=",["escape",["macro",8],8,16],".tr||[],c=0;c\u003Cb\u00263\u003Ec;c++)a.push(",["escape",["macro",8],8,16],".sr[c].id);return a},viewList:function(){var a=\"kijiji.unhaggle.com\"==",["escape",["macro",23],8,16],"?[{event:\"viewList\",item:\"unhaggle\"}]:[{event:\"viewList\",item:this.getProductList(),keywords:this.kw(),\nuser_segment:1,type:\"buyer\"}];this.addToQueue(a)},viewItem:function(a){a=\"kijiji.unhaggle.com\"==",["escape",["macro",23],8,16],"?[{event:\"viewItem\",item:\"unhaggle\"}]:[{event:\"viewItem\",item:a,user_segment:1,type:\"buyer\"}];this.addToQueue(a)},viewHome:function(){var a=[{event:\"viewHome\"}];this.addToQueue(a)},viewBasket:function(){var a=[{event:\"viewBasket\",item:[{id:1,price:1,quantity:1}],user_segment:2,type:\"seller\"}];this.addToQueue(a)},trackTransaction:function(a){this.setTId();var b;1==a?b=\"buyer\":2==a\u0026\u0026\n(b=\"seller\");a=\"kijiji.unhaggle.com\"==",["escape",["macro",23],8,16],"?[{event:\"trackTransaction\",id:this.tId,item:this.basket}]:[{event:\"trackTransaction\",id:this.tId,deduplication:",["escape",["macro",44],8,16],",item:this.basket,user_segment:a,type:b}];this.addToQueue(a)}};return d})();"]
    },{
      "function":"__v",
      "vtp_name":"l.l1.id",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",13],
      "vtp_map":["list",["map","key","PostAdBegin","value","PB"],["map","key","PostAdFreeSuccess","value","PFS"],["map","key","PostAdPaidSuccess","value","PPS"],["map","key","PostAdSuccess","value","PS"],["map","key","FeatureAdBegin","value","FB"],["map","key","FeatureAdSuccess","value","FS"],["map","key","R2SEmailBegin","value","REB"],["map","key","R2SEmailSuccess","value","RES"],["map","key","R2SPhoneBegin","value","RPB"],["map","key","R2SSMSBegin","value","RSB"],["map","key","R2SExternalBegin","value","RXB"],["map","key","R2SBidBegin","value","RBB"],["map","key","R2SBidSuccess","value","RBS"],["map","key","R2SChatSuccess","value","RCS"],["map","key","R2SUnhaggleSuccess","value","RUS"]]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__f"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"uaStatus"
    },{
      "function":"__smm",
      "vtp_input":["macro",13],
      "vtp_map":["list",["map","key","R2SEmailSuccess","value","bhTYyMni"],["map","key","R2SPhoneBegin","value","bhTYyMni"],["map","key","R2SSMSBegin","value","bhTYyMni"],["map","key","PostAdPaidSuccess","value","yaEgX7Nc"],["map","key","PostAdFreeSuccess","value","I4frkMfz"],["map","key","FeatureAdSuccess","value","g5cbb8mu"],["map","key","ActivateAdSuccess","value","OQECt5bA"],["map","key","UserRegistrationSuccess","value","JeW6btZ5"]]
    },{
      "function":"__smm",
      "vtp_input":["macro",13],
      "vtp_setDefaultValue":false,
      "vtp_map":["list",["map","key","R2SExternalBegin","value","Y0LLjjXvnkU5qLEE6a6M"],["map","key","PostAdFreeSuccess","value","SppgXAWxDRU83qEkJFSS"],["map","key","PostAdPaidSuccess","value","AyETXCcbI32DDYyBFivN"],["map","key","R2SEmailSuccess","value","AHnX5hSRr5dEInTne7GD"],["map","key","R2SPhoneBegin","value","0oDjJJdQHCHnBbcQHBDI"],["map","key","FeatureAdSuccess","value","ESU82m2dNtOJURiUOZIp"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",13],
      "vtp_map":["list",["map","key","R2SEmailSuccess","value","r2sem0"],["map","key","R2SPhoneBegin","value","r2sph0"],["map","key","PostAdPaidSuccess","value","posta00"],["map","key","PostAdFreeSuccess","value","posta0"],["map","key","FeatureAdSuccess","value","featu0"]]
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__f",
      "vtp_component":"URL"
    }],
  "tags":[{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof ga)var gtm_loadGA=",["escape",["macro",5],8,16],";var gtm_cookieHandler=window.gtm_cookieHandler||",["escape",["macro",22],8,16],",gtm_eCookie=gtm_cookieHandler.readEventCookie();\n\"undefined\"!==typeof gtm_eCookie\u0026\u0026ga(\"send\",{hitType:\"event\",eventCategory:gtm_eCookie.ec||\"\",eventAction:gtm_eCookie.ea||\"\",eventLabel:gtm_eCookie.el||\"\",location:gtm_eCookie.url||document.location,dimension1:gtm_eCookie.pt||\"(NULL)\",dimension10:gtm_eCookie.cc||\"-1\",dimension12:gtm_eCookie.lc||\"-1\",dimension30:gtm_eCookie.aid||\"\",dimension112:gtm_eCookie.scid||\"\",dimension145:gtm_eCookie.ppt||\"\",dimension147:gtm_eCookie.ci||\"\",hitCallback:function(){gtm_cookieHandler.deleteCookie(\"eCG_eh\")}});\nvar gtm_setCustomDimensions=",["escape",["macro",51],8,16],";ga(\"send\",\"pageview\",",["escape",["macro",1],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof ga)var gtm_loadGA=",["escape",["macro",5],8,16],";var gtm_defaultVal=\"(NULL)\",gtm_category,gtm_action,gtm_label,gtm_p=",["escape",["macro",12],8,16],",gtm_cm=",["escape",["macro",52],8,16],";gtm_p\u0026\u0026(gtm_category=gtm_p.t||gtm_defaultVal);gtm_action=\"",["escape",["macro",24],7],"\";gtm_label=\"",["escape",["macro",53],7],"\";var gtm_setCustomDimensions=",["escape",["macro",51],8,16],",gtm_cookieHandler=window.gtm_cookieHandler||",["escape",["macro",22],8,16],";gtm_cookieHandler.createEventCookie(gtm_category,gtm_action,gtm_label);\nvar ga_event_obj={nonInteraction:",["escape",["macro",54],8,16],",hitCallback:function(){gtm_cookieHandler.deleteCookie(\"eCG_eh\")}};gtm_cm\u0026\u0026(ga_event_obj[\"metric\"+gtm_cm]=1);ga(\"send\",\"event\",gtm_category,gtm_action,gtm_label,ga_event_obj);1==",["escape",["macro",54],8,16],"\u0026\u0026dataLayer.push({uaNonInt:0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar gtm_loadGA=",["escape",["macro",37],8,16],";ga(\"srp.require\",\"ec\");var gtm_defaultVal=\"(NULL)\",gtm_category,gtm_action,gtm_label,gtm_p=",["escape",["macro",12],8,16],",gtm_cm=",["escape",["macro",52],8,16],",dataLayerSearch=",["escape",["macro",8],8,16],";if(gtm_p)gtm_category=gtm_p.t||gtm_defaultVal;gtm_action=\"",["escape",["macro",24],7],"\"||gtm_defaultVal;groupsize=14;TotalRemovedItems=0;function resultIsUnfilledOrError(result){return result.id===\"unfilled\"||result.id===\"error\"}\nfunction makePromoFieldObject(result,removedItems){var position=result.pos-removedItems;return{id:result.id,name:result.rt,position:resultIsUnfilledOrError(result)?null:String(position)}}\nfunction send_impression_event(seq,ResultList){gtm_label=\"seq\\x3d\"+seq+\";\"+\"",["escape",["macro",53],7],"\"||gtm_defaultVal;var gtm_setCustomDimensions=",["escape",["macro",41],8,16],";var gtm_cookieHandler=window.gtm_cookieHandler||",["escape",["macro",22],8,16],";gtm_cookieHandler.createEventCookie(gtm_category,gtm_action,gtm_label);var ga_event_obj={\"nonInteraction\":",["escape",["macro",54],8,16],",\"hitCallback\":function(){gtm_cookieHandler.deleteCookie(\"eCG_eh\")}};if(gtm_cm)ga_event_obj[\"metric\"+gtm_cm]=1;ResultList.forEach(function(result){ga(\"srp.ec:addPromo\",\nmakePromoFieldObject(result,TotalRemovedItems));if(resultIsUnfilledOrError(result))TotalRemovedItems++});docment_title=document.title;ga(\"srp.set\",\"\\x26dt\",\"\");ga(\"srp.send\",\"event\",gtm_category,gtm_action,gtm_label,ga_event_obj);if(",["escape",["macro",54],8,16],"==1)dataLayer.push({\"uaNonInt\":0});ga(\"srp.set\",\"\\x26dt\",docment_title)}if(typeof ",["escape",["macro",8],8,16],"===\"undefined\"||typeof ",["escape",["macro",8],8,16],".sr===\"undefined\"||",["escape",["macro",8],8,16],".sr.length==0)send_impression_event(0,[]);\nfor(i=0;i\u003CMath.ceil(dataLayerSearch.sr.length\/groupsize);i++){start=i+groupsize*i;end=groupsize*(1+i);if(groupsize*(1+i)\u003E",["escape",["macro",8],8,16],".sr.length)end=",["escape",["macro",8],8,16],".sr.length;singleArray=",["escape",["macro",8],8,16],".sr.slice(start,end+1);send_impression_event(i,singleArray)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof ga)var gtm_loadGA=",["escape",["macro",36],8,16],";var gtm_defaultVal=\"(NULL)\",gtm_category,gtm_action,gtm_label,gtm_p=",["escape",["macro",12],8,16],",gtm_cm=",["escape",["macro",52],8,16],",dataLayerSearch=",["escape",["macro",8],8,16],";gtm_p\u0026\u0026(gtm_category=gtm_p.t||gtm_defaultVal);gtm_action=\"",["escape",["macro",24],7],"\";gtm_label=\"",["escape",["macro",53],7],"\";var gtm_setCustomDimensions=",["escape",["macro",51],8,16],",gtm_cookieHandler=window.gtm_cookieHandler||",["escape",["macro",22],8,16],";\ngtm_cookieHandler.createEventCookie(gtm_category,gtm_action,gtm_label);var ga_event_obj={nonInteraction:",["escape",["macro",54],8,16],",hitCallback:function(){gtm_cookieHandler.deleteCookie(\"eCG_eh\")}};gtm_cm\u0026\u0026(ga_event_obj[\"metric\"+gtm_cm]=1);function labelToObject(a){var b={};a.split(\";\").forEach(function(a){a=a.split(\"\\x3d\");b[a[0]]=a[1]});return b}function resultIsUnfilledOrError(a){return\"unfilled\"===a.id||\"error\"===a.id}\nfunction makePromoFieldObject(a,b){var c=a.pos-b;return{id:a.id,name:a.rt,creative:a.cr,position:resultIsUnfilledOrError(a)?null:String(c)}}var labelObj=labelToObject(gtm_label),removedItems=0,updatedSearchResults=[];dataLayerSearch.sr.forEach(function(a){updatedSearchResults.push(makePromoFieldObject(a,removedItems));resultIsUnfilledOrError(a)\u0026\u0026removedItems++});updatedSearchResults.forEach(function(a){a.id===labelObj.partneradid\u0026\u0026a.position===labelObj.position\u0026\u0026ga(\"ec:addPromo\",a)});\nga(\"ec:setAction\",\"promo_click\");ga(\"send\",\"event\",gtm_category,\"ResultsAdClick\",\"partner\\x3d\"+labelObj.partner);1==",["escape",["macro",54],8,16],"\u0026\u0026dataLayer.push({uaNonInt:0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__sp",
      "vtp_conversionId":"1021947097",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_dataLayerVariable":["macro",14],
      "vtp_url":["macro",46],
      "tag_id":5
    },{
      "function":"__flc",
      "vtp_groupTag":"kijij0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"posta0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"8157557",
      "vtp_ordinalStandard":["macro",47],
      "vtp_url":["macro",46],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":32
    },{
      "function":"__flc",
      "vtp_groupTag":"kijij0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"r2sem0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"8157557",
      "vtp_ordinalStandard":["macro",47],
      "vtp_url":["macro",46],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":33
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionLabel":["macro",27],
      "vtp_conversionId":"1010384880",
      "vtp_conversionValue":"1",
      "vtp_url":["macro",46],
      "vtp_enableReadGaCookie":false,
      "tag_id":45
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_groupTag":"kijij0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"featu0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"8157557",
      "vtp_ordinalStandard":["macro",47],
      "vtp_url":["macro",46],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":46
    },{
      "function":"__flc",
      "vtp_groupTag":"kijij0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"posta00",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"8157557",
      "vtp_ordinalStandard":["macro",47],
      "vtp_url":["macro",46],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":47
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventValue":"1",
      "vtp_eventCategory":["template","catID=",["macro",17],";locID=",["macro",18]],
      "vtp_tagId":"5079160",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":"Listings",
      "tag_id":58
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventValue":"1",
      "vtp_eventCategory":["template","catID=",["macro",17],";locID=",["macro",18]],
      "vtp_tagId":"5079160",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":"Replies",
      "tag_id":59
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/pixel.tapad.com\/tap\/pxl.png?ta_property_id=3280\u0026ta_action_id=RTG_HP_Kijiji_WhatsYourThing",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",47],
      "tag_id":63
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"966255813",
      "vtp_conversionLabel":["macro",42],
      "vtp_url":["macro",46],
      "vtp_enableReadGaCookie":false,
      "tag_id":64
    },{
      "function":"__html",
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function g(){function e(d,a){\"undefined\"===typeof a\u0026\u0026(a=\"\");for(var c in d){var b=a;b=\"\"===b?c:b+\".\"+c;\"object\"===typeof d[c]?e(d[c],b):f[b]={\"dataLayer Field\":b,Value:d[c]}}}for(var f={},a=0;a\u003CdataLayer.length;)e(dataLayer[a]),a++;return f}console.log(\"Logging GTM dataLayer\");console.table(g())})();\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof ga)var gtm_loadGA=",["escape",["macro",5],8,16],";var gtm_defaultVal=\"(NULL)\",gtm_network=gtm_defaultVal,gtm_action=gtm_defaultVal,gtm_target=gtm_defaultVal,gtm_socialEvent=",["escape",["macro",55],8,16],";if(gtm_socialEvent){gtm_network=gtm_socialEvent.network||gtm_defaultVal;gtm_action=gtm_socialEvent.action||gtm_defaultVal;gtm_target=gtm_socialEvent.target||gtm_defaultVal;var gtm_setCustomDimensions=",["escape",["macro",51],8,16],";ga(\"send\",\"social\",gtm_network,gtm_action,gtm_target)};\u003C\/script\u003E"],
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"6035160\",c3:\"\",options:{url_append:\"comscorekw\\x3dc",["escape",["macro",56],7],"l",["escape",["macro",57],7],"\"}});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n"],
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar gtm_sr=",["escape",["macro",9],8,16],",gtm_sa=void 0;",["escape",["macro",8],8,16],"\u0026\u0026",["escape",["macro",8],8,16],".attr\u0026\u0026(gtm_sa=JSON.stringify(",["escape",["macro",8],8,16],".attr));(gtm_sr||gtm_sa)\u0026\u0026ga(\"send\",\"event\",\"",["escape",["macro",3],7],"\",\"SearchResults\",{nonInteraction:1,dimension109:gtm_sa,dimension120:gtm_sr});\u003C\/script\u003E"],
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=",["escape",["macro",58],8,16],";if(\"undefined\"!==typeof b){var a=document.createElement(\"IMG\");a.src=\"https:\/\/1176.xg4ken.com\/media\/redir.php?track\\x3d1\\x26token\\x3d\"+",["escape",["macro",59],8,16],"+\"\\x26type\\x3d\"+b+\"\\x26val\\x3d0.0\\x26orderId\\x3d\"+",["escape",["macro",60],8,16],"+\"_\"+",["escape",["macro",19],8,16],"+\"\\x26promoCode\\x3d\\x26valueCurrency\\x3dGBP\\x26GCID\\x3d\\x26kw\\x3d\\x26product\\x3d\";a.width=\"0\";a.height=\"0\";a.border=\"0\";a.style=\"dsiplay:none\";document.getElementsByTagName(\"body\")[0].appendChild(a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var gtm_criteo_handler=window.google_tag_manager.gtm_criteo_handler||",["escape",["macro",62],8,16],";gtm_criteo_handler.setAccountId(",["escape",["macro",26],8,16],");var hue=",["escape",["macro",15],8,16],".hue||\"\";gtm_criteo_handler.setCustomerId(hue);gtm_criteo_handler.setSiteType(\"d\");gtm_criteo_handler.setRegion(",["escape",["macro",63],8,16],");gtm_criteo_handler.setCity(",["escape",["macro",57],8,16],");gtm_criteo_handler.setCategory(",["escape",["macro",56],8,16],");gtm_criteo_handler.setLanguage(",["escape",["macro",25],8,16],");\ngtm_criteo_handler.setConvType(\"reply\");gtm_criteo_handler.addToBasket(gtm_criteo_handler.aId,1,1);gtm_criteo_handler.trackTransaction(1);window.criteo_q.push(gtm_criteo_handler.getQueue());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var gtm_criteo_handler=window.google_tag_manager.gtm_criteo_handler||",["escape",["macro",62],8,16],";gtm_criteo_handler.setAccountId(",["escape",["macro",26],8,16],");var hue=",["escape",["macro",15],8,16],".hue||\"\";gtm_criteo_handler.setCustomerId(hue);gtm_criteo_handler.setSiteType(\"d\");gtm_criteo_handler.setRegion(",["escape",["macro",63],8,16],");gtm_criteo_handler.setCity(",["escape",["macro",57],8,16],");gtm_criteo_handler.setCategory(",["escape",["macro",56],8,16],");gtm_criteo_handler.setLanguage(",["escape",["macro",25],8,16],");\ngtm_criteo_handler.viewItem(gtm_criteo_handler.aId);window.criteo_q.push(gtm_criteo_handler.getQueue());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var gtm_criteo_handler=window.google_tag_manager.gtm_criteo_handler||",["escape",["macro",62],8,16],";gtm_criteo_handler.setAccountId(",["escape",["macro",26],8,16],");var hue=",["escape",["macro",15],8,16],".hue||\"\";gtm_criteo_handler.setCustomerId(hue);gtm_criteo_handler.setSiteType(\"d\");gtm_criteo_handler.setRegion(",["escape",["macro",63],8,16],");gtm_criteo_handler.setCity(",["escape",["macro",57],8,16],");gtm_criteo_handler.setCategory(",["escape",["macro",56],8,16],");gtm_criteo_handler.setLanguage(",["escape",["macro",25],8,16],");\ngtm_criteo_handler.viewList();window.criteo_q.push(gtm_criteo_handler.getQueue());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var gtm_criteo_handler=window.google_tag_manager.gtm_criteo_handler||",["escape",["macro",62],8,16],";gtm_criteo_handler.setAccountId(",["escape",["macro",26],8,16],");var hue=",["escape",["macro",15],8,16],".hue||\"\";gtm_criteo_handler.setCustomerId(hue);gtm_criteo_handler.setSiteType(\"d\");gtm_criteo_handler.setRegion(",["escape",["macro",63],8,16],");gtm_criteo_handler.setCity(",["escape",["macro",57],8,16],");gtm_criteo_handler.setCategory(",["escape",["macro",56],8,16],");gtm_criteo_handler.setLanguage(",["escape",["macro",25],8,16],");\ngtm_criteo_handler.setConvType(\"listing\");gtm_criteo_handler.addToBasket(1,1,1);gtm_criteo_handler.trackTransaction(2);window.criteo_q.push(gtm_criteo_handler.getQueue());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var gtm_criteo_handler=window.google_tag_manager.gtm_criteo_handler||",["escape",["macro",62],8,16],";gtm_criteo_handler.setAccountId(",["escape",["macro",26],8,16],");var hue=",["escape",["macro",15],8,16],".hue||\"\";gtm_criteo_handler.setCustomerId(hue);gtm_criteo_handler.setSiteType(\"d\");gtm_criteo_handler.setRegion(",["escape",["macro",63],8,16],");gtm_criteo_handler.setCity(",["escape",["macro",57],8,16],");gtm_criteo_handler.setLanguage(",["escape",["macro",25],8,16],");gtm_criteo_handler.viewBasket();window.criteo_q.push(gtm_criteo_handler.getQueue());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var gtm_criteo_handler=window.google_tag_manager.gtm_criteo_handler||",["escape",["macro",62],8,16],";gtm_criteo_handler.setAccountId(",["escape",["macro",26],8,16],");var hue=",["escape",["macro",15],8,16],".hue||\"\";gtm_criteo_handler.setCustomerId(hue);gtm_criteo_handler.setSiteType(\"d\");gtm_criteo_handler.setRegion(",["escape",["macro",63],8,16],");gtm_criteo_handler.setCity(",["escape",["macro",57],8,16],");gtm_criteo_handler.setLanguage(",["escape",["macro",25],8,16],");gtm_criteo_handler.viewHome();window.criteo_q.push(gtm_criteo_handler.getQueue());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",28],8,16],"\u0026\u0026!jQuery.isEmptyObject(",["escape",["macro",28],8,16],".attr)){var gtm_aa=JSON.stringify(",["escape",["macro",28],8,16],".attr);ga(\"send\",\"event\",\"",["escape",["macro",3],7],"\",\"AdAttributes\",{nonInteraction:1,dimension108:gtm_aa})};\u003C\/script\u003E"],
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5079160\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5079160\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof window.fbq){console.log(\"FB Undefined\");var fb_loaded=",["escape",["macro",34],8,16],"}var fb_standard_events=",["escape",["macro",35],8,16],";\"UserRegistrationSuccess\"===",["escape",["macro",13],8,16],"?fb_standard_events.FbPushCompleteRegistration():\"WatchlistAdd\"===",["escape",["macro",13],8,16],"?fb_standard_events.FbPushWatchList():\"PaymentBegin\"===",["escape",["macro",13],8,16],"\u0026\u0026fb_standard_events.FbPushPayment();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof window.fbq){console.log(\"FB Undefined\");var fb_loaded=",["escape",["macro",34],8,16],"}var fb_standard_events=",["escape",["macro",35],8,16],";fb_standard_events.FbPushSearch();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof window.fbq){console.log(\"FB Undefined\");var fb_loaded=",["escape",["macro",34],8,16],"}var fb_lib=",["escape",["macro",35],8,16],";console.log(fb_lib.adId);fb_lib.FbPushViewContent();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_event=",["escape",["macro",64],8,16],",fb_standard_events=",["escape",["macro",35],8,16],";if(fb_event){console.log(\"FB Event: \"+fb_event);if(\"undefined\"===typeof window.fbq){console.log(\"FB Undefined\");var fb_loaded=",["escape",["macro",34],8,16],"}window.fbq(\"trackCustom\",fb_event,{content_ids:fb_standard_events.adId,c:fb_standard_events.topcategoryId,l:fb_standard_events.topLocationId});fb_event=void 0};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar date=new Date,expires,value,url=",["escape",["macro",66],8,16],";date.setTime(date.getTime()+6048E5);expires=date.toUTCString();value=-1!=url.search(\"utm_source\\x3dcriteo\")?\"criteo\":\"other\";document.cookie=\"__utmz\\x3d\"+value+\"; expires\\x3d\"+expires+\"; path\\x3d\/\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"((Post|Feature|Edit|Activate)Ad|R2S|User|Share|Click$)"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"PostAdFreeSuccess"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"R2SEmailSuccess"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"PostAd(Free|Paid)?Success"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"FeatureAdSuccess"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"R2SPhoneBegin"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"PostAdPaidSuccess"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"^R2S((Email|Bid|Unhaggle)Success|(Phone|SMS|External)Begin)$"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"10"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^ResultsSearch$|^ResultsBrowse$|^VIP$"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"^virtualPageview$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":".+",
      "ignore_case":false
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"eyeblaster",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/m-msg-my-messages"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"^(gtm[.](.*)|uaEvent|logDataLayer|virtualPageview)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"ResultsImpressions"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"ResultsAdClick"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"logDataLayer",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"social"
    },{
      "function":"_sw",
      "arg0":["macro",3],
      "arg1":"Result"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"^(R2S((Email|Bid|Unhaggle|Chat)Success|(Phone|SMS|External)Begin)|PostAd(Free|Paid)?Success)$"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"VIP"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^PostAd$|^PostAdCategory$"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"Home"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^VIP$|^SVIP$"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"www.kijiji.ca"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"^(WatchlistAdd|PaymentBegin|UserRegistrationSuccess)"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":"^(PostAdBegin|PostAdFreeSuccess|PostAdPaidSuccess|PostAdSuccess|R2SEmailSuccess|R2SBidBegin|R2SPhoneBegin|R2SSMSBegin|R2SExternalBegin|R2SChatSuccess|R2SUnhaggleSuccess|FeatureAdSuccess)"
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"(utm_source|gclid=)"
    }],
  "rules":[
    [["if",0],["add",4,16]],
    [["if",1],["add",4]],
    [["if",2],["add",5]],
    [["if",3],["add",6,7]],
    [["if",4],["add",7,10,13,22]],
    [["if",5],["add",7,8,13,22]],
    [["if",6],["add",7]],
    [["if",7],["add",9]],
    [["if",8],["add",11,13,19]],
    [["if",9,10,11],["add",12]],
    [["if",12,13],["add",0]],
    [["if",11],["add",0]],
    [["if",13],["unless",16],["add",1]],
    [["if",19],["add",14]],
    [["if",20],["add",15]],
    [["if",11,21],["add",17,21,28]],
    [["if",22],["add",18]],
    [["if",11,23],["add",20]],
    [["if",11,24],["add",23]],
    [["if",11,25],["add",24]],
    [["if",11,26],["add",25,29]],
    [["if",11,27],["add",26]],
    [["if",28],["add",27]],
    [["if",29],["add",30]],
    [["if",17],["add",2],["block",1]],
    [["if",18],["add",3],["block",1]],
    [["if",11,30],["add",31]],
    [["if",11,14],["block",0]],
    [["if",11,15],["block",0]]]
},
"runtime":[
[],[]
]};

var ba=this,fa=function(){if(null===da){var a;a:{var b=ba.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&ea.test(d)){a=d;break a}}a=null}da=a||""}return da},ea=/^[\w+/_-]+[=]{0,2}$/,da=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.$e=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ie=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.w=a;this.md=b};g.prototype.zd=function(){return this.w};g.prototype.getType=g.prototype.zd;g.prototype.getData=function(){return this.md};g.prototype.getData=g.prototype.getData;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},la=function(){this.ja={};this.Aa=!1};la.prototype.get=function(a){return this.ja["dust."+a]};la.prototype.set=function(a,b){!this.Aa&&(this.ja["dust."+a]=b)};la.prototype.has=function(a){return this.ja.hasOwnProperty("dust."+a)};var ma=function(a){var b=[],c;for(c in a.ja)a.ja.hasOwnProperty(c)&&b.push(c.substr(5));return b};
la.prototype.remove=function(a){!this.Aa&&delete this.ja["dust."+a]};la.prototype.J=function(){this.Aa=!0};var v=function(a){this.ma=new la;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.h[Number(b)]=a[Number(b)]:this.ma.set(b,a[b]))};v.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};v.prototype.set=function(a,b){if("length"==a){if(!ka(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ka(a)?this.h[Number(a)]=b:this.ma.set(a,b)};
v.prototype.set=v.prototype.set;v.prototype.get=function(a){return"length"==a?this.length():ka(a)?this.h[Number(a)]:this.ma.get(a)};v.prototype.get=v.prototype.get;v.prototype.length=function(){return this.h.length};v.prototype.P=function(){for(var a=ma(this.ma),b=0;b<this.h.length;b++)a.push(b+"");return new v(a)};v.prototype.getKeys=v.prototype.P;v.prototype.remove=function(a){ka(a)?delete this.h[Number(a)]:this.ma.remove(a)};v.prototype.remove=v.prototype.remove;v.prototype.pop=function(){return this.h.pop()};
v.prototype.pop=v.prototype.pop;v.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};v.prototype.push=v.prototype.push;v.prototype.shift=function(){return this.h.shift()};v.prototype.shift=v.prototype.shift;v.prototype.splice=function(a,b,c){return new v(this.h.splice.apply(this.h,arguments))};v.prototype.splice=v.prototype.splice;v.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
v.prototype.unshift=v.prototype.unshift;v.prototype.has=function(a){return ka(a)&&this.h.hasOwnProperty(a)||this.ma.has(a)};var na=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var oa=function(){function a(a,c){if(b[a]){if(b[a].Oa+c>b[a].max)throw Error("Quota exceeded");b[a].Oa+=c}}var b={},c=void 0,d=void 0,e={Wd:function(a){c=a},Tb:function(){c&&a(c,1)},Xd:function(a){d=a},T:function(b){d&&a(d,b)},se:function(a,c){b[a]=b[a]||{Oa:0};b[a].max=c},yd:function(a){return b[a]&&b[a].Oa||0},reset:function(){b={}},fd:a};e.onFnConsume=e.Wd;e.consumeFn=e.Tb;e.onStorageConsume=e.Xd;e.consumeStorage=e.T;e.setMax=e.se;e.getConsumed=e.yd;e.reset=e.reset;e.consume=e.fd;return e};var pa=function(a,b,c){this.K=a;this.Z=b;this.Y=c;this.h=new la};pa.prototype.add=function(a,b){this.h.Aa||(this.K.T(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};pa.prototype.add=pa.prototype.add;pa.prototype.set=function(a,b){this.h.Aa||(this.Y&&this.Y.has(a)?this.Y.set(a,b):(this.K.T(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};pa.prototype.set=pa.prototype.set;
pa.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.Y?this.Y.get(a):void 0};pa.prototype.get=pa.prototype.get;pa.prototype.has=function(a){return!!this.h.has(a)||!(!this.Y||!this.Y.has(a))};pa.prototype.has=pa.prototype.has;pa.prototype.H=function(){return this.K};pa.prototype.J=function(){this.h.J()};var qa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ra=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var w=function(a,b){la.call(this);this.jc=a;this.wd=b};ha(w,la);var ua=function(a,b){for(var c,d=0;d<b.length&&!(c=ta(a,b[d]),c instanceof g);d++);return c},ta=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof w))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};w.prototype.toString=function(){return this.jc};w.prototype.getName=function(){return this.jc};w.prototype.getName=w.prototype.getName;w.prototype.P=function(){return new v(ma(this))};
w.prototype.getKeys=w.prototype.P;w.prototype.m=function(a,b){var c,d={B:function(){return a},evaluate:function(b){var c=a;return qa(b)?ta(c,b):b},wa:function(b){return ua(a,b)},H:function(){return a.H()},Oe:function(){c||(c=a.Z.create(d));return c}};a.H().Tb();return this.wd.apply(d,Array.prototype.slice.call(arguments,1))};w.prototype.invoke=w.prototype.m;var va=function(){la.call(this)};ha(va,la);va.prototype.P=function(){return new v(ma(this))};va.prototype.getKeys=va.prototype.P;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var wa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,xa=function(a){if(null==a)return String(a);var b=wa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ya=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},za=function(a){if(!a||"object"!=xa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ya(a,"constructor")&&!ya(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ya(a,b)},x=function(a,b){var c=b||("array"==xa(a)?[]:{}),d;for(d in a)if(ya(a,d)){var e=a[d];"array"==xa(e)?("array"!=xa(c[d])&&(c[d]=[]),c[d]=x(e,c[d])):za(e)?(za(c[d])||(c[d]={}),c[d]=x(e,c[d])):c[d]=e}return c};var Aa=function(a){if(a instanceof v){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Aa(a.get(d)));return b}if(a instanceof va){for(var e={},f=a.P(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=Aa(a.get(f.get(k)));return e}return a instanceof w?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Ca(b[c]);var d=new pa(oa(),na());return Aa(a.m.apply(a,[d].concat(b)))}:a},Ca=function(a){if(qa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Ca(a[c]));return new v(b)}if(za(a)){var d=
new va,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Ca(a[e]));return d}if("function"===typeof a)return new w("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Aa(this.evaluate(c[d]));return Ca(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var Da={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.B(),e=this.evaluate(b);if(!(e instanceof v))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.H().T(a.length+f.length);return new w(a,function(){return function(a){for(var b=new pa(d.K,d.Z,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new v(c));var q=ua(b,f);if(q instanceof g)return"return"===q.w?q.getData():q}}())},list:function(a){var b=this.H();b.T(arguments.length);for(var c=new v,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.T(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.H(),c=new va,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.T(h);c.set(e,f)}return c},undefined:function(){}};var y=function(){this.K=oa();this.Z=na();this.ya=new pa(this.K,this.Z)};y.prototype.S=function(a,b){var c=new w(a,b);c.J();this.ya.set(a,c)};y.prototype.addInstruction=y.prototype.S;y.prototype.Sb=function(a,b){Da.hasOwnProperty(a)&&this.S(b||a,Da[a])};y.prototype.addNativeInstruction=y.prototype.Sb;y.prototype.H=function(){return this.K};y.prototype.getQuota=y.prototype.H;y.prototype.Va=function(){this.K=oa();this.ya.K=this.K};y.prototype.resetQuota=y.prototype.Va;
y.prototype.ne=function(){this.Z=na();this.ya.Z=this.Z};y.prototype.resetPermissions=y.prototype.ne;y.prototype.N=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.wb(c)};y.prototype.execute=y.prototype.N;y.prototype.wb=function(a){for(var b,c=0;c<arguments.length;c++){var d=ta(this.ya,arguments[c]);b=d instanceof g||d instanceof w||d instanceof v||d instanceof va||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
y.prototype.run=y.prototype.wb;y.prototype.J=function(){this.ya.J()};y.prototype.makeImmutable=y.prototype.J;var Ea=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Fa={we:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof v)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new v(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new v(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new v(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ea(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new v(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ea(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={fc:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Ga="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ha=new g("break"),Ia=new g("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof v))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=ra(Ga,b))return Ca(a[b].apply(a,Ea(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof v){if(a.has(b)){var d=
a.get(b);if(d instanceof w){var e=Ea(c);e.unshift(this.B());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=ra(Fa.we,b))return e=Ea(c),e.unshift(this.B()),Fa[b].apply(a,e)}if(a instanceof w||a instanceof va){if(a.has(b)){d=a.get(b);if(d instanceof w)return e=Ea(c),e.unshift(this.B()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof w?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Ea(c))}throw"TypeError: Object has no '"+
b+"' property.";};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.B();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return Ha};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};z["continue"]=function(){return Ia};
z.nd=function(a,b,c){var d=new v;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[z.fc.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.B().set(a,this.evaluate(f))};z.qd=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.td=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.ud=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.xd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.B();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.wa(c);if(f instanceof g){if("break"==f.w)break;if("return"==f.w)return f}}else if(b instanceof va||b instanceof v||b instanceof w){var h=b.P(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.wa(c),f instanceof g){if("break"==f.w)break;if("return"==f.w)return f}}};z.get=function(a){return this.B().get(this.evaluate(a))};
z.cc=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof va||a instanceof v||a instanceof w?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};z.Ad=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.Bd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.Fd=function(a,b){return this.evaluate(a)===this.evaluate(b)};z.Gd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.wa(d);if(e instanceof g)return e};z.Od=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.Pd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.Rd=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.Sd=function(a){return-this.evaluate(a)};z.Td=function(a){return!this.evaluate(a)};
z.Ud=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.sc=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.uc=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new g("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof w||a instanceof v||a instanceof va)&&a.set(b,c);return c};z.ve=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!qa(b)||!qa(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.w;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.w||"continue"==d.w)))return d};
z.xe=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof w?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.B(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.wa(f),e instanceof g)){if("break"==e.w)return;if("return"==e.w)return e}for(;this.evaluate(a);){e=this.wa(f);if(e instanceof g){if("break"==e.w)break;if("return"==e.w)return e}this.evaluate(b)}};var Ka=function(){this.ec=!1;this.U=new y;Ja(this);this.ec=!0};Ka.prototype.Ld=function(){return this.ec};Ka.prototype.isInitialized=Ka.prototype.Ld;Ka.prototype.N=function(a){return this.U.wb(a)};Ka.prototype.execute=Ka.prototype.N;Ka.prototype.J=function(){this.U.J()};Ka.prototype.makeImmutable=Ka.prototype.J;
var Ja=function(a){function b(a,b){e.U.Sb(a,String(b))}function c(a,b){e.U.S(String(d[a]),b)}var d=z.fc,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.nd);c("DIVIDE",z.qd);c("EQUALS",z.td);c("EXPRESSION_LIST",z.ud);c("FOR_IN",z.xd);c("GET",z.get);c("GET_INDEX",
z.cc);c("GET_PROPERTY",z.cc);c("GREATER_THAN",z.Ad);c("GREATER_THAN_EQUALS",z.Bd);c("IDENTITY_EQUALS",z.Fd);c("IDENTITY_NOT_EQUALS",z.Gd);c("IF",z["if"]);c("LESS_THAN",z.Od);c("LESS_THAN_EQUALS",z.Pd);c("MODULUS",z.Rd);c("MULTIPLY",z.multiply);c("NEGATE",z.Sd);c("NOT",z.Td);c("NOT_EQUALS",z.Ud);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.sc);c("POST_INCREMENT",z.sc);c("PRE_DECREMENT",z.uc);c("PRE_INCREMENT",z.uc);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.ve);c("SWITCH",z["switch"]);c("TERNARY",z.xe);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};Ka.prototype.S=function(a,b){this.U.S(a,b)};Ka.prototype.addInstruction=Ka.prototype.S;Ka.prototype.H=function(){return this.U.H()};Ka.prototype.getQuota=Ka.prototype.H;Ka.prototype.Va=function(){this.U.Va()};Ka.prototype.resetQuota=Ka.prototype.Va;var La=function(){this.Ra={}};La.prototype.get=function(a){return this.Ra.hasOwnProperty(a)?this.Ra[a]:void 0};La.prototype.add=function(a,b){if(this.Ra.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new w(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.J();this.Ra[a]=c};La.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var C=window,D=document,Ma=navigator,Na=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},G=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);fa()&&d.setAttribute("nonce",fa());var e=D.getElementsByTagName("script")[0]||D.body||D.head;e.parentNode.insertBefore(d,e);return d},
Pa=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||D.body||D.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},K=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,
c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){C.setTimeout(a,0)},Ta=function(a){var b=D.getElementById(a);if(b&&Sa(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Sa(document.all[a][c],"id")==a)return document.all[a][c];return b},Sa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ua=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g,
" "));return b},Va=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a){Ma.sendBeacon&&Ma.sendBeacon(a)||K(a)};var Xa=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},P=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(C.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||C.location.hostname).split(":")[0].toLowerCase();if(c){var l=/^www\d*\./.exec(f);
l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(1*(a.hostname?a.port:C.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=ra(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Xa(f,e));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;
default:f=a&&a.href}return f},Ya=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},Q=function(a){var b=D.createElement("a");a&&(b.href=a);return b};var ab=function(){this.qc=new Ka;var a=new La;a.addAll(Za());$a(this,function(b){return a.get(b)})},Za=function(){return{callInWindow:bb,getCurrentUrl:cb,getInWindow:eb,getReferrer:fb,getUrlComponent:gb,getUrlFragment:hb,isPlainObject:ib,loadIframe:jb,loadJavaScript:kb,removeUrlFragment:mb,replaceAll:nb,sendTrackingBeacon:ob,setInWindow:pb}};ab.prototype.N=function(a){return this.qc.N(a)};ab.prototype.execute=ab.prototype.N;var $a=function(a,b){a.qc.S("require",b)};
function bb(a,b){for(var c=a.split("."),d=C,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==xa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(Aa(arguments[f]));e.apply(d,h)}}function cb(){return C.location.href}function eb(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=Aa(b));return Ca(e[d[f]])}function fb(){return D.referrer}
function gb(a,b,c,d,e){var f;if(d&&d instanceof v){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return P(Q(a),b,c,f,e)}function hb(a){return P(Q(a),"fragment")}function ib(a){return a instanceof va}function jb(a,b){var c=this.B();Pa(a,function(){b instanceof w&&b.m(c)})}var qb={};
function kb(a,b,c,d){var e=this.B(),f=function(){b instanceof w&&b.m(e)},h=function(){c instanceof w&&c.m(e)};d?qb[d]?(qb[d].onSuccess.push(f),qb[d].onFailure.push(h)):(qb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=qb[d].onSuccess,b=0;b<a.length;b++)N(a[b]);a.push=function(a){N(a);return 0}},h=function(){for(var a=qb[d].onFailure,b=0;b<a.length;b++)N(a[b]);qb[d]=null},G(a,f,h)):G(a,f,h)}function mb(a){return Ya(Q(a))}function nb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function ob(a,b,c){var d=this.B();K(a,function(){b instanceof w&&b.m(d)},function(){c instanceof w&&c.m(d)})}function pb(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=Aa(b),!0):!1};
var rb=[],sb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},tb=function(a){return sb[a]},ub=/[\x00\x22\x26\x27\x3c\x3e]/g;var yb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,zb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return zb[a]};rb[7]=function(a){return String(a).replace(yb,Cb)};
rb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(yb,Cb)+"'"}};var Kb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Lb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Mb=function(a){return Lb[a]};rb[16]=function(a){return a};var Ob,Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!Ub[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Ub[b](d):Ob(b,d)},cc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=bc(a[e],b,c));return d},bc=function(a,b,c){if(qa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(bc(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Pb[f];if(!h||b(h))return;c[f]=!0;try{var k=cc(h,b,c);d=Yb(k);Xb&&(d=Xb.hd(d,k))}catch(t){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[bc(a[l],b,c)]=bc(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=bc(a[n],b,c);Wb&&(m=m||p===Wb.Ia);d.push(p)}return Wb&&m?Wb.jd(d):d.join("");case "escape":d=bc(a[1],b,c);if(Wb&&qa(a[1])&&"macro"===a[1][0]&&Wb.Md(a))return Wb.ae(d);d=String(d);for(var q=
2;q<a.length;q++)rb[a[q]]&&(d=rb[a[q]](d));return d;case "tag":var r=a[1];if(!Sb[r])throw Error("Unable to resolve tag reference "+r+".");return d={Zb:a[2],index:r};case "zb":var u=dc({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(u=!u);return u;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},dc=function(a,b,c){try{return Vb(cc(a,b,c))}catch(d){JSON.stringify(a)}return null};var ec=null,hc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var f=Qb[e],h=gc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Sb.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=ec(e[c]);if(null===d)return null;if(d)return!1}return!0};
var fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=dc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var kc={},lc=null;kc.o="GTM-W4V6";var mc=null,nc="//www.googletagmanager.com/a?id="+kc.o+"&cv=130",oc={},pc={},qc=D.currentScript?D.currentScript.src:void 0;var rc=function(){},sc=function(a){return"function"==typeof a},tc=function(a){return"string"==xa(a)},uc=function(a){return"number"==xa(a)&&!isNaN(a)},vc=function(a){return Math.round(Number(a))||0},wc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},xc=function(a){var b=[];if(qa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},yc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},zc=function(a,b){if(!uc(a)||!uc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},Ac=function(){this.prefix="gtm.";this.values={}};Ac.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ac.prototype.get=function(a){return this.values[this.prefix+a]};Ac.prototype.contains=function(a){return void 0!==this.get(a)};var Bc=function(){var a=lc.sequence||0;lc.sequence=a+1;return a},Cc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Dc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var R=function(){var a=function(a){return{toString:function(){return a}}};return{Hb:a("convert_case_to"),Ib:a("convert_false_to"),Jb:a("convert_null_to"),Kb:a("convert_true_to"),Lb:a("convert_undefined_to"),L:a("function"),Ac:a("instance_name"),Bc:a("live_only"),Cc:a("malware_disabled"),Dc:a("once_per_event"),Nb:a("once_per_load"),Ob:a("setup_tags"),Ec:a("tag_id"),Pb:a("teardown_tags")}}();var Ec=new Ac,Fc={},Ic={set:function(a,b){x(Gc(a,b),Fc)},get:function(a){return Hc(a,2)},reset:function(){Ec=new Ac;Fc={}}},Hc=function(a,b){return 2!=b?Ec.get(a):Jc(a)},Jc=function(a,b,c){var d=a.split(".");return Lc(d)},Lc=function(a){for(var b=Fc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Nc=function(a,b){Ec.set(a,b);x(Gc(a,b),Fc)},Gc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Oc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Pc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Qc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Rc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Sc=function(a){var b=Hc("gtm.whitelist");var c=b&&Rc(xc(b),Pc),d=Hc("gtm.blacklist")||Hc("tagTypeBlacklist")||[];
Oc.test(C.location&&C.location.hostname)&&(d=xc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Rc(xc(d),Qc),f={};return function(h){var k=h&&h[R.L];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=pc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ra(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>ra(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=0<=
ra(e,k)))a:{for(var u=l||[],t=new Ac,A=0;A<e.length;A++)t.set(e[A],!0);for(A=0;A<u.length;A++)if(t.get(u[A])){r=!0;break a}r=!1}q=r}return f[k]=!m||q}};var Tc={hd:function(a,b){b[R.Hb]&&"string"===typeof a&&(a=1==b[R.Hb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(R.Jb)&&null===a&&(a=b[R.Jb]);b.hasOwnProperty(R.Lb)&&void 0===a&&(a=b[R.Lb]);b.hasOwnProperty(R.Kb)&&!0===a&&(a=b[R.Kb]);b.hasOwnProperty(R.Ib)&&!1===a&&(a=b[R.Ib]);return a}};var Wc=function(a){var b=lc.zones;!b&&a&&(b=lc.zones=a());return b},Xc={active:!0,isWhitelisted:function(){return!0}};var Yc=!1,Zc=0,$c=[];function ad(a){if(!Yc){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Yc=!0;for(var e=0;e<$c.length;e++)N($c[e])}$c.push=function(){for(var a=0;a<arguments.length;a++)N(arguments[a]);return 0}}}function bd(){if(!Yc&&140>Zc){Zc++;try{D.documentElement.doScroll("left"),ad()}catch(a){C.setTimeout(bd,50)}}}var cd=function(a){Yc?a():$c.push(a)};var dd=!1,ed=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]};
var kd=function(){return"&tc="+Sb.filter(function(a){return a}).length},ld="0.005000">Math.random(),md=function(){var a=0,b=0;return{Nd:function(){if(2>a)return!1;1E3<=(new Date).getTime()-b&&(a=0);return 2<=a},ie:function(){1E3<=(new Date).getTime()-b&&(a=0);a++;b=(new Date).getTime()}}},nd="",od=function(){nd=[nc,"&v=3&t=t","&pid="+zc(),"&rv=7n"].join("")},pd={},qd="",rd=void 0,sd={},td={},ud=void 0,vd=null,wd=1E3,xd=function(){var a=rd;return void 0===a?"":[nd,
pd[a]?"":"&es=1",sd[a],kd(),qd,"&z=0"].join("")},yd=function(){ud&&(C.clearTimeout(ud),ud=void 0);void 0===rd||pd[rd]&&!qd||(td[rd]||vd.Nd()||0>=wd--?td[rd]=!0:(vd.ie(),K(xd()),pd[rd]=!0,qd=""))},zd=function(a,b,c){if(ld&&!td[a]&&b){a!==rd&&(yd(),rd=a);var d=c+String(b[R.L]||"").replace(/_/g,"");qd=qd?qd+"."+d:"&tr="+d;ud||(ud=C.setTimeout(yd,500));2022<=xd().length&&yd()}};function Ad(a,b,c,d,e,f){var h=Sb[a],k=Bd(a,b,c,d,e,f);if(!k)return null;var l=bc(h[R.Ob],f.X,[]);if(l&&l.length){var m=l[0];k=Ad(m.index,b,k,1===m.Zb?e:k,e,f)}return k}
function Bd(a,b,c,d,e,f){function h(){var b=cc(k,f.X);b.vtp_gtmOnSuccess=function(){zd(f.id,Sb[a],"5");c()};b.vtp_gtmOnFailure=function(){zd(f.id,Sb[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[R.Cc])d();else{zd(f.id,k,"1");try{Yb(b)}catch(A){zd(f.id,
k,"7");e()}}}var k=Sb[a];if(f.X(k))return null;var l=bc(k[R.Pb],f.X,[]);if(l&&l.length){var m=l[0],n=Ad(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Zb?e:n}if(k[R.Nb]||k[R.Dc]){var p=k[R.Nb]?Tb:b,q=c,r=d;if(!p[a]){h=Dc(h);var u=Cd(a,p,h);c=u.R;d=u.ka}return function(){p[a](q,r)}}return h}function Cd(a,b,c){var d=[],e=[];b[a]=Dd(d,e,c);return{R:function(){b[a]=Ed;for(var c=0;c<d.length;c++)d[c]()},ka:function(){b[a]=Fd;for(var c=0;c<e.length;c++)e[c]()}}}
function Dd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ed(a){a()}function Fd(a,b){b()};function Gd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Dc(function(){b++;d&&b>=c&&a()})},Pc:function(){d=!0;b>=c&&a()}}}function Hd(a,b){if(!ld)return;var c=function(a){var d=b.X(Sb[a])?"3":"4",f=bc(Sb[a][R.Ob],b.X,[]);f&&f.length&&c(f[0].index);zd(b.id,Sb[a],d);var h=bc(Sb[a][R.Pb],b.X,[]);h&&h.length&&c(h[0].index)};c(a);}var Id=!1;var Jd=function(a,b){var c={};c[R.L]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Sb.push(c);return Sb.length-1};var Kd="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var Ld=/[A-Z]+/,Md=/\s/,Nd=function(a){if(tc(a)&&(a=a.trim(),!Md.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ld.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ia:d}}}}};var Od=null,Pd={},Qd={},Rd;function Sd(){Od=Od||!lc.gtagRegistered;lc.gtagRegistered=!0;return Od}var Td=function(a,b){var c={event:a};b&&(c.eventModel=x(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Ud(a){if(void 0===Qd[a.id]){var b;if("UA"==a.prefix)b=Jd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Jd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Jd("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Jd("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Jd("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Rd){var c={name:"send_to",dataLayerVersion:2},d={};d[R.L]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Pb.push(d);Rd=["macro",Pb.length-1]}var f={arg0:Rd,
arg1:a.id,ignore_case:!1};f[R.L]="_lc";Rb.push(f);var h={"if":[Rb.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Qb.push(h);Qd[a.id]=b}}
var Wd={event:function(a){var b=a[1];if(tc(b)&&!(3<a.length)){var c;if(2<a.length){if(!za(a[2]))return;c=a[2]}var d=Td(b,c);return d}},set:function(a){var b;2==a.length&&za(a[1])?
b=x(a[1],void 0):3==a.length&&tc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=x(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Vd=Dc(function(){});var Xd=!1,Yd=[];function Zd(){if(!Xd){Xd=!0;for(var a=0;a<Yd.length;a++)N(Yd[a])}};var $d=[],ae=!1,be=function(a){var b=a.eventCallback,c=Dc(function(){sc(b)&&N(function(){b(kc.o)})}),d=a.eventTimeout;d&&C.setTimeout(c,Number(d));return c},ce=function(){for(var a=!1;!ae&&0<$d.length;){ae=!0;delete Fc.eventModel;var b=$d.shift();if(sc(b))try{b.call(Ic)}catch(de){}else if(qa(b)){var c=b;if(tc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Hc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(de){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&tc(l[0])){var m=Wd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){ae=!1;continue}}var n;var p=void 0,q=b,r=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(r&&Nc(p,void 0),Nc(p,q[p]));var u=q.event;if(u){var t=q["gtm.uniqueEventId"];t||(t=Bc(),q["gtm.uniqueEventId"]=t,Nc("gtm.uniqueEventId",t));mc=u;var A;var J,E,B=q,O=B.event,F=B["gtm.uniqueEventId"],L=lc.zones;E=L?L.checkState(kc.o,F):Xc;if(E.active){var I=be(B);c:{var M=
E.isWhitelisted;if("gtm.js"==O){if(Id){J=!1;break c}Id=!0}var W=F,S=O;if(ld&&!td[W]&&rd!==W){yd();rd=W;qd="";var H=sd,X=W,ca,sa=S;ca=0===sa.indexOf("gtm.")?encodeURIComponent(sa):"*";H[X]="&e="+ca+"&eid="+W;ud||(ud=C.setTimeout(yd,500))}var ia=Sc(M),aa={id:F,name:O,ad:I||rc,X:ia,Wa:hc(ia)};for(var Uc,Zb=aa,ee=Gd(Zb.ad),Sf=[],$b=[],lb=0;lb<Sb.length;lb++)if(Zb.Wa[lb]){var Tf=Sb[lb];var Bb=ee.add();try{var fe=Ad(lb,Sf,Bb,Bb,Bb,Zb);fe?$b.push(fe):(Hd(lb,Zb),Bb())}catch(de){Bb()}}ee.Pc();for(var Vc=0;Vc<$b.length;Vc++)$b[Vc]();Uc=0<$b.length;if("gtm.js"===O||"gtm.sync"===O)d:{}if(Uc){for(var Uf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},ac=0;ac<aa.Wa.length;ac++)if(aa.Wa[ac]){var he=Sb[ac];if(he&&!Uf[he[R.L]]){J=!0;break c}}J=!1}else J=Uc}A=J?!0:!1}else A=!1;mc=null;n=A}else n=!1;a=n||a}ae=!1}return!a},ie=function(){var a=ce();try{var b=C["dataLayer"].hide;if(b&&void 0!==b[kc.o]&&b.end){b[kc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},je=function(){var a=Na("dataLayer",[]),b=Na("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};$c.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Yd.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for($d.push.apply($d,b);300<this.length;)this.shift();return ce()};$d.push.apply($d,a.slice(0));
N(ie)};var ke={};ke.Ia=new String("undefined");ke.ab={};var le=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ke.Ia?b:a[d]);return c.join("")}};le.prototype.toString=function(){return this.resolve("undefined")};le.prototype.valueOf=le.prototype.toString;ke.jd=function(a){return new le(a)};var me={};ke.je=function(a,b){var c=Bc();me[c]=[a,b];return c};ke.Ub=function(a){var b=a?0:1;return function(a){var c=me[a];if(c&&"function"===typeof c[b])c[b]();me[a]=void 0}};
ke.Md=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ke.ae=function(a){if(a===ke.Ia)return a;var b=Bc();ke.ab[b]=a;return'google_tag_manager["'+kc.o+'"].macro('+b+")"};ke.Fc=le;var ne=new Ac,oe=function(a,b){function c(a){var b=Q(a),c=P(b,"protocol"),d=P(b,"host",!0),e=P(b,"port"),f=P(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function pe(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=ra(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=ne.get(q);r||(r=new RegExp(c,p),ne.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return oe(b,c)}return!1};function qe(a,b,c,d){return(d||"https:"==C.location.protocol?a:b)+c}function re(a,b){for(var c=b||(a instanceof v?new v:new va),d=a.P(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof v?(c.get(f)instanceof v||c.set(f,new v),re(h,c.get(f))):h instanceof va?(c.get(f)instanceof va||c.set(f,new va),re(h,c.get(f))):c.set(f,h)}}return c}function se(){return kc.o}function te(){return(new Date).getTime()}function ue(a,b){return Ca(Hc(a,b||2))}function ve(){return mc}
function we(a){return Va('<a href="'+a+'"></a>')[0].href}function xe(a){return vc(Aa(a))}function ye(a){return null===a?"null":void 0===a?"undefined":a.toString()}function ze(a,b){return zc(a,b)}function Ae(a,b,c){if(!(a instanceof v))return null;for(var d=new va,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof va&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var Be=function(){var a=new La;a.addAll(Za());a.addAll({buildSafeUrl:qe,decodeHtmlUrl:we,copy:re,generateUniqueNumber:Bc,getContainerId:se,getCurrentTime:te,getDataLayerValue:ue,getEventName:ve,makeInteger:xe,makeString:ye,randomInteger:ze,tableToMap:Ae});return function(b){return a.get(b)}};var Ce=new ab,De=function(){var a=data.runtime||[];Ob=function(a,b){var c=new va,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Ca(b[d]));var e=Ce.N([a,c]);e instanceof g&&"return"===e.w&&(e=e.getData());return Aa(e)};Vb=pe;$a(Ce,Be());for(var b=0;b<a.length;b++){var c=a[b];if(!qa(c)||3>c.length){if(0==c.length)continue;break}Ce.N(c)}};var Ee=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Fe=function(a){return encodeURIComponent(a)},Ge=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=P(Q(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var T=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},He=function(a,b){x(a,b)},Ie=function(a){return vc(a)},Je=function(a,b){return ra(a,b)};var Ke=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Sa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Le=function(a){lc.hasOwnProperty("autoEventsSettings")||(lc.autoEventsSettings={});var b=lc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Me=function(a,b,c,d){var e=Le(a),f=Cc(e,b,d);e[b]=
c(f)},Ne=function(a,b,c){var d=Le(a);return Cc(d,b,c)};var Oe=/(^|\.)doubleclick\.net$/i,Pe=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Qe=function(a,b,c){for(var d=String(b||D.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=yc(h[0]);if(k&&k==a){var l=yc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Re=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=P(C.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=D.cookie,r=0;r<k.length;r++){var u=h,t=k[r],A=c;if(Oe.test(C.location.hostname)||"/"==A&&Pe.test(t))break;"none"!=k[r]&&(u+="domain="+k[r]+";");D.cookie=u;if(q!=D.cookie||0<=ra(Qe(a),b))break}};var Se=!1;if(D.querySelectorAll)try{var Te=D.querySelectorAll(":root");Te&&1==Te.length&&Te[0]==D.documentElement&&(Se=!0)}catch(a){}var Ue=Se;var Ve=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},Ye=function(a,b,c,d){var e=We(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Xe(e,function(a){return a.rd},b);if(1===e.length)return e[0].id;e=Xe(e,function(a){return a.Zd},c);return e[0]?e[0].id:void 0}},af=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(Ze.test(document.location.hostname)||"/"===
h&&$e.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var r=q[q.length-1];if(parseInt(r,10).toString()===r){n=["none"];break a}}for(var u=q.length-2;0<=u;u--)p.push(q.slice(u).join("."));p.push("none");n=p}for(var t=n,A=0;A<t.length&&!m;A++)m=af(a,b,c,t[A],e);return m}d&&
"none"!==d&&(l+="domain="+d+";");var J=document.cookie;document.cookie=l;return J!=document.cookie||0<=Ve(a).indexOf(b)};function Xe(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function We(a,b){for(var c=[],d=Ve(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),rd:1*k[0]||1,Zd:1*k[1]||1}))}}return c}
var $e=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ze=/(^|\.)doubleclick\.net$/i;var bf=window,cf=document;var ff=function(a){for(var b=bf.navigator.userAgent+(cf.cookie||"")+(cf.referrer||""),c=b.length,d=bf.history.length;0<d;)b+=d--^c++;var e=1,f,h,k;if(b)for(e=0,h=b.length-1;0<=h;h--)k=b.charCodeAt(h),e=(e<<6&268435455)+k+(k<<14),f=e&266338304,e=0!=f?e^f>>21:e;var l=[Math.round(2147483647*Math.random())^e&2147483647,Math.round(Date.now()/1E3)].join("."),m=""+df(void 0),n=ef(void 0);1<n&&(m+="-"+n);return[a,m,l].join(".")},gf=function(a,b,c,d){var e=df(b);return Ye(a,e,ef(c),d)};
function df(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function ef(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var hf=["1"],jf={},mf=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d=kf(void 0===a?"_gcl":a);if(!jf[d]&&!lf(d,b,c)){var e=ff("1");af(d,e,c,b,7776E6);lf(d,b,c)}};function lf(a,b,c){var d=gf(a,b,c,hf);d&&(jf[a]=d);return d}function kf(a){return(void 0===a?"_gcl":a)+"_au"};var nf=function(a){for(var b=[],c=D.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var of=/^\w+$/,pf=/^[\w-]+$/,qf=/^\d+\.fls\.doubleclick\.net$/;function rf(a){return a&&"string"==typeof a&&a.match(of)?a:"_gcl"}function sf(a){if(a){if("string"==typeof a){var b=rf(a);return{sa:b,ra:b,xa:b}}if(a&&"object"==typeof a)return{sa:rf(a.dc),ra:rf(a.aw),xa:rf(a.gf)}}return{sa:"_gcl",ra:"_gcl",xa:"_gcl"}}function tf(a){var b=Q(C.location.href),c=P(b,"host",!1);if(c&&c.match(qf)){var d=P(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function uf(a){return a.filter(function(a){return pf.test(a)})}var wf=function(a){var b=tf("gclaw");if(b)return b.split(".");var c=sf(a);if("_gcl"==c.ra){var d=vf();if(d&&(null==d.D||"aw.ds"==d.D))return[d.W]}return uf(nf(c.ra+"_aw"))},xf=function(a){var b=tf("gcldc");if(b)return b.split(".");var c=sf(a);if("_gcl"==c.sa){var d=vf();if(d&&("ds"==d.D||"aw.ds"==d.D))return[d.W]}return uf(nf(c.sa+"_dc"))};
function vf(){var a=Q(C.location.href),b=P(a,"query",!1,void 0,"gclid"),c=P(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=P(a,"fragment");b=b||Xa(d,"gclid");c=c||Xa(d,"gclsrc")}return void 0!==b&&b.match(pf)?{W:b,D:c}:null}
var yf=function(){var a=tf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=D.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({zb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].zb]||(h[b[k].zb]=[]),h[b[k].zb].push({timestamp:l[1],W:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].W);p=uf(p);
p.length&&m.push(n+":"+p.join(","))}return m.join(";")},zf=function(a,b,c){};var Af;a:{Af="G"}var Bf={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GTM:Af},Cf=function(a){var b=kc.o.split("-"),c=b[0].toUpperCase();return(Bf[c]||"i")+"7n"+(a&&"GTM"===c?b[1]:"")};
var Df=function(a){return!(void 0===a||null===a||0===(a+"").length)},Ef=function(a,b){var c;if(2===b.C)return a("ord",zc(1E11,1E13)),!0;if(3===b.C)return a("ord","1"),a("num",zc(1E11,1E13)),!0;if(4===b.C)return Df(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.C)c="1";else if(6===b.C)c=b.vc;else return!1;Df(c)&&a("qty",c);Df(b.gb)&&a("cost",b.gb);Df(b.Ab)&&a("ord",b.Ab);return!0},Ff=encodeURIComponent,Gf=function(a,b){function c(a,b,c){f.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:Ff(b)))}var d=a.ib,
e=a.protocol;e+=a.Xa?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Ff(d)+(";type="+Ff(a.jb))+(";cat="+Ff(a.qa));var f=a.ld||{},h;for(h in f)f.hasOwnProperty(h)&&(e+=";"+Ff(h)+"="+Ff(f[h]+""));if(Ef(c,a)){Df(a.Cb)&&c("u",a.Cb);Df(a.tran)&&c("tran",a.tran);c("gtm",Cf());!1===a.Nc&&c("npa","1");if(a.fb){var k=xf(a.fa);k&&k.length&&c("gcldc",k.join("."));var l=wf(a.fa);l&&l.length&&c("gclaw",l.join("."));var m=yf();m&&c("gac",m);}Df(a.sb)&&c("prd",a.sb,!0);for(var p in a.Fa)a.Fa.hasOwnProperty(p)&&c(p,a.Fa[p]);e+=b||"";Df(a.Ta)&&c("~oref",a.Ta);a.Xa?Pa(e+"?",a.R):K(e+"?",a.R,a.ka)}else N(a.ka)};var Jf=!!C.MutationObserver,Kf=void 0,Lf=function(a){if(!Kf){var b=function(){var a=D.body;if(a)if(Jf)(new MutationObserver(function(){for(var a=0;a<Kf.length;a++)N(Kf[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Qa(a,"DOMNodeInserted",function(){b||(b=!0,N(function(){b=!1;for(var a=0;a<Kf.length;a++)N(Kf[a])}))})}};Kf=[];D.body?b():N(b)}Kf.push(a)};var Yf="www.googletagmanager.com/gtm.js";
var Zf=Yf,$f=function(a,b,c,d){Qa(a,b,c,d)},ag=function(a,b){return C.setTimeout(a,b)},bg=function(a,b,c){G(a,b,c)},cg={},dg=function(a,b,c){var d=cg[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.yc:a.Yb,d=0;d<c.length;d++)C.setTimeout(c[d],0)}};d={status:1,yc:[],Yb:[],pe:void 0};d.Xe=G(a,e(d,2),e(d,3));cg[a]=d}0===d.status&&(d.pe(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.yc.push(b),c&&d.Yb.push(c))},eg=function(){return C.location.href},
fg=function(a){return P(Q(a),"fragment")},U=function(a,b){return Hc(a,b||2)},gg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return C["dataLayer"].push(a)},hg=function(a,b){C[a]=b},V=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},ig=function(a,b,c){var d=b,e=c,f=sf(a);e=e||"auto";d=d||"/";var h=vf();if(null!=h){var k=(new Date).getTime(),l=new Date(k+7776E6),m=["GCL",Math.round(k/1E3),h.W].join(".");h.D&&"aw.ds"!=h.D||Re(f.ra+"_aw",m,d,e,l,!0);"aw.ds"!=h.D&&
"ds"!=h.D||Re(f.sa+"_dc",m,d,e,l,!0);"gf"==h.D&&Re(f.xa+"_gf",m,d,e,l,!0)}},jg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},Y=function(a,b,c,d){var e=!d&&"http:"==C.location.protocol;e&&(e=2!==kg());return(e?b:a)+c};
var lg=function(a){var b=0;return b},mg=function(a){},ng=function(a){var b=!1;return b},og=function(a,b){var c;a:{if(a&&
qa(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},pg=function(a,b,c,d){Me(a,b,c,d)},qg=function(a,b,c){return Ne(a,b,c)},rg=function(a){return!!Ne(a,"init",!1)},sg=function(a){Le(a).init=!0};
var kg=function(){var a=Zf;if(qc){if(0===qc.toLowerCase().indexOf("https://"))return 2;if(0===qc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=D.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var vg=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Zf;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));var f=Y("https://","http://",d);G(f,void 0,void 0)};var xg=function(a,b,c){a instanceof ke.Fc&&(a=a.resolve(ke.je(b,c)),b=rc);return{kb:a,R:b}};var yg=function(a,b,c){this.n=a;this.t=b;this.p=c},zg=function(){this.c=1;this.e=[];this.p=null};function Ag(a){var b=lc,c=b.gss=b.gss||{};return c[a]=c[a]||new zg}var Bg=function(a,b){Ag(a).p=b},Cg=function(a,b,c){var d=Math.floor((new Date).getTime()/1E3);Ag(a).e.push(new yg(b,d,c))},Dg=function(a){};var Mg=window,Ng=document,Og=function(a){var b=Mg._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Mg["ga-disable-"+a])return!0;try{var c=Mg.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(m){}for(var d=[],e=Ng.cookie.split(";"),f=/^\s*AMP_TOKEN=\s*(.*?)\s*$/,h=0;h<e.length;h++){var k=e[h].match(f);k&&d.push(k[1])}for(var l=0;l<d.length;l++)if("$OPT_OUT"==decodeURIComponent(d[l]))return!0;return!1};var Rg=function(a){if(1===Ag(a).c){Ag(a).c=2;var b=encodeURIComponent(a);G(("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Sg=function(a,b){};var Z={a:{}};Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0})(function(){return"130"})}();
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;Gf(a,c)}(function(a){Z.__flc=a;Z.__flc.b="flc";Z.__flc.g=!0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=T(b.vtp_customVariable||[],"key","value")||{},e={qa:b.vtp_activityTag,fb:c,fa:b.vtp_conversionCookiePrefix||void 0,C:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,ib:b.vtp_advertiserId,jb:b.vtp_groupTag,ka:b.vtp_gtmOnFailure,R:b.vtp_gtmOnSuccess,Ta:b.vtp_useImageTag?void 0:b.vtp_url,
protocol:"",Xa:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,Cb:b.vtp_userVariable,Fa:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){bg("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,V("google_attr").build([T(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;bg("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=V("google_trackConversion");if(sc(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=T(a.vtp_customParams,"key","value"));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:Cf(void 0)})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return mc})}();Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=U("gtm.referrer",1)||D.referrer,c;if(b){var d;if(a.vtp_component&&"URL"!=a.vtp_component){var e=Q(String(b));d=P(e,a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey)}else d=Ya(Q(String(b)));c=d}else c=String(b);return c})}();
Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0})(function(a){var b=U("gtm.cookie",1);return Qe(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return zc(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:U("gtm.url",1))||eg();var d=b[a("vtp_component")],e;if(d&&"URL"!=d){var f=Q(String(c));e=P(f,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0)}else e=Ya(Q(String(c)));return e})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0})(function(){return kc.o})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=V("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(b){return function(){d();a=!1;var c=cg[b];c&&3==c.status&&(cg[b]=void 0)}},f=function(){return function(){d();b={push:c};}},h=function(c){var d={google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Cf(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),
d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,dg("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(a){Z.__baut=a;Z.__baut.b="baut";Z.__baut.g=!0})(function(b){var c=b.vtp_uetqName||"uetq",d=V(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(a,c){void 0!==b[a]&&(e[c]=b[a])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction","ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{bg("//bat.bing.com/bat.js",function(){var a=Ee(V("UET"),{ti:b.vtp_tagId,q:d});C[c]=a;a.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){N(b.vtp_gtmOnFailure)}})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=T(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Oa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){N(h)}}};var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,f=xg(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.kb,k=f.R;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,Va(h),k,e)()}else ag(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();

Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0})(function(a){var b=Va('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}K(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


var Tg={macro:function(a){if(ke.ab.hasOwnProperty(a))return ke.ab[a]}};Tg.dataLayer=Ic;Tg.onHtmlSuccess=ke.Ub(!0);Tg.onHtmlFailure=ke.Ub(!1);Tg.callback=function(a){oc.hasOwnProperty(a)&&sc(oc[a])&&oc[a]();delete oc[a]};Tg.Uc=function(){lc[kc.o]=Tg;pc=Z.a;Wb=Wb||ke;Xb=Tc};
Tg.Id=function(){lc=C.google_tag_manager=C.google_tag_manager||{};if(lc[kc.o]){var a=lc.zones;a&&a.unregisterChild(kc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Sb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Qb.push(p)}Ub=Z;De();Tg.Uc();je();Yc=!1;Zc=0;if("interactive"==
D.readyState&&!D.createEventObject||"complete"==D.readyState)ad();else{Qa(D,"DOMContentLoaded",ad);Qa(D,"readystatechange",ad);if(D.createEventObject&&D.documentElement.doScroll){var r=!0;try{r=!C.frameElement}catch(t){}r&&bd()}Qa(C,"load",ad)}Xd=!1;"complete"===D.readyState?Zd():Qa(C,"load",Zd);a:{
if(!ld)break a;od();rd=void 0;sd={};pd={};ud=void 0;td={};qd="";vd=md();C.setInterval(od,864E5);}}};Tg.Id();

})()
