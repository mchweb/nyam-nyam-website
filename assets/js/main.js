/* mfp */
(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(window.jQuery||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isLowIE=n.isIE8=document.all&&!document.addEventListener,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n.st.autoFocusLast&&n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey||b.altKey||b.shiftKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(c,d){if(d===undefined||d===!1)return!0;e=c.split("_");if(e.length>1){var f=b.find(j+"-"+e[0]);if(f.length>0){var g=e[1];g==="replaceWith"?f[0]!==d[0]&&f.replaceWith(d):g==="img"?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(j+"-"+c).html(d)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Загрузка...",autoFocusLast:!0}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C="inline",D,E,F,G=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(C,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(C),w(b+"."+C,function(){G()})},getInline:function(b,c){G();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(E||(D=d.hiddenClass,E=x(D),D="mfp-"+D),F=e.after(E).detach().removeClass(D)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var H="ajax",I,J=function(){I&&a(document.body).removeClass(I)},K=function(){J(),n.req&&n.req.abort()};a.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(H),I=n.st.ajax.cursor,w(b+"."+H,K),w("BeforeChange."+H,K)},getAjax:function(b){I&&a(document.body).addClass(I),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),n.appendContent(a(f.data),H),b.finished=!0,J(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var L,M=function(){return L===undefined&&(L=document.createElement("p").style.MozTransform!==undefined),L};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return M()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}}),A()})/* unslider */
/* unslider */
!function($){return $?($.Unslider=function(t,n){var e=this;return e._="unslider",e.defaults={autoplay:!1,delay:3e3,speed:750,easing:"swing",keys:{prev:37,next:39},nav:!0,arrows:{prev:'<a class="'+e._+'-arrow prev">Prev</a>',next:'<a class="'+e._+'-arrow next">Next</a>'},animation:"horizontal",selectors:{container:"ul:first",slides:"li"},animateHeight:!1,activeClass:e._+"-active",swipe:!0,swipeThreshold:.2},e.$context=t,e.options={},e.$parent=null,e.$container=null,e.$slides=null,e.$nav=null,e.$arrows=[],e.total=0,e.current=0,e.prefix=e._+"-",e.eventSuffix="."+e.prefix+~~(2e3*Math.random()),e.interval=null,e.init=function(t){return e.options=$.extend({},e.defaults,t),e.$container=e.$context.find(e.options.selectors.container).addClass(e.prefix+"wrap"),e.$slides=e.$container.children(e.options.selectors.slides),e.setup(),$.each(["nav","arrows","keys","infinite"],function(t,n){e.options[n]&&e["init"+$._ucfirst(n)]()}),jQuery.event.special.swipe&&e.options.swipe&&e.initSwipe(),e.options.autoplay&&e.start(),e.calculateSlides(),e.$context.trigger(e._+".ready"),e.animate(e.options.index||e.current,"init")},e.setup=function(){e.$context.addClass(e.prefix+e.options.animation).wrap('<div class="'+e._+'" />'),e.$parent=e.$context.parent("."+e._);var t=e.$context.css("position");"static"===t&&e.$context.css("position","relative"),e.$context.css("overflow","hidden")},e.calculateSlides=function(){if(e.total=e.$slides.length,"fade"!==e.options.animation){var t="width";"vertical"===e.options.animation&&(t="height"),e.$container.css(t,100*e.total+"%").addClass(e.prefix+"carousel"),e.$slides.css(t,100/e.total+"%")}},e.start=function(){return e.interval=setTimeout(function(){e.next()},e.options.delay),e},e.stop=function(){return clearTimeout(e.interval),e},e.initNav=function(){var t=$('<nav class="'+e.prefix+'nav"><ol /></nav>');e.$slides.each(function(n){var i=this.getAttribute("data-nav")||n+1;$.isFunction(e.options.nav)&&(i=e.options.nav.call(e.$slides.eq(n),n,i)),t.children("ol").append('<li data-slide="'+n+'">'+i+"</li>")}),e.$nav=t.insertAfter(e.$context),e.$nav.find("li").on("click"+e.eventSuffix,function(){var t=$(this).addClass(e.options.activeClass);t.siblings().removeClass(e.options.activeClass),e.animate(t.attr("data-slide"))})},e.initArrows=function(){e.options.arrows===!0&&(e.options.arrows=e.defaults.arrows),$.each(e.options.arrows,function(t,n){e.$arrows.push($(n).insertAfter(e.$context).on("click"+e.eventSuffix,e[t]))})},e.initKeys=function(){e.options.keys===!0&&(e.options.keys=e.defaults.keys),$(document).on("keyup"+e.eventSuffix,function(t){$.each(e.options.keys,function(n,i){t.which===i&&$.isFunction(e[n])&&e[n].call(e)})})},e.initSwipe=function(){var t=e.$slides.width();"fade"!==e.options.animation&&e.$container.on({movestart:function(t){return t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY?!!t.preventDefault():void e.$container.css("position","relative")},move:function(n){e.$container.css("left",-(100*e.current)+100*n.distX/t+"%")},moveend:function(n){Math.abs(n.distX)/t>e.options.swipeThreshold?e[n.distX<0?"next":"prev"]():e.$container.animate({left:-(100*e.current)+"%"},e.options.speed/2)}})},e.initInfinite=function(){var t=["first","last"];$.each(t,function(n,i){e.$slides.push.apply(e.$slides,e.$slides.filter(':not(".'+e._+'-clone")')[i]().clone().addClass(e._+"-clone")["insert"+(0===n?"After":"Before")](e.$slides[t[~~!n]]()))})},e.destroyArrows=function(){$.each(e.$arrows,function(t,n){n.remove()})},e.destroySwipe=function(){e.$container.off("movestart move moveend")},e.destroyKeys=function(){$(document).off("keyup"+e.eventSuffix)},e.setIndex=function(t){return 0>t&&(t=e.total-1),e.current=Math.min(Math.max(0,t),e.total-1),e.options.nav&&e.$nav.find('[data-slide="'+e.current+'"]')._active(e.options.activeClass),e.$slides.eq(e.current)._active(e.options.activeClass),e},e.animate=function(t,n){if("first"===t&&(t=0),"last"===t&&(t=e.total),isNaN(t))return e;e.options.autoplay&&e.stop().start(),e.setIndex(t),e.$context.trigger(e._+".change",[t,e.$slides.eq(t)]);var i="animate"+$._ucfirst(e.options.animation);return $.isFunction(e[i])&&e[i](e.current,n),e},e.next=function(){var t=e.current+1;return t>=e.total&&(t=0),e.animate(t,"next")},e.prev=function(){return e.animate(e.current-1,"prev")},e.animateHorizontal=function(t){var n="left";return"rtl"===e.$context.attr("dir")&&(n="right"),e.options.infinite&&e.$container.css("margin-"+n,"-100%"),e.slide(n,t)},e.animateVertical=function(t){return e.options.animateHeight=!0,e.options.infinite&&e.$container.css("margin-top",-e.$slides.outerHeight()),e.slide("top",t)},e.slide=function(t,n){if(e.options.animateHeight&&e._move(e.$context,{height:e.$slides.eq(n).outerHeight()},!1),e.options.infinite){var i;n===e.total-1&&(i=e.total-3,n=-1),n===e.total-2&&(i=0,n=e.total-2),"number"==typeof i&&(e.setIndex(i),e.$context.on(e._+".moved",function(){e.current===i&&e.$container.css(t,-(100*i)+"%").off(e._+".moved")}))}var o={};return o[t]=-(100*n)+"%",e._move(e.$container,o)},e.animateFade=function(t){var n=e.$slides.eq(t).addClass(e.options.activeClass);e._move(n.siblings().removeClass(e.options.activeClass),{opacity:0}),e._move(n,{opacity:1},!1)},e._move=function(t,n,i,o){return i!==!1&&(i=function(){e.$context.trigger(e._+".moved")}),t._move(n,o||e.options.speed,e.options.easing,i)},e.init(n)},$.fn._active=function(t){return this.addClass(t).siblings().removeClass(t)},$._ucfirst=function(t){return(t+"").toLowerCase().replace(/^./,function(t){return t.toUpperCase()})},$.fn._move=function(){return this.stop(!0,!0),$.fn[$.fn.velocity?"velocity":"animate"].apply(this,arguments)},void($.fn.unslider=function(t){return this.each(function(){var n=$(this);if("string"==typeof t&&n.data("unslider")){t=t.split(":");var e=n.data("unslider")[t[0]];if($.isFunction(e))return e.apply(n,t[1]?t[1].split(","):null)}return n.data("unslider",new $.Unslider(n,t))})})):console.warn("Unslider needs jQuery")}(window.jQuery);
// jQuery Mask Plugin v1.14.0
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b(require("jquery")):b(jQuery||Zepto)})(function(b){var y=function(a,e,d){var c={invalid:[],getCaret:function(){try{var r,b=0,e=a.get(0),d=document.selection,f=e.selectionStart;if(d&&-1===navigator.appVersion.indexOf("MSIE 10"))r=d.createRange(),r.moveStart("character",-c.val().length),b=r.text.length;else if(f||"0"===f)b=f;return b}catch(g){}},setCaret:function(r){try{if(a.is(":focus")){var c,
b=a.get(0);b.setSelectionRange?(b.focus(),b.setSelectionRange(r,r)):(c=b.createTextRange(),c.collapse(!0),c.moveEnd("character",r),c.moveStart("character",r),c.select())}}catch(e){}},events:function(){a.on("keydown.mask",function(c){a.data("mask-keycode",c.keyCode||c.which)}).on(b.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){n===
c.val()||a.data("changed")||a.trigger("change");a.data("changed",!1)}).on("blur.mask",function(){n=c.val()}).on("focus.mask",function(a){!0===d.selectOnFocus&&b(a.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!p.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],c,b,d,f,l=0;l<e.length;l++)(c=g.translation[e.charAt(l)])?(b=c.pattern.toString().replace(/.{1}$|^.{1}/g,""),d=c.optional,(c=c.recursive)?(a.push(e.charAt(l)),f={digit:e.charAt(l),pattern:b}):a.push(d||
c?b+"?":b)):a.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");f&&(a=a.replace(new RegExp("("+f.digit+"(.*"+f.digit+")?)"),"($1)?").replace(new RegExp(f.digit,"g"),f.pattern));return new RegExp(a)},destroyEvents:function(){a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(c){var b=a.is("input")?"val":"text";if(0<arguments.length){if(a[b]()!==c)a[b](c);b=a}else b=a[b]();return b},getMCharsBeforeCount:function(a,c){for(var b=0,d=0,
f=e.length;d<f&&d<a;d++)g.translation[e.charAt(d)]||(a=c?a+1:a,b++);return b},caretPos:function(a,b,d,h){return g.translation[e.charAt(Math.min(a-1,e.length-1))]?Math.min(a+d-b-h,d):c.caretPos(a+1,b,d,h)},behaviour:function(d){d=d||window.event;c.invalid=[];var e=a.data("mask-keycode");if(-1===b.inArray(e,g.byPassKeys)){var m=c.getCaret(),h=c.val().length,f=c.getMasked(),l=f.length,k=c.getMCharsBeforeCount(l-1)-c.getMCharsBeforeCount(h-1),n=m<h;c.val(f);n&&(8!==e&&46!==e&&(m=c.caretPos(m,h,l,k)),
c.setCaret(m));return c.callbacks(d)}},getMasked:function(a,b){var m=[],h=void 0===b?c.val():b+"",f=0,l=e.length,k=0,n=h.length,q=1,p="push",u=-1,t,w;d.reverse?(p="unshift",q=-1,t=0,f=l-1,k=n-1,w=function(){return-1<f&&-1<k}):(t=l-1,w=function(){return f<l&&k<n});for(;w();){var x=e.charAt(f),v=h.charAt(k),s=g.translation[x];if(s)v.match(s.pattern)?(m[p](v),s.recursive&&(-1===u?u=f:f===t&&(f=u-q),t===u&&(f-=q)),f+=q):s.optional?(f+=q,k-=q):s.fallback?(m[p](s.fallback),f+=q,k-=q):c.invalid.push({p:k,
v:v,e:s.pattern}),k+=q;else{if(!a)m[p](x);v===x&&(k+=q);f+=q}}h=e.charAt(t);l!==n+1||g.translation[h]||m.push(h);return m.join("")},callbacks:function(b){var g=c.val(),m=g!==n,h=[g,b,a,d],f=function(a,b,c){"function"===typeof d[a]&&b&&d[a].apply(this,c)};f("onChange",!0===m,h);f("onKeyPress",!0===m,h);f("onComplete",g.length===e.length,h);f("onInvalid",0<c.invalid.length,[g,b,a,c.invalid,d])}};a=b(a);var g=this,n=c.val(),p;e="function"===typeof e?e(c.val(),void 0,a,d):e;g.mask=e;g.options=d;g.remove=
function(){var b=c.getCaret();c.destroyEvents();c.val(g.getCleanVal());c.setCaret(b-c.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return c.getMasked(!0)};g.getMaskedVal=function(a){return c.getMasked(!1,a)};g.init=function(e){e=e||!1;d=d||{};g.clearIfNotMatch=b.jMaskGlobals.clearIfNotMatch;g.byPassKeys=b.jMaskGlobals.byPassKeys;g.translation=b.extend({},b.jMaskGlobals.translation,d.translation);g=b.extend(!0,{},g,d);p=c.getRegexMask();!1===e?(d.placeholder&&a.attr("placeholder",d.placeholder),
a.data("mask")&&a.attr("autocomplete","off"),c.destroyEvents(),c.events(),e=c.getCaret(),c.val(c.getMasked()),c.setCaret(e+c.getMCharsBeforeCount(e,!0))):(c.events(),c.val(c.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),e={},d=a.attr("data-mask");a.attr("data-mask-reverse")&&(e.reverse=!0);a.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===a.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(z(a,d,e))return a.data("mask",new y(this,
d,e))},z=function(a,e,d){d=d||{};var c=b(a).data("mask"),g=JSON.stringify;a=b(a).val()||b(a).text();try{return"function"===typeof e&&(e=e(a)),"object"!==typeof c||g(c.options)!==g(d)||c.mask!==e}catch(n){}};b.fn.mask=function(a,e){e=e||{};var d=this.selector,c=b.jMaskGlobals,g=c.watchInterval,c=e.watchInputs||c.watchInputs,n=function(){if(z(this,a,e))return b(this).data("mask",new y(this,a,e))};b(this).each(n);d&&""!==d&&c&&(clearInterval(b.maskWatchers[d]),b.maskWatchers[d]=setInterval(function(){b(document).find(d).each(n)},
g));return this};b.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);delete b.maskWatchers[this.selector];return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};b.applyDataMask=function(a){a=a||b.jMaskGlobals.maskElements;(a instanceof b?a:b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)};var p={maskElements:"input,td,span,div",
dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,"return;"),d="function"===typeof b[a]);return d}("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};p=b.jMaskGlobals=b.extend(!0,{},p,b.jMaskGlobals);
p.dataMask&&b.applyDataMask();setInterval(function(){b.jMaskGlobals.watchDataMask&&b.applyDataMask()},p.watchInterval)});

//////////////////////////////////////////////////////////////////////////////////////////////////////
/* fixed menu relocation */
function sticky_relocate(){
	if ($('.js-line-top').css('display') == 'none'){
		$('.js-line-bottom').css('top', '0');
	}
	else{
		if ($('.header-line-bottom').hasClass("header-line-bottom_notFixed")){
				$('.js-line-bottom').css('top', $('header').outerHeight());
		}else{
   			var x = $('header').outerHeight() - $(window).scrollTop();
   			if (x < 0) {
   				x = 0;
   				$('.main-logo__title').addClass("main-logo__title_hide");
   			}else{
   				$('.main-logo__title').removeClass("main-logo__title_hide");
   			};
    		$('.js-line-bottom').css('top', x);
   		}
   	}

   	$('.content').css('margin-top', $('.js-line-bottom').outerHeight());
}

$(window).scroll(sticky_relocate);
$(window).resize(sticky_relocate);
$(window).load(sticky_relocate);
//////////////////////////////////////////////////////////////////////////////////////////////////////

var isHappyHour = false;

//////////////////////////////////////////////////////////////////////////////////////////////////////
// UTM remover
function removeUtms() {
    if (history.replaceState) {
        var location = window.location;
        var url = location.toString();
        var strippedUrl = getStrippedUrl(url);
        if (strippedUrl == url) {
            return
        }
        history.replaceState(undefined, undefined, strippedUrl)
    }
}

function getStrippedUrl(url) {
    if (url.indexOf("utm_") > url.indexOf("?")) {
        url = url.replace(/([\?\&]utm_(reader|source|medium|campaign|content|term)=[^&#]+)/gi, "")
    }
    if (url.indexOf("&") != -1 && url.indexOf("?") == -1) {
        url = url.replace("&", "?")
    }
    return url
}

$(document).ready(function() {
    setTimeout(removeUtms, 3 * 1000);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Ajax
$(document).ajaxStart(function() {
    $(".form-loader").addClass("form-loader_isActive");
    $(".js-send-btn").prop("disabled", true);
});
$(document).ajaxStop(function() {
    $(".form-loader").removeClass("form-loader_isActive");
    $(".js-send-btn").prop("disabled", false);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
// hamburger menu
function closeMenuMobile(){
	$(".hamburger").removeClass("is-active");
	$(".nav-cat").removeClass("nav-cat_open");
}
$(document).ready(function() {

	// hamburger menu
    $(".header-mobile__menu-button").click(function() {
        var x = $(".nav-cat");
        if (x.hasClass("nav-cat_open")) {
            closeMenuMobile();
        } else {
            $(".hamburger").addClass("is-active");
            x.addClass("nav-cat_open");
        }
    });
    
    $(".nav-mobile__item").each(function() {
        $(this).on("click", closeMenuMobile);
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
// cart button
function openCart(){
    	if (!($(".header-cart__button-active").hasClass("header-cart__button-active_isActive"))){
    		$(".m-cart-wrap").removeClass("m-cart-wrap_isHidden");
    		$(".header-cart__button").addClass("header-cart__button_isActive");
    		setTimeout(function(){$(".header-cart__button-active").addClass("header-cart__button-active_isActive");}, 0.5*1000);
    	}
    }
    function closeCart(){
		$(".header-cart__button").removeClass("header-cart__button_isActive");
    	$(".header-cart__button").blur();
    	setTimeout(function(){$(".header-cart__button-active").removeClass("header-cart__button-active_isActive");}, 0.5*1000);
    }

$(document).ready(function() {

    $(".header-cart__button").click(function(){
    	openCart();
    });
    $(".header-cart__button").hover(function(){
    	openCart();
    },
    function(){
    	$(".m-cart-wrap").addClass("m-cart-wrap_isHidden");
		closeCart();
    });
    $(".m-cart-wrap").hover(function(){
		$(".header-cart__button").addClass("header-cart__button_isActive");
    }, function(){
		closeCart();
    });
    $(".header-cart__button-active").click(function(){
    	$(".m-cart-wrap").addClass("m-cart-wrap_isHidden");
    	closeCart();
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
//cart-extras
    function cartExtras_resize(){
    	$(".js-cart-extras").css("max-height",$('.cart-order').height()+$('.cart-form').height()-$('.cart-extras-title').height());
    }
    $(window).resize(cartExtras_resize);
	$(window).load(cartExtras_resize);
	$(".cart-extras__cancel").click(function(){
		if ($(".js-cart-extras").hasClass("js-cart-extras_isHidden")){
			$(".js-cart-extras").removeClass("js-cart-extras_isHidden");
			$(".cart-extras-cancel__hide").css("display","inline");
			$(".cart-extras-cancel__show").css("display","none");
		}else{
			$(".js-cart-extras").addClass("js-cart-extras_isHidden");
			$(".cart-extras-cancel__hide").css("display","none");
			$(".cart-extras-cancel__show").css("display","inline");
		}
	});
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
	function clearComponents(){
		$(".components__item").each(function(){
			$(this).removeClass("components__item_isActive");
			$(".components__item_clear").addClass("components__item_isActive");
		});
	}
	function checkComponents(){
		var x = 0;
		$(".components__item").each(function(){
			if ($(this).hasClass("components__item_isActive")){
				x = 1;
			}
		});
		if (x != 1){
			$(".components__item_clear").addClass("components__item_isActive");
		}
	}
	function updateCompResults(){
		var list = [];
		$(".components__item").each(function(){
			if (($(this).hasClass("components__item_isActive")) && (!($(this).hasClass("components__item_clear")))){
				list.push($(this).children('span').first().html().toLowerCase());
			}
		});

		var l = list.length;
		var s = "";
		if (l != 0){
			$(".components__caption").css("display","block");

			for (var i = 0; i < l-1; i++) {
				s = s + list[i];
				if (i != l-2){
					s += ", "
				}
			}
			if (l != 1) s+= " и ";
			s += list[l-1];

			$("#js-components-caption").html(s);
		}else{
			$(".components__caption").css("display","none");
		}
		var count = 0;

		$(".product-wrap").each(function(){
			var show = true;

			var arr = $(this).data("components");
			if (arr != null){
			$(".components__item").each(function(){
				if ($(this).hasClass("components__item_isActive")){
					var c = $(this).data("component");
					if (c != '-1'){
						var s = false;
						arr.forEach(function(item, i, arr) {
							if (item == c){
								s = true;
							}
						});

						if (!(s)){
							show = false;
						}
					}
				}
			});
			}

			if (show){
				count++;
				$(this).css("display","block");
			}else{
				$(this).css("display","none");
			}

			if (count == 0){
				$(".components__empty").css("display","block");
			}else{
				$(".components__empty").css("display","none");
			}

		});
	}
$(document).ready(function() {
	$(".components__item").each(function(){
		$(this).click(function(){
			var c = $(this).data("component");
			if (c == '-1'){
				clearComponents();
				updateCompResults();
			}else{
				$(".components__item_clear").removeClass("components__item_isActive");
				if ($(this).hasClass("components__item_isActive")){
					$(this).removeClass("components__item_isActive");
					checkComponents();
					updateCompResults();
				}else{
					$(this).addClass("components__item_isActive");
					updateCompResults();
				}
				
			}
		});
	});
	// components filter
    $(".components__switcher").click(function(){
    	var c = $(".components");
    	if (c.hasClass("components_isActive")){
    		c.removeClass("components_isActive");
    		$(".comp-caption__show").css("display","inline");
    		$(".comp-caption__hide").css("display","none");
    	}else{
    		c.addClass("components_isActive");
    		$(".comp-caption__hide").css("display","inline");
    		$(".comp-caption__show").css("display","none");
    	}
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
// SUBCATS
	function clearSubcats(){
		$(".subcat__item").each(function(){
			$(this).removeClass("subcat__item_isActive");
		});
	}

	function updateSubcatsResults(){
		$(".product-wrap").each(function(){
			var show = true;
			var t = $(this).data("subcat");

			$(".subcat__item").each(function(){
				if ($(this).hasClass("subcat__item_isActive")){
					var c = $(this).data("subcat");
					if ((c != t) && (c != -1)){
						show = false;
					}
				}
			});

			if (show){
				$(this).css("display","block");
			}else{
				$(this).css("display","none");
			}

		});
	}
$(document).ready(function() {
	$(".subcat__item").each(function(){
		$(this).click(function(){
			clearSubcats();
			$(this).addClass("subcat__item_isActive");
			updateSubcatsResults();
		});
	});  
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
// FORMS
function setDeliv(x){
		switch(x) {
        	case '0':
        	    $(".js-f-addr").css("display","block");
        	    $(".js-delivery-areas").removeClass("form-group-extra_isActive");
        	    break;
        	case '1':
        	    $(".js-f-addr").css("display","block");
        	    $(".js-delivery-areas").addClass("form-group-extra_isActive");
        	    break;
        	case '2':
        	    $(".js-f-addr").css("display","none");
        	    $(".js-delivery-areas").removeClass("form-group-extra_isActive");
        	    break;
    	}
    	calculateTotal();
	}
function setPay(x){
		switch(x) {
        	case '0':
        	    $(".js-payment-change").addClass("form-group-extra_isActive");
        	    $("#js-f-pay-0__label").css("display","inline");
        	    break;
        	case '1':
        		$(".js-payment-change").removeClass("form-group-extra_isActive");
        		$("#js-f-pay-0__label").css("display","none");
        	    break;
    	}
	}
function orderSuccess() {
	$.magnificPopup.open({items: { src: $(".form-success") }, type: "inline",  removalDelay: 300, mainClass: 'my-mfp-zoom-in'});

   	clearCart();
   	updateCart();

   	/* Запоминание заказа */
   	localStorage.setItem("lastorder", "1");

   	localStorage.setItem("f-name", $("#f-name").val());
   	localStorage.setItem("f-tel", $("#f-tel").val());

   	localStorage.setItem("f-deliv", $('input[type=radio][name=f-deliv]:checked').val());
   	localStorage.setItem("f-deliv-area", $("#f-deliv-area").val());

   	localStorage.setItem("f-addr", $("#f-addr").val());
   	
   	localStorage.setItem("f-pay", $('input[type=radio][name=f-pay]:checked').val());
}

function clearForm() {
    	$(".form-remember").fadeOut("fast");
	
    	$("#f-name").val("");
    	$("#f-tel").val("");
    	$('input[type=radio][name=f-deliv]').val(['0']);
    	setDeliv('0');
    	$('select[name=f-deliv-area]').val(['1']);
    	$("#f-addr").val("");
    	$('input[type=radio][name=f-pay]').val(['0']);
    	setPay('0');
    	$("#f-cash").val("");
    	$("#f-person").val("");
    	$("#f-comment").val("");
	}

function sendOrder(){
    var f = false;

    var cartData = getCartData();
    $("#js-fg-name").removeClass("form-group_invalid");
    $("#js-fg-tel").removeClass("form-group_invalid");
    $("#js-fg-addr").removeClass("form-group_invalid");

    if ($("#f-name").val() == "") {
        $("#js-fg-name").addClass("form-group_invalid");
        $("#f-name").focus();
        f = true;
    }
    if ($("#f-tel").val() == "") {
        $("#js-fg-tel").addClass("form-group_invalid");
        $("#f-tel").focus();
        f = true;
    }
    if ($('input[type=radio][name=f-deliv]:checked').val() != 2){
    	if ($("#f-addr").val() == "") {
    		$("#js-fg-addr").addClass("form-group_invalid");
        	$("#f-addr").focus();
        	f = true;
    	}
    }

    if (f) {
        return
    }

    $.ajax({
        url: "!!!!!SETURL",
        data: {
            "f-name": $("#f-name").val(),
            "f-phone": $("#f-tel").val(),
            "f-deliv": $('input[type=radio][name=f-deliv]:checked').val(),

            "f-deliv-area": $("#f-deliv-area option:selected").text(),
            "f-addr": $("#f-addr").val(),

            "f-pay": $('input[type=radio][name=f-pay]:checked').val(),

            "f-cash": $("#f-cash").val(),
            "f-person": $("#f-person").val(),
            "f-comment": $("#f-comment").val(),
            "cart": cartData
        },
        type: "POST",
        dataType: "xml",
        error: function(data) {
            answer = data["responseText"];
            if (answer == "") {
                orderSuccess();
                yaCounter36933535.reachGoal('order');
                ga('send', 'event', 'Order', 'done');
            } else {
                var s = "Упс, произошла ошибка при отправке формы. ";
                s += "Робот говорит: " + answer + ". ";
                s += "Вы точно заполнили все поля? Тогда проверьте, работает ли интернет? Если ничего не помогает, позвоните нам: 342-999. Обязательно сообщите, что вы не смогли сделать заказ с сайта :(";
                alert(s);
            }
        },
        success: function(data) {
            orderSuccess();
        }

    });
}

$(document).ready(function() {
	$("#f-tel").mask("+7 000 000-00-00", {placeholder: "+7 ___ ___-__-__"});
	
	$('input[type=radio][name=f-deliv]').on('change', function() {
    	setDeliv($(this).val());
	});
	$(".form-group__switcher").click(function(){
		$("#f-cash").val($(this).children('span').first().html());
	});
	
	$('input[type=radio][name=f-pay]').on('change', function() {
    	setPay($(this).val());
	});
	
	$(".form-remember").click(clearForm);


	// вспоминание заказа
	if (localStorage.getItem("lastorder") != null) {
        $("#f-name").val(localStorage.getItem("f-name"));
        $("#f-tel").val(localStorage.getItem("f-tel"));
    
        $('input[type=radio][name=f-deliv]').val([localStorage.getItem("f-deliv")]);
    	setDeliv(localStorage.getItem("f-deliv"));

    	$('select[name=f-deliv-area]').val([localStorage.getItem("f-deliv-area")]);

    	$("#f-addr").val(localStorage.getItem("f-addr"));

    	$('input[type=radio][name=f-pay]').val([localStorage.getItem("f-pay")]);
    	setPay(localStorage.getItem("f-pay"));

        $(".form-remember").css("display", "block");
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
// КОРЗИНА
$(document).ready(function() {
	updateCart(1);
});
// Получаем данные из LocalStorage
function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}
// Функция добавления товара в корзину
function addToCart(e, btn) {
	var $that = $(this);
	if (btn != null){
		$that = $(btn);
		$.magnificPopup.close();
		document.getElementById("pr-"+$that.data('id')).scrollIntoView();
	}
    var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        id = $that.data('id'), // ID товара
        gid = $that.data('gid'), // 0 ID группя
        sid = $that.data('sid'), // 1 ID 1C
        itemTitle = $that.data('title'), // 2 название товара
        // 3 количество     
        itemPrice = $that.data('price'), // 4 стоимость товара
        itemSubPrice = $that.data('sprice'), // 5
        itemWeight = $that.data('weight'),  // 6
        itemImage = $that.data('image');  // 7

    if (cartData.hasOwnProperty(id)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
        if (cartData[id][3] == 0) {
            cartData[id] = [gid, sid, itemTitle, 1, itemPrice, itemSubPrice, itemWeight, itemImage];
        } else {
            cartData[id][3] += 1;
        }
    } else { // если товара в корзине еще нет, то добавляем в объект
        cartData[id] = [gid, sid, itemTitle, 1, itemPrice, itemSubPrice, itemWeight, itemImage];
    }
    // Обновляем данные в LocalStorage
    if (!setCartData(cartData)) {
        updateCart();
        yaCounter36933535.reachGoal('add');
    } else {
        console.log("Не удалось обновить корзину");
    }
    return false;
}

function plusToCart() {
    var $that = $(this),
        cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        itemId = $that.data('id');

    if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][3] += 1;
    } else { // если товара в корзине еще нет, то добавляем в объект
        console.log("Товара нет в корзине");
        return false;
    }
    // Обновляем данные в LocalStorage
    if (!setCartData(cartData)) {
        updateCart();
    } else {
        console.log("Не удалось обновить корзину");
    }
    return false;
}

function minusToCart() {
    var $that = $(this),
        cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        itemId = $that.data('id');

    if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству 
        if (cartData[itemId][3] != 0) {
            cartData[itemId][3] -= 1;
        }else{
        	console.log("Товара 0 в корзине");
        	return false;
        }
    } else { // если товара в корзине еще нет, то добавляем в объект
        console.log("Товара нет в корзине");
        return false;
    }
    // Обновляем данные в LocalStorage
    if (!setCartData(cartData)) {
        updateCart();
    } else {
        console.log("Не удалось обновить корзину");
    }
    return false;
}

function removeFromCart() {
    var $that = $(this),
        cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        itemId = $that.data('id');

    if (itemId == "-1"){
    	gid = $that.data('gid');
    	if (cartData.hasOwnProperty(gid+"_0")) { cartData[gid+"_0"][3] = 0; }
    	if (cartData.hasOwnProperty(gid+"_1")) { cartData[gid+"_1"][3] = 0; }
    	if (cartData.hasOwnProperty(gid+"_2")) { cartData[gid+"_2"][3] = 0; }
    }else{

    	if (cartData.hasOwnProperty(itemId)) {
    	    cartData[itemId][3] = 0;
    	} else {
    	    console.log("Товара нет в корзине");
    	    return false;
    	}
    }

    if (!setCartData(cartData)) {
        updateCart();
    } else {
        console.log("Не удалось обновить корзину");
    }
}
var cartTotal = 0;
function updateCart(x) {
    var cartData = getCartData(), // вытаскиваем все данные корзины
        total = 0,
        count = 0,
        crt = $(".js-cart-items"),
        n = '',
        arr = [];
    // если что-то в корзине уже есть, начинаем формировать данные для вывода
    if (cartData !== null) {
        for (var items in cartData) {
            var i = items,
                c = cartData[items][3];

            $("#p-" + cartData[items][0]).removeClass("product_isAdded");

            $("#count-" + i).val(c);
            $("#m-count-" + i).val(c);
            if (c != 0) {
                count++;
                var price = cartData[items][4];
                if (isHappyHour){
                	price = cartData[items][5];
                }

                total += c * price;
                
                $("#pf-" + i).addClass("footer_isAdded");
                arr.push(cartData[items][0]);
                if ((x == 1) && (i != cartData[items][0])){
                	$("#pt-"+i).attr('checked', 'checked');
                	for(var j = 0; j<3; j++){
						$("#pf-"+cartData[items][0]+"_"+j).addClass("product-footer_isHidden");
					}
					$("#pf-"+i).removeClass("product-footer_isHidden");
                }

                
                if (crt.hasClass("cart-items-final")) {
                    n += '' +
                    '<li class="cart-item">'+
					'	<div class="cart-item__image" style="background-image:url(' + cartData[items][7] + ');"></div>'+
					'	<div class="cart-item-title">'+
					'		<p>' + cartData[items][2] + '</p>'+
					'		<p class="cart-item__subtitle">' + cartData[items][6] + ' &nbsp;&nbsp;|&nbsp; ' + price + '&nbsp;₽/шт</p>'+
					'	</div>'+
					'	<div class="cart-item-btn">'+
					'		<button class="btn btn-sm n-cart-minus" data-id="' + i + '"><span>–</span></button>'+
					'		<input class="i-count i-count-sm" id="m-count-' + i + '" value="' + c + '" type="text" disabled value="2" maxlength="3">'+
					'		<button class="btn btn-sm n-cart-plus" data-id="' + i + '"><span>+</span></button>'+
					'	</div>'+
					'	<div class="cart-item__price"><p>' + c * price + '&nbsp;₽</p></div>'+
					'	<div class="cart-item-remove">'+
					'		<div class="btn-remove n-cart-rm" data-id="' + i + '"></div>'+
					'	</div>'+
					'</li>';
                } else {
                    n += '' +
                    '<li class="m-cart-item">'+
					'	<div class="m-cart-item__title"><p>' + cartData[items][2] + '</p></div>'+
					'	<div class="m-cart-item-btn">'+
					'		<button class="btn btn-sm n-cart-minus" data-id="' + i + '"><span>–</span></button>'+
					'		<input class="i-count i-count-sm" id="m-count-' + i + '" value="' + c + '" type="text" disabled maxlength="3">'+
					'		<button class="btn btn-sm n-cart-plus" data-id="' + i + '"><span>+</span></button>'+
					'	</div>'+
					'	<div class="m-cart-item__price"><p>' + price + '&nbsp;₽</p></div>'+
					'	<div class="m-cart-item-remove">'+
					'		<div class="btn-remove n-cart-rm" data-id="' + i + '"></div>'+
					'	</div>'+
					'</li>';
                }

                
            } else {
                $("#pf-" + items).removeClass("footer_isAdded");
            }
        }

        for (var it in arr){
        	$("#p-" + arr[it]).addClass("product_isAdded");
        }
        

        // подставляем суммы
        if ($("#js-header-total") != null) {
            var s = $("#js-header-total").html();
            $("#js-header-total").animate({
                num: total - 6 // - начало
            }, {
                duration: 250,
                step: function(num) {
                    this.innerHTML = (num + 6).toFixed(0)
                }
            });
        }

        crt.html(n);
        if (crt.hasClass("cart-items-final")) {
        	cartExtras_resize();
    	}


        $(".header-cart-button__counter p").html(count);
        $(".js-cart-total").each(function(){$(this).html(total)});;
        cartTotal = total;
        calculateTotal();
        

        if (total == 0) {
            $(".m-cart__empty").addClass("m-cart__empty_isActive");
            $(".m-cart-total").addClass("m-cart-total_isHidden");
            $(".js-cart-items").css("display","none");
            $(".header-cart-button__counter").removeClass("header-cart-button__counter_isActive");
            $(".cart-form").css("display","none");
            $(".cart-order__empty").css("display","block");
            

        } else {
            $(".m-cart__empty").removeClass("m-cart__empty_isActive");
            $(".m-cart-total").removeClass("m-cart-total_isHidden");
            $(".js-cart-items").css("display","block");
            $(".header-cart-button__counter").addClass("header-cart-button__counter_isActive");
            $(".cart-form").css("display","block");
            $(".cart-order__empty").css("display","none");

            $('.n-cart-plus').on('click', plusToCart);
            $('.n-cart-minus').on('click', minusToCart);
            $('.n-cart-rm').on('click', removeFromCart);
    	}     
	}
}

function calculateTotal(){
	var type = $('input[type=radio][name=f-deliv]:checked').val();
	var deliv = 0;
	var final_sum = parseInt(cartTotal);
	switch (type){
		case '0':
			$("#js-form-deliv-discount").css("display","none");
			if (parseInt(cartTotal) > 400){
				$("#js-form-deliv-free").css("display","inline");
				$("#js-form-deliv-sum").css("display","none");
			}else{
				$("#js-form-deliv-free").css("display","none");
				$("#js-form-deliv-sum").html("50&nbsp;₽");
				deliv = 50;
				$("#js-form-deliv-sum").css("display","inline");
			}
			break;
		case '1':
			$("#js-form-deliv-discount").css("display","none");
			$("#js-form-deliv-free").css("display","none");
			deliv = $("#f-deliv-area option:selected").data("price");
			$("#js-form-deliv-sum").html(deliv + "&nbsp;₽");
			$("#js-form-deliv-sum").css("display","inline");
			break;
		case '2':
			if (isHappyHour){
				$("#js-form-deliv-discount").css("display","none");
				$("#js-form-deliv-free").css("display","inline");
				$("#js-form-deliv-sum").css("display","none");
			}else{
				$("#js-form-deliv-discount").css("display","inline");
				$("#js-form-deliv-free").css("display","none");
				$("#js-form-deliv-sum").css("display","none");
				deliv = -1;
			}
			break;
	}
	if (deliv == -1){
		final_sum *= 0.9;
	}else{
		final_sum += parseInt(deliv);
	}
	$("#js-final-sum").html(final_sum.toFixed(2));
	$("#f-cash").val(final_sum.toFixed(0));
	$("#form-total-info").css("display", "block");
}

/* пересчиываем стоимость при изменении доставки */
$('input[type=radio][name=f-deliv]').change(calculateTotal);
$('select[name=f-deliv-area]').change(calculateTotal);

function changeProductType(){
	var gid = $('input[type=radio][name='+$(this).attr("name")+']:checked').data('gid');
	var id = $('input[type=radio][name='+$(this).attr("name")+']:checked').val();
	for(var i = 0; i<3; i++){
		$("#pf-"+gid+"_"+i).removeClass("product-footer_isHidden");
		var x = parseInt(id);
		if (i != x){
			$("#pf-"+gid+"_"+i).addClass("product-footer_isHidden");
		}
	}
}

/* Добавляем товар в корзину */
$('.js-cart-add').on('click', addToCart);
$('.js-cart-plus').on('click', plusToCart);
$('.js-cart-minus').on('click', minusToCart);
$('.js-cart-rm').on('click', removeFromCart);
$('.js-pt-change').on('change', changeProductType);



/* Очистить корзину */
function clearCart() {
    var cartData = getCartData();

    if (cartData !== null) {
        for (var items in cartData) {
            cartData[items][3] = 0;
        }
        setCartData(cartData);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////