var bkplayer;function VideoBackground(o,e){var i=function(){var o=$(window).data("vbk");$("body").prepend('<div id="vbk_mask" style="z-index:-99998;top:0px;left:0px;bottom:0px;right:0px;overflow:hidden;"></div>'),$("#vbk_mask").css("position",o.fixed?"fixed":"absolute")},t=function(){var o,e,i=$(window).data("vbk"),t=void 0!==i.width?i.width:$("#vbk").width(),d=void 0!==i.height?i.height:$("#vbk").height(),a=$(window).width(),n=$(window).height(),r=t/d;a/n>r?e=(o=a)/r:o=(e=n)*r,i.zoom&&(o*=1.2,e*=1.2);var p=(a-o)/2,l=(n-e)/2;$("#vbk_cont").width(a),$("#vbk_cont").height(n),$("#vbk_cont").css({top:0,left:0}),$("#vbk_mask").width(a),$("#vbk_mask").height(n),$("#vbk").width(o),$("#vbk").height(e),$("#vbk").css({marginTop:l,marginLeft:p})},d=function(){$("#vbk_cont").show(),$("#vbk").show()},a={};return-1!=o.indexOf("youtube.com/")?(a.id=o.slice(o.indexOf("embed")+6),a.zoom=1,a.addVideoBackground=function(){$(window).data("vbk");i(),$("#vbk_cont").append('<div id="vbk" style="display:none;"></div>'),loadyt(function(){var o=$(window).data("vbk"),e=window.location;bkplayer=new YT.Player("vbk",{videoId:o.id,playerVars:{autohide:1,autoplay:1,disablekb:1,playsinline:1,cc_load_policy:0,controls:0,enablejsapi:1,fs:0,modestbranding:3,origin:e.origin||e.protocol+"//"+e.hostname,iv_load_policy:3,showinfo:0,rel:0,wmode:"opaque",hd:0},events:{onReady:function(o){var e=$(window).data("vbk");t(),d(),e.audio||bkplayer.mute(),bkplayer.playVideo()},onStateChange:function(o){o.data===YT.PlayerState.ENDED&&($(window).data("vbk").loop&&bkplayer.playVideo())},onError:function(o){throw o}}})})}):-1!=o.indexOf("vimeo.com/")?(a.id=o.slice(o.indexOf("vimeo.com/video/")+16),a.addVideoBackground=function(){var o=$(window).data("vbk");i(),$("#vbk_cont").append('<iframe id="vbk" style="top:-9999px;" src="https://player.vimeo.com/video/'+o.id+"?background=1&title=0&byline=0&portrait=0&playbar=0&loop="+o.loop+"&muted="+!o.audio+'&autoplay=1"></iframe>'),o.insertJS("https://player.vimeo.com/api/player.js",function(){var e=$("#vbk")[0];bkplayer=new Vimeo.Player(e),Promise.all([bkplayer.getVideoWidth(),bkplayer.getVideoHeight()]).then(function(e){o.width=e[0],o.height=e[1],t(),d(),bkplayer.play()})})}):a.addVideoBackground=function(){var o=$(window).data("vbk");$("#vbk_cont").append('<video style="display:none;" id="vbk"'+(o.loop?" loop":"")+(o.audio?"":" muted")+' autoplay playsinline src="'+o.url+'" type="video/mp4"></video>'),(bkplayer=$("#vbk")).on("canplay",function(){$(window).data("vbk");t(),d()}),bkplayer.on("error",function(o){throw o})},a.insertJS=function(o,e){var i=document.createElement("script");e&&(i.readyState?i.onreadystatechange=function(){"loaded"!==i.readyState&&"complete"!==i.readyState||(i.onreadystatechange=null,e())}:i.onload=e),i.src=o;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(i,t)},a.url=o,a.fixed=0!=e.fixed,a.loop=void 0===e.loop||0!=e.loop,a.audio=void 0!==e.audio&&0!=e.audio,a.poster=e.poster,a.width=e.width,a.height=e.height,$(window).data("vbk",a),function(){var o=$(window).data("vbk");$("body").prepend('<div id="vbk_cont" style="z-index:-99999;top:0px;left:0px;bottom:0px;right:0px;overflow:hidden;display:none;"></div>'),$("#vbk_cont").css("position",o.fixed?"fixed":"absolute"),o.poster&&($("#vbk_cont").css("background-image","url("+o.poster+")"),$("#vbk_cont").css("background-size","cover"),$("#vbk_cont").width($(window).width()),$("#vbk_cont").height($(window).height()))}(),$(window).resize(t),a}
