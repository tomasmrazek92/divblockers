"use strict";(()=>{$(document).ready(function(){gsap.registerPlugin(MotionPathPlugin);function g(e,t){let o="edit";t?e.addClass(o):e.removeClass(o)}function v(e,t){$(e).on("click",function(){g(e,!1),t()})}function D(){$("[dark-menu-section]").each(function(){let e=gsap.timeline({scrollTrigger:{trigger:$(this),start:"top 36px",end:"bottom 36px",onEnter:()=>{let t=$(".hero_top");t.hasClass("cc-dark")||t.addClass("cc-dark")},onEnterBack:()=>{let t=$(".hero_top");t.hasClass("cc-dark")||t.addClass("cc-dark")},onLeaveBack:()=>{$(".hero_top").removeClass("cc-dark")},onLeave:()=>{$(".hero_top").removeClass("cc-dark")}}})})}D();let A=document.querySelectorAll(".btn_wrap");function h(e,t,o){return e+(t-e)*o}function b(e,t,o){let n=Date.now(),a=(n-o)/t,s;a<.3282275711?s=h(0,0,a/.3282275711):a<.5?s=h(0,180,(a-.3282275711)/(.5-.3282275711)):a<.8282275711?s=180:a<=1?s=h(180,360,(a-.8282275711)/(1-.8282275711)):(s=360,o=n),e.style.setProperty("--r2",`${s}deg`),a<=1?requestAnimationFrame(()=>b(e,t,o)):requestAnimationFrame(()=>b(e,t,Date.now()))}function w(e,t,o){let n=Date.now(),a=(n-o)/t,s;a<.3282275711?s=h(10,90,a/.3282275711):a<.5?s=90:a<.8282275711?s=h(90,10,(a-.5)/(.8282275711-.5)):a<=1?s=10:(s=10,o=n),e.style.setProperty("--x",`${s}%`),a<=1?requestAnimationFrame(()=>w(e,t,o)):requestAnimationFrame(()=>w(e,t,Date.now()))}A.forEach(e=>{b(e,3e3,Date.now()),w(e,3e3,Date.now())});function O(e){$(".sidebar_trigger").trigger("click"),gsap.fromTo($(".sidebar_success"),{y:"-8rem"},{y:"0",display:"flex"}),setTimeout(()=>{$(".sidebar_success").fadeOut()},8e3)}$("select").niceSelect(),$(".nice-select li").on("click",function(){$(".nice-select .current").css("color","white")}),document.getElementById("wf-form-get-in-touch-form").addEventListener("submit",O);let x=$(".form_input");x.hover(function(){$(this).siblings().addClass("active")},function(){$(this).is(":focus")||$(this).siblings().removeClass("active")}),x.on("focus",function(){$(this).siblings().addClass("active")}),x.on("blur",function(){$(this).siblings().removeClass("active")});function L(){let e;$(".sidebar_email").click(function(){var t=$(this).text();let o=$(".sidebar_label").text();P(t),clearTimeout(e),$(".sidebar_label").text("Copied to clipboard"),$(".sidebar_label").parent(".opacity-60").css("opacity","1"),$(".sidebar_label").css("color","#0084ff"),e=setTimeout(()=>{$(".sidebar_label").text(o),$(".sidebar_label").parent(".opacity-60").css("opacity","0.6"),$(".sidebar_label").css("color","inherit")},2e3)}),$("#copyEmailFooter").click(function(){var t="team@divblockers.com";P(t),clearTimeout(e),$(this).find(".meta-text").text("Copied to clipboard"),e=setTimeout(()=>{$(this).find(".meta-text").text("Email")},2e3)})}function P(e){var t=$("<textarea>");t.val(e).css({position:"absolute",left:"-9999px",top:"0",readonly:!0}),$("body").append(t),t.select(),document.execCommand("copy"),t.remove()}L();function C(){let e=gsap.timeline();return e.fromTo(".hero_heading",{y:"10%",opacity:0},{y:"0%",opacity:1,duration:.3,ease:"power1.inOut"},"+=0.2"),e.to("[data-hide-default]",{opacity:1}),e.set(".preloader",{display:"none"}),e.set(["html","body"],{height:"auto",overflow:"visible"}),e}function F(){gsap.registerPlugin(SplitText,CustomEase),CustomEase.create("primary","0.57, 0, 0.08, 1"),gsap.defaults({ease:"primary"}),gsap.set(".preloader",{display:"flex"}),gsap.set(["html","body"],{height:"100vh",overflow:"hidden"}),gsap.set("[data-hide-default]",{opacity:0});function e(){$(".preloader_img").not("[data-no-move]").each(function(){let a=Math.random()*10+50;gsap.to($(this),{y:`-${a}vh`,duration:10,ease:"linear"})})}let t=0;function o(){let i=["We are","Webflow","Studio"];if(t<i.length){let a=document.querySelector(".preloader_text");a.textContent=i[t],t===0&&n(-1);let s=gsap.timeline({delay:.5,onComplete:()=>{t=t+1,o()}});s.fromTo(a,{y:"10%",opacity:0},{y:"0%",opacity:1,duration:.8,ease:"power2.inOut"}),t<i.length-1&&s.to(a,{y:"-10%",opacity:0,duration:.4,ease:"power2.inOut",onStart:()=>{n(t)}},"+=0.2")}else setTimeout(()=>{n(t+2)},300),setTimeout(()=>{let a=gsap.timeline();a.to(".preloader_text",{y:"10%",opacity:0,duration:.3,ease:"power1.inOut"}),a.add(C())},600)}function n(i){gsap.to(".preloader_col:first-child",{y:`-${(i+1)*100}vh`,duration:2}),gsap.to(".preloader_col:last-child",{y:`-${(i+1)*100}vh`,duration:2})}o(),e()}"scrollRestoration"in history&&(history.scrollRestoration="manual"),$(window).on("unload",function(){$("body").css("opacity","0"),$(window).scrollTop(0)});let R=sessionStorage.getItem("loaderState")==="true";window.scrollTo(0,0),$(".page-wrapper").css("opacity","1"),R?C():(F(),sessionStorage.setItem("loaderState","true")),$(document).ready(function(){var e=$(document.body),t=0,o=!1,n="";function i(){o?s():a()}function a(){var u=e.innerWidth();t=window.pageYOffset,e.css({overflow:"hidden",position:"fixed",top:`-${t}px`,width:u}),o=!0}function s(){e.css({overflow:"",position:"",top:"",width:""}),$(window).scrollTop(t),o=!1}$('[scroll="toggle"]').on("click",i);let r=[991,767,479],c=window.innerWidth;function p(u){o&&s()}function m(){let u=window.innerWidth;r.forEach(d=>{(c<=d&&u>d||c>=d&&u<d)&&p(d)}),c=u}window.addEventListener("resize",m)}),gsap.registerPlugin(ScrollTrigger),ScrollTrigger.matchMedia({"(min-width: 768px)":function(){let e=gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"310 bottom",toggleActions:"play none none reverse"}});e.set($(".btn_wrap.is-nav"),{display:"block"}),e.set([$(".hero_col.full,.hero_team-meta")],{pointerEvents:"none"}),e.set($(".hero_team-meta"),{display:"none"}),e.fromTo($(".btn_wrap.is-nav"),{opacity:0},{opacity:1})}});function W(){function e(o){let n=$(o),i=[.2,1,.8,.6,.4,.3,.2],a=7,s=.4,r=gsap.timeline({repeat:-1,repeatDelay:0,onStart:()=>c(.2,n),onRepeat:()=>c(.2,n)});function c(m,u){for(let d=1;d<=a;d++)gsap.set($(u).find(`#path-${d}`),{opacity:m})}function p(m){for(let u=1;u<=a;u++){let d=(a-u)*.1;for(let l=0;l<i.length;l++)r.to($(m).find(`#path-${u}`),{opacity:i[l],duration:s,ease:"none"},d+l*s)}}return p(n),r}function t(o){let n=$(o);gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);let i={repeat:-1,repeatDelay:1,ease:"power1.inOut",motionPath:{autoRotate:!0,alignOrigin:[.5,.5]}};function a(r){return r.includes("-")?parseInt(r.split("-")[1],10)*5:0}let s=gsap.timeline();["1","2","3","4","5","6","7"].forEach(r=>{let c=a(r),p=$(n).find(`#line-visual-${r}`).get(0),m=$(n).find(`#path-${r}`).get(0);if(!p||!m){console.error("GSAP target not found:",p?`#path-${r}`:`#line-visual-${r}`);return}s.to(p,{...i,delay:c,duration:gsap.utils.random(5,10),motionPath:{...i.motionPath,path:$(n).find(`#path-${r}`).get(0),align:$(n).find(`#path-${r}`).get(0)}},"<")})}$('[data-animation="lines"]').each(function(){e($(this)),t($(this))})}function M(){let e=$(".hero-wrap_heading h1"),t=$(".hero-wrap_par"),o=$("[data-hero-ui]"),n=$(".hero-wrap_lines");gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"100px bottom",end:"bottom bottom",scrub:1,invalidateOnRefresh:!0}}).to(e,{y:()=>t.outerHeight()/2,keyframes:{"20%":{opacity:.15,filter:"blur(10px)"},"90%":{opacity:0}}}),gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"300 bottom",invalidateOnRefresh:!0,toggleActions:"play none none reverse"}}).to([t,n,o],{opacity:0,duration:.5},"<")}function X(){gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"20px bottom",end:"40px bottom",scrub:1,invalidateOnRefresh:!0}}).to([".hero_btn-box",".hero_notification"],{opacity:0})}function z(){let e=$(".hero-wrap_heading").find("._wf-ui_label"),t=$(".hero-wrap_heading h1");$("._wf-ui-colors-block").on("click",function(){let o=$(this).css("background-color");g(e,!0),t.css("color",o),$("html").css("--wf-ui--lines",o)}),v(e,()=>{t.css("color","inherit"),$("html").css("--wf-ui--lines","var(--color--main)")})}function H(){var{DateTime:e}=luxon;function t(){var o=e.local(),n=o.setZone("Europe/Paris").toFormat("hh:mm a");$("[data-real-time]").text(n+" CET")}t(),setInterval(t,1e3)}function j(){let e=0;$("[data-hero-brand]").on("click",function(){let t=["Just homepage, sry..","Definitely not SVG","Web Dev Bois","superheroes","friends","running out of ideas","check the projects pls","stop now","for real?","one more","maybe one more","DivBlockers"];$(this).text(t[e]),e=(e+1)%t.length})}function G(){tippy("[data-tippy-content]",{content(e){return e.getAttribute("data-tippy-content")},animation:"shift-toward",theme:"translucent"})}M(),X(),z(),H(),j(),G(),W();function N(){let e=gsap.timeline({paused:!0,defaults:{ease:"power3.inOut"}});e.fromTo($(".modular-chip"),{xPercent:-100,yPercent:100},{xPercent:0,yPercent:0,opacity:1,stagger:.1}),$(".work_item-block.modular").hover(function(){e.play()},function(){e.reverse()})}function Y(){let e=gsap.timeline({paused:!0,defaults:{ease:"power2.inOut"}});e.to($(".tiny-person._1"),{xPercent:100,duration:1}),e.to($(".tiny-person._2"),{xPercent:-100,duration:1},"<0.2");let t=gsap.timeline({paused:!0,repeat:-1,yoyo:!0,ease:"power3.inOut"});t.to($(".tiny-person._1"),{rotate:3,duration:2}),t.to($(".tiny-person._2"),{rotate:-3,duration:2},"<"),$(".work_item-block.tiny").hover(function(){e.play(),t.play(),$(this).addClass("animation-play")},function(){e.reverse(),$(this).removeClass("animation-play")})}function J(){$(".work_item-block.docusign").hover(function(){let e=$(this).find("video")[0];e.paused&&e.play()},function(){let e=$(this).find("video")[0];e.played&&e.pause()})}function Q(){let e=gsap.timeline({paused:!0,defaults:{ease:"power3.out"}});e.from($(".vsco-card"),{yPercent:30,opacity:0,stagger:.15,duration:1}),$(".work_item-block.vsco").hover(function(){e.play()},function(){e.reverse()})}function U(){for(var e=document.getElementsByClassName("pixel"),t=0;t<e.length;t++)e[t].style.animationDelay=Math.ceil(Math.random()*5e3)+"ms";setTimeout(function(){for(var o=0;o<e.length;o++)e[o].classList.add("paused")},4e3)}function Z(){let e=$(".together-logo"),t=$(".together-ball"),o=$(".together-text-1"),n=$(".together-text-2"),i=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});i.to(e,{opacity:0,duration:.3}),i.to(t,{y:"0%",width:"65%",duration:.8},"<"),i.fromTo(o,{xPercent:-15},{xPercent:0,opacity:1},"<0.3"),i.fromTo(n,{xPercent:15},{xPercent:0,opacity:1,stagger:.2},"<.02"),$(".work_item-block.together").hover(function(){i.play()},function(){i.reverse()})}function K(){let e=$(".polywork-shape"),t=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});t.fromTo(e.eq(0),{rotate:"-15deg",xPercent:5,scale:.8},{rotate:"0",xPercent:0,scale:1}),t.fromTo(e.eq(1),{rotate:"15deg",scale:.8},{rotate:"0",scale:1},"<"),t.fromTo(e.eq(2),{scale:0},{scale:1},"<"),$(".work_item-block.polywork").hover(function(){t.play()},function(){t.reverse()})}function ee(){var e=$(".work_item-block.atoms").find("video")[0];$(".work_item-block.atoms").on("mouseenter",function(){e.playbackRate=1,e.play()}),$(".work_item-block.atoms").on("mouseleave",function(){e.playBackwards()}),HTMLVideoElement.prototype.playBackwards=function(){this.pause();var t=this,o=25,n=setInterval(function(){t.currentTime===0?(clearInterval(n),t.pause()):t.currentTime+=-(1.5/o)},1e3/o)}}function te(){let e=$(".modernlife_bg-base"),t=$(".modernlife_bg-inner"),o=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});o.to(e,{scale:.4,xPercent:19,yPercent:-22}),o.to(t,{scale:.4,xPercent:18,yPercent:-21.5},"<"),$(".work_item-block.modernlife").hover(function(){o.play()},function(){o.reverse()})}function oe(){let e=0,t={keyframes:{"50%":{opacity:1}}},o=.7,n=.15,i=$(".cache_box"),a=$(".cache_avatar"),s=[1,4,0,3,2],r=$($.map(s,l=>i[l]));CustomBounce.create("boxBounce",{strength:.25,squash:10}),CustomBounce.create("mainBounce",{strength:.3,squash:.3});let c=gsap.timeline({paused:!0});c.fromTo(r,{opacity:0,y:"-30em"},{...t,y:"0",stagger:n,ease:"boxBounce",duration:o}).to(r,{yPercent:-50,rotate:8,duration:o,stagger:n,ease:"boxBounce-squash"},0).to(r.eq(4),{rotate:23},"-=0.3");function p(){let l=gsap.timeline();return l.fromTo(a,{opacity:0,scale:.5},{...t,scale:1,xPercent:-90,duration:.2}).to(a,{duration:.001,onStart:()=>a.css("z-index",1),onReverseComplete:()=>a.css("z-index",1),onComplete:()=>a.css("z-index",5)}).to(a,{xPercent:0}),l}function m(){let l=gsap.timeline({onReverseComplete:u});return l.add(p()),l}function u(){let l=$(".cache_avatar img");l.hide(),e=(e+1)%l.length,l.eq(e).show()}let d=gsap.timeline({paused:!0});d.add(m()),$(".work_item-block.cache").hover(function(){c.play(),d.play()},function(){c.reverse(),d.reverse()})}Y(),N(),J(),Q(),U(),Z(),K(),ee(),te(),oe();let ae=["Prague","New York","San Francisco","London","Chicago","Vienna","Amsterdam","Los Angeles"],ne=["playing Playstation","heavy lifting","bing-watching","snowboarding","cutting boxes in VR","thai boxing","road cycling","beachballing"];function S(e,t){gsap.registerPlugin(TextPlugin);let o=0,n=$(e),i=$(e).find("#reveal-top"),a=$(e).find("#reveal-bot");function s(r){let c=t[o];a.text(c);let p=a.width();gsap.to(n,{width:`${p}px`}),gsap.timeline({onComplete:()=>{setTimeout(u,2e3)}}).to(a,{y:"-100%",duration:.5}).to(i,{y:"-100%",duration:.5},"<");function u(){gsap.set([a,i],{y:"0%"}),i.text(c),a.text(""),o=(o+1)%t.length,s()}}s(e)}S($("#clientsLoc"),ae),S($("#hobbies"),ne);function _(e){let{activeIndex:t,slides:o}=e,n=o[t],i=$(n).attr("data-quote"),a=$(n).attr("data-name"),s=$(n).attr("data-role"),r=$("[quote-el]"),c=$("[quote-text]"),p=$("[quote-name]"),m=$("[quote-role]");gsap.to(r,{duration:.3,yPercent:10,opacity:0,onComplete:()=>{gsap.set(c,{text:{value:i},onComplete:()=>{gsap.to(r,{height:()=>c.outerHeight(),yPercent:0,opacity:1,duration:.3})}})}}),gsap.to(p,{duration:1,scrambleText:{text:a,chars:"jompaWB!^",delimiter:" "}}),gsap.to(m,{duration:1,scrambleText:{text:s,chars:"jompaWB!^"}}),$(window).on("resize",function(){r.attr("style",""),e.slideTo(3)})}let ie=new Swiper(".testimonials_slider",{on:{init:function(){_(this)}},observer:!0,slideToClickedSlide:!0,breakpoints:{0:{direction:"horizontal",slidesPerView:1,spaceBetween:16,initialSlide:0,threshold:10,freeMode:{enabled:!1}},992:{direction:"vertical",slidesPerView:1,spaceBetween:0,initialSlide:3,threshold:40,freeMode:{enabled:!0,sticky:!0},mousewheel:{enabled:!0,thresholdDelta:20}}},on:{init:function(){(()=>{window.innerWidth<992?this.params.initialSlide=0:this.params.initialSlide=3})(),this.update(),_(this)}}}),E;ie.on("slideChange",function(){clearTimeout(E),E=setTimeout(()=>{_(this)},300)});function se(e){e.forEach(t=>{let o=$(t.element+" ._wf-spacer-input"),n=o,i=$(t.element+" ._wf-draggable"),a=o.val(),s=parseFloat(t.minVal),r=parseFloat(t.maxVal),c=parseFloat(t.step),{type:p}=t,m=!1,u=$(t.element).find("._wf-ui_label");v(u,()=>{o.val(a),t.updateVariable(a)});function d(l){t.updateVariable(l),u&&g(u,!0)}p==="drag"?i.on("mousedown touchstart",function(l){m=!0;let y=l.type==="touchstart"?l.touches[0].clientX:l.clientX,re=parseFloat(n.val())||0;$(document).on("mousemove touchmove",function(T){if(m){let ce=(T.type==="touchmove"?T.touches[0].clientX:T.clientX)-y,f=re+ce*c;f=Math.max(s,Math.min(r,f)),f=parseFloat(f.toFixed(1)),n.val(f),t.updateVariable&&d(f)}}),$(document).on("mouseup touchend",function(){m=!1,$(document).off("mousemove touchmove"),$(document).off("mouseup touchend")}),l.preventDefault()}):p==="input"&&(o.on("keydown",function(l){let y=parseInt($(this).val())||0;l.which===38||l.which===104?$(this).val(y+1).trigger("change"):(l.which===40||l.which===98)&&$(this).val(y-1).trigger("change")}),o.on("change",function(){let l=$(this).val();d(l)}))})}let le=[{element:".ui-divider",type:"drag",minVal:"0",maxVal:"40",step:"0.1",updateVariable:e=>{document.documentElement.style.setProperty("--duo-padding",e+"vw")}},{element:".ui-opacity",type:"input",minVal:"0",maxVal:"100",step:"1",updateVariable:e=>{document.documentElement.style.setProperty("--duo-opacity",e/100)}}],k=$(".duo_person._2"),I=k.attr("class"),B=$(".ui-display ._wf-box_inner"),V=$(".ui-display ._wf-ui_label");function q(e){B.removeClass("active"),B.eq(e).addClass("active")}$(".ui-display ._wf-box_inner").on("click",function(){let e=$(this).attr("data-display");k.attr("class",I).addClass(e),e==="hidden"?$(".duo_person._1").addClass(e):$(".duo_person._1").removeClass("hidden"),q($(this).index()),g(V,!0)}),v(V,()=>{k.attr("class",I),$(".duo_person._1").removeClass("hidden"),q(0)}),se(le),$(".divblockers").each(function(){let e=gsap.timeline({paused:!0,defaults:{ease:"power4.out",duration:.4}}),t=$("[divblockers-wrap]").find(".about_list-line"),o=$("[divblockers-wrap]").find(".div-block_label");e.to(o,{yPercent:-100}),e.to(t,{scale:1},"<"),$(this).hover(()=>{e.play()},()=>{e.reverse()})}),$("._4-pixels-off").each(function(){$(this).on("mouseenter",function(){let e=gsap.timeline();e.to($(this),{y:"4px",ease:"power2.out",duration:.3}),e.to($(this),{rotate:"6deg",ease:"bounce.out"},"-=0.1")})}),$(".no-code_trigger").each(function(){let e=[],t=document.querySelectorAll(".no-code_icon");function o(n,i){let a=gsap.utils.random(-50,50),s=gsap.utils.random(-50,50);gsap.set(n,{opacity:0,x:a});let r=gsap.timeline({delay:.625*i,repeat:-1,repeatDelay:.5*t.length,paused:!0});return r.to(n,{motionPath:{path:[{x:a,y:0},{x:s,y:-100}],curviness:.5,autoRotate:!1},duration:2.5,keyframes:{"0%":{opacity:0},"25%":{opacity:1},"50%":{opacity:1},"100%":{opacity:0}},opacity:0,ease:"power1.out",onComplete:()=>{gsap.set(n,{x:0,y:0,opacity:0})}}),r}$(this).hover(()=>{e=gsap.utils.shuffle([...t]).map((i,a)=>{let s=o(i,a);return s.play(),s})},()=>{e.forEach((n,i)=>{n.kill(),gsap.set(t,{clearProps:"all"})}),e=[]})})});})();
