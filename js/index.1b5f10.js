(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=768){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},f=function(e){return e.target.closest("a")},p=function(t){var r=t.relatedTarget;r&&f(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=f(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=f(r);c(n)&&(n.addEventListener("mouseout",p,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/santahat-388.png':'images/santahat-194.png');
var a='data-src';var e=document.querySelector('.js3 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0074-1000.jpg':'images/dji_0074-500.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0127-1000.jpg':'images/dji_0127-500.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0079-1000.jpg':'images/dji_0079-500.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0088-1000.jpg':'images/dji_0088-500.jpg');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/arrow-192.png':'images/arrow-96.png');
var e=document.querySelector('.js5');e.setAttribute('src',(dpi>1)?'images/w_thumb-184.jpg':'images/w_thumb-92.jpg');
var e=document.querySelector('.js6');e.setAttribute('src',(dpi>1)?'images/flickr_logo-366.png':'images/flickr_logo-183.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/w_thumb-160.jpg':'images/w_thumb-80.jpg');}else if($(window).width()>=768){var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/santahat-312.png':'images/santahat-156.png');
var a='data-src';var e=document.querySelector('.js3 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0074-800.jpg':'images/dji_0074-400.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0127-800.jpg':'images/dji_0127-400.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0079-800.jpg':'images/dji_0079-400.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0088-800.jpg':'images/dji_0088-400.jpg');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/arrow-154.png':'images/arrow-77.png');
var e=document.querySelector('.js5');e.setAttribute('src',(dpi>1)?'images/w_thumb-148.jpg':'images/w_thumb-74.jpg');
var e=document.querySelector('.js6');e.setAttribute('src',(dpi>1)?'images/flickr_logo-292.png':'images/flickr_logo-146.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/w_thumb-128.jpg':'images/w_thumb-64.jpg');}else{var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/santahat-128.png':'images/santahat-64.png');
var a='data-src';var e=document.querySelector('.js3 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0074-334.jpg':'images/dji_0074-167.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0127-334.jpg':'images/dji_0127-167.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0079-334.jpg':'images/dji_0079-167.jpg');
var a='data-src';var e=document.querySelector('.js3 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0088-334.jpg':'images/dji_0088-167.jpg');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/arrow-64.png':'images/arrow-32.png');
var e=document.querySelector('.js5');e.setAttribute('src',(dpi>1)?'images/w_thumb-60.jpg':'images/w_thumb-30.jpg');
var e=document.querySelector('.js6');e.setAttribute('src',(dpi>1)?'images/flickr_logo-122.png':'images/flickr_logo-61.png');
var a='data-src';var e=document.querySelector('.js7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/w_thumb-52.jpg':'images/w_thumb-26.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js3 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 3050});ldsrc('.js7');ldsrcset('.js22 source');var cs=new ConsentBanner('privacy-policy.html', undefined, 0);cs.start(1);wl=new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});