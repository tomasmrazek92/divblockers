"use strict";(()=>{$(document).ready(function(){gsap.registerPlugin(MotionPathPlugin);function g(e,t){let o="edit";t?e.addClass(o):e.removeClass(o)}function v(e,t){$(e).on("click",function(){g(e,!1),t()})}function D(){$("[dark-menu-section]").each(function(){let e=gsap.timeline({scrollTrigger:{trigger:$(this),start:"top 36px",end:"bottom 36px",onEnter:()=>{let t=$(".hero_top");t.hasClass("cc-dark")||t.addClass("cc-dark")},onEnterBack:()=>{let t=$(".hero_top");t.hasClass("cc-dark")||t.addClass("cc-dark")},onLeaveBack:()=>{$(".hero_top").removeClass("cc-dark")},onLeave:()=>{$(".hero_top").removeClass("cc-dark")}}})})}D();let A=document.querySelectorAll(".btn_wrap");function h(e,t,o){return e+(t-e)*o}function b(e,t,o){let n=Date.now(),a=(n-o)/t,r;a<.3282275711?r=h(0,0,a/.3282275711):a<.5?r=h(0,180,(a-.3282275711)/(.5-.3282275711)):a<.8282275711?r=180:a<=1?r=h(180,360,(a-.8282275711)/(1-.8282275711)):(r=360,o=n),e.style.setProperty("--r2",`${r}deg`),a<=1?requestAnimationFrame(()=>b(e,t,o)):requestAnimationFrame(()=>b(e,t,Date.now()))}function w(e,t,o){let n=Date.now(),a=(n-o)/t,r;a<.3282275711?r=h(10,90,a/.3282275711):a<.5?r=90:a<.8282275711?r=h(90,10,(a-.5)/(.8282275711-.5)):a<=1?r=10:(r=10,o=n),e.style.setProperty("--x",`${r}%`),a<=1?requestAnimationFrame(()=>w(e,t,o)):requestAnimationFrame(()=>w(e,t,Date.now()))}A.forEach(e=>{b(e,3e3,Date.now()),w(e,3e3,Date.now())});function O(e){$(".sidebar_trigger").trigger("click"),gsap.fromTo($(".sidebar_success"),{y:"-8rem"},{y:"0",display:"flex"}),setTimeout(()=>{$(".sidebar_success").fadeOut()},8e3)}$("select").niceSelect(),$(".nice-select li").on("click",function(){$(".nice-select .current").css("color","white")}),document.getElementById("wf-form-get-in-touch-form").addEventListener("submit",O);let x=$(".form_input");x.hover(function(){$(this).siblings().addClass("active")},function(){$(this).is(":focus")||$(this).siblings().removeClass("active")}),x.on("focus",function(){$(this).siblings().addClass("active")}),x.on("blur",function(){$(this).siblings().removeClass("active")});function L(){let e;$(".sidebar_email").click(function(){var t=$(this).text();let o=$(".sidebar_label").text();T(t),clearTimeout(e),$(".sidebar_label").text("Copied to clipboard"),$(".sidebar_label").parent(".opacity-60").css("opacity","1"),$(".sidebar_label").css("color","#0084ff"),e=setTimeout(()=>{$(".sidebar_label").text(o),$(".sidebar_label").parent(".opacity-60").css("opacity","0.6"),$(".sidebar_label").css("color","inherit")},2e3)}),$("#copyEmailFooter").click(function(){var t="team@divblockers.com";T(t),clearTimeout(e),$(this).find(".meta-text").text("Copied to clipboard"),e=setTimeout(()=>{$(this).find(".meta-text").text("Email")},2e3)})}function T(e){var t=$("<textarea>");t.val(e).css({position:"absolute",left:"-9999px",top:"0",readonly:!0}),$("body").append(t),t.select(),document.execCommand("copy"),t.remove()}L();function P(){let e=gsap.timeline();return e.fromTo(".hero_heading",{y:"10%",opacity:0},{y:"0%",opacity:1,duration:.3,ease:"power1.inOut"},"+=0.2"),e.to("[data-hide-default]",{opacity:1}),e.set(".preloader",{display:"none"}),e.set(["html","body"],{height:"auto",overflow:"visible"}),e}function F(){gsap.registerPlugin(SplitText,CustomEase),CustomEase.create("primary","0.57, 0, 0.08, 1"),gsap.defaults({ease:"primary"}),gsap.set(".preloader",{display:"flex"}),gsap.set(["html","body"],{height:"100vh",overflow:"hidden"}),gsap.set("[data-hide-default]",{opacity:0});function e(){$(".preloader_img").not("[data-no-move]").each(function(){let a=Math.random()*10+50;gsap.to($(this),{y:`-${a}vh`,duration:10,ease:"linear"})})}let t=0;function o(){let i=["We are","Webflow","Studio"];if(t<i.length){let a=document.querySelector(".preloader_text");a.textContent=i[t],t===0&&n(-1);let r=gsap.timeline({delay:.5,onComplete:()=>{t=t+1,o()}});r.fromTo(a,{y:"10%",opacity:0},{y:"0%",opacity:1,duration:.8,ease:"power2.inOut"}),t<i.length-1&&r.to(a,{y:"-10%",opacity:0,duration:.4,ease:"power2.inOut",onStart:()=>{n(t)}},"+=0.2")}else setTimeout(()=>{n(t+2)},300),setTimeout(()=>{let a=gsap.timeline();a.to(".preloader_text",{y:"10%",opacity:0,duration:.3,ease:"power1.inOut"}),a.add(P())},600)}function n(i){gsap.to(".preloader_col:first-child",{y:`-${(i+1)*100}vh`,duration:2}),gsap.to(".preloader_col:last-child",{y:`-${(i+1)*100}vh`,duration:2})}o(),e()}"scrollRestoration"in history&&(history.scrollRestoration="manual"),$(window).on("unload",function(){$("body").css("opacity","0"),$(window).scrollTop(0)});let R=sessionStorage.getItem("loaderState")==="true";window.scrollTo(0,0),$(".page-wrapper").css("opacity","1"),R?P():(F(),sessionStorage.setItem("loaderState","true")),$(document).ready(function(){var e=$(document.body),t=0,o=!1,n="";function i(){o?r():a()}function a(){var c=e.innerWidth();t=window.pageYOffset,e.css({overflow:"hidden",position:"fixed",top:`-${t}px`,width:c}),o=!0}function r(){e.css({overflow:"",position:"",top:"",width:""}),$(window).scrollTop(t),o=!1}$('[scroll="toggle"]').on("click",i);let l=[991,767,479],u=window.innerWidth;function p(c){o&&r()}function m(){let c=window.innerWidth;l.forEach(d=>{(u<=d&&c>d||u>=d&&c<d)&&p(d)}),u=c}window.addEventListener("resize",m)}),gsap.registerPlugin(ScrollTrigger),ScrollTrigger.matchMedia({"(min-width: 768px)":function(){let e=gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"310 bottom",toggleActions:"play none none reverse"}});e.set($(".btn_wrap.is-nav"),{display:"block"}),e.set([$(".hero_col.full,.hero_team-meta")],{pointerEvents:"none"}),e.set($(".hero_team-meta"),{display:"none"}),e.fromTo($(".btn_wrap.is-nav"),{opacity:0},{opacity:1})}});function W(){function e(o){let n=$(o),i=[.2,1,.8,.6,.4,.3,.2],a=7,r=.4,l=gsap.timeline({repeat:-1,repeatDelay:0,onStart:()=>u(.2,n),onRepeat:()=>u(.2,n)});function u(m,c){for(let d=1;d<=a;d++)gsap.set($(c).find(`#path-${d}`),{opacity:m})}function p(m){for(let c=1;c<=a;c++){let d=(a-c)*.1;for(let s=0;s<i.length;s++)l.to($(m).find(`#path-${c}`),{opacity:i[s],duration:r,ease:"none"},d+s*r)}}return p(n),l}function t(o){let n=$(o);gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);let i={repeat:-1,repeatDelay:1,ease:"power1.inOut",motionPath:{autoRotate:!0,alignOrigin:[.5,.5]}};function a(l){return l.includes("-")?parseInt(l.split("-")[1],10)*5:0}let r=gsap.timeline();["1","2","3","4","5","6","7"].forEach(l=>{let u=a(l),p=$(n).find(`#line-visual-${l}`).get(0),m=$(n).find(`#path-${l}`).get(0);if(!p||!m){console.error("GSAP target not found:",p?`#path-${l}`:`#line-visual-${l}`);return}r.to(p,{...i,delay:u,duration:gsap.utils.random(5,10),motionPath:{...i.motionPath,path:$(n).find(`#path-${l}`).get(0),align:$(n).find(`#path-${l}`).get(0)}},"<")})}$('[data-animation="lines"]').each(function(){e($(this)),t($(this))})}function M(){let e=$(".hero-wrap_heading h1"),t=$(".hero-wrap_par"),o=$("[data-hero-ui]"),n=$(".hero-wrap_lines");gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"100px bottom",end:"bottom bottom",scrub:1,invalidateOnRefresh:!0}}).to(e,{y:()=>t.outerHeight()/2,keyframes:{"20%":{opacity:.15,filter:"blur(10px)"},"90%":{opacity:0}}}),gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"300 bottom",invalidateOnRefresh:!0,toggleActions:"play none none reverse"}}).to([t,n,o],{opacity:0,duration:.5},"<")}function X(){gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"20px bottom",end:"40px bottom",scrub:1,invalidateOnRefresh:!0}}).to([".hero_btn-box",".hero_notification"],{opacity:0})}function z(){let e=$(".hero-wrap_heading").find("._wf-ui_label"),t=$(".hero-wrap_heading h1");$("._wf-ui-colors-block").on("click",function(){let o=$(this).css("background-color");g(e,!0),t.css("color",o),$("html").css("--wf-ui--lines",o)}),v(e,()=>{t.css("color","inherit"),$("html").css("--wf-ui--lines","var(--color--main)")})}function H(){var{DateTime:e}=luxon;function t(){var o=e.local(),n=o.setZone("Europe/Paris").toFormat("hh:mm a");$("[data-real-time]").text(n+" CET")}t(),setInterval(t,1e3)}function j(){let e=0;$("[data-hero-brand]").on("click",function(){let t=["Just homepage, sry..","Definitely not SVG","Web Dev Bois","superheroes","friends","running out of ideas","check the projects pls","stop now","for real?","one more","maybe one more","DivBlockers"];$(this).text(t[e]),e=(e+1)%t.length})}function G(){tippy("[data-tippy-content]",{content(e){return e.getAttribute("data-tippy-content")},animation:"shift-toward",theme:"translucent"})}M(),X(),z(),H(),j(),G(),W();function N(){let e=gsap.timeline({paused:!0,defaults:{ease:"power3.inOut"}});e.fromTo($(".modular-chip"),{xPercent:-100,yPercent:100},{xPercent:0,yPercent:0,opacity:1,stagger:.1}),$(".work_item-block.modular").hover(function(){e.play()},function(){e.reverse()})}function Y(){let e=gsap.timeline({paused:!0,defaults:{ease:"power2.inOut"}});e.to($(".tiny-person._1"),{xPercent:100,duration:1}),e.to($(".tiny-person._2"),{xPercent:-100,duration:1},"<0.2");let t=gsap.timeline({paused:!0,repeat:-1,yoyo:!0,ease:"power3.inOut"});t.to($(".tiny-person._1"),{rotate:3,duration:2}),t.to($(".tiny-person._2"),{rotate:-3,duration:2},"<"),$(".work_item-block.tiny").hover(function(){e.play(),t.play(),$(this).addClass("animation-play")},function(){e.reverse(),$(this).removeClass("animation-play")})}function J(){$(".work_item-block.docusign").hover(function(){let e=$(this).find("video")[0];e.paused&&e.play()},function(){let e=$(this).find("video")[0];e.played&&e.pause()})}function Q(){let e=gsap.timeline({paused:!0,defaults:{ease:"power3.out"}});e.from($(".vsco-card"),{yPercent:30,opacity:0,stagger:.15,duration:1}),$(".work_item-block.vsco").hover(function(){e.play()},function(){e.reverse()})}function U(){for(var e=document.getElementsByClassName("pixel"),t=0;t<e.length;t++)e[t].style.animationDelay=Math.ceil(Math.random()*5e3)+"ms";setTimeout(function(){for(var o=0;o<e.length;o++)e[o].classList.add("paused")},4e3)}function Z(){let e=$(".together-logo"),t=$(".together-ball"),o=$(".together-text-1"),n=$(".together-text-2"),i=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});i.to(e,{opacity:0,duration:.3}),i.to(t,{y:"0%",width:"65%",duration:.8},"<"),i.fromTo(o,{xPercent:-15},{xPercent:0,opacity:1},"<0.3"),i.fromTo(n,{xPercent:15},{xPercent:0,opacity:1,stagger:.2},"<.02"),$(".work_item-block.together").hover(function(){i.play()},function(){i.reverse()})}function K(){let e=$(".polywork-shape"),t=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});t.fromTo(e.eq(0),{rotate:"-15deg",xPercent:5,scale:.8},{rotate:"0",xPercent:0,scale:1}),t.fromTo(e.eq(1),{rotate:"15deg",scale:.8},{rotate:"0",scale:1},"<"),t.fromTo(e.eq(2),{scale:0},{scale:1},"<"),$(".work_item-block.polywork").hover(function(){t.play()},function(){t.reverse()})}function ee(){var e=$(".work_item-block.atoms").find("video")[0];$(".work_item-block.atoms").on("mouseenter",function(){e.playbackRate=1,e.play()}),$(".work_item-block.atoms").on("mouseleave",function(){e.playBackwards()}),HTMLVideoElement.prototype.playBackwards=function(){this.pause();var t=this,o=25,n=setInterval(function(){t.currentTime===0?(clearInterval(n),t.pause()):t.currentTime+=-(1.5/o)},1e3/o)}}function te(){let e=$(".modernlife_bg-base"),t=$(".modernlife_bg-inner"),o=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});o.to(e,{scale:.4,xPercent:19,yPercent:-22}),o.to(t,{scale:.4,xPercent:18,yPercent:-21.5},"<"),$(".work_item-block.modernlife").hover(function(){o.play()},function(){o.reverse()})}function oe(){let e=0,t={keyframes:{"50%":{opacity:1}}},o=.7,n=.15,i=$(".cache_box"),a=$(".cache_avatar"),r=[1,4,0,3,2],l=$($.map(r,s=>i[s]));CustomBounce.create("boxBounce",{strength:.25,squash:10}),CustomBounce.create("mainBounce",{strength:.3,squash:.3});let u=gsap.timeline({paused:!0});u.fromTo(l,{opacity:0,y:"-30em"},{...t,y:"0",stagger:n,ease:"boxBounce",duration:o}).to(l,{yPercent:-50,rotate:8,duration:o,stagger:n,ease:"boxBounce-squash"},0).to(l.eq(4),{rotate:23},"-=0.3");function p(){let s=gsap.timeline();return s.fromTo(a,{opacity:0,scale:.5},{...t,scale:1,xPercent:-90,duration:.2}).to(a,{duration:.001,onStart:()=>a.css("z-index",1),onReverseComplete:()=>a.css("z-index",1),onComplete:()=>a.css("z-index",5)}).to(a,{xPercent:0}),s}function m(){let s=gsap.timeline({onReverseComplete:c});return s.add(p()),s}function c(){let s=$(".cache_avatar img");s.hide(),e=(e+1)%s.length,s.eq(e).show()}let d=gsap.timeline({paused:!0});d.add(m()),$(".work_item-block.cache").hover(function(){u.play(),d.play()},function(){u.reverse(),d.reverse()})}Y(),N(),J(),Q(),U(),Z(),K(),ee(),te(),oe();let ae=["Prague","New York","San Francisco","London","Chicago","Vienna","Amsterdam","Los Angeles"],ne=["playing Playstation","heavy lifting","bing-watching","snowboarding","cutting boxes in VR","thai boxing","road cycling","beachballing"];function C(e,t){gsap.registerPlugin(TextPlugin);let o=0,n=$(e),i=$(e).find("#reveal-top"),a=$(e).find("#reveal-bot");function r(l){let u=t[o];a.text(u);let p=a.width();gsap.to(n,{width:`${p}px`}),gsap.timeline({onComplete:()=>{setTimeout(c,2e3)}}).to(a,{y:"-100%",duration:.5}).to(i,{y:"-100%",duration:.5},"<");function c(){gsap.set([a,i],{y:"0%"}),i.text(u),a.text(""),o=(o+1)%t.length,r()}}r(e)}C($("#clientsLoc"),ae),C($("#hobbies"),ne);function S(e){let{activeIndex:t,slides:o}=e,n=o[t],i=$(n).attr("data-quote"),a=$(n).attr("data-name"),r=$(n).attr("data-role"),l=$("[quote-el]"),u=$("[quote-text]"),p=$("[quote-name]"),m=$("[quote-role]");gsap.to(l,{duration:.3,yPercent:10,opacity:0,onComplete:()=>{gsap.set(u,{text:{value:i},onComplete:()=>{gsap.to(l,{height:()=>u.outerHeight(),yPercent:0,opacity:1,duration:.3})}})}}),gsap.to(p,{duration:1,scrambleText:{text:a,chars:"jompaWB!^",delimiter:" "}}),gsap.to(m,{duration:1,scrambleText:{text:r,chars:"jompaWB!^"}}),$(window).on("resize",function(){window.innerWidth>991&&(l.attr("style",""),e.slideTo(3))})}let ie=new Swiper(".testimonials_slider",{on:{init:function(){S(this)}},observer:!0,slideToClickedSlide:!0,breakpoints:{0:{direction:"horizontal",slidesPerView:1,initialSlide:0,spaceBetween:8,threshold:10,freeMode:{enabled:!1}},992:{direction:"vertical",initialSlide:3,slidesPerView:1,spaceBetween:0,threshold:40,freeMode:{enabled:!0,sticky:!0},mousewheel:{enabled:!0,thresholdDelta:20}}}}),E;ie.on("slideChange",function(){clearTimeout(E),E=setTimeout(()=>{S(this)},300)});function re(e){e.forEach(t=>{let o=$(t.element+" ._wf-spacer-input"),n=o,i=$(t.element+" ._wf-draggable"),a=o.val(),r=parseFloat(t.minVal),l=parseFloat(t.maxVal),u=parseFloat(t.step),{type:p}=t,m=!1,c=$(t.element).find("._wf-ui_label");v(c,()=>{o.val(a),t.updateVariable(a)});function d(s){t.updateVariable(s),c&&g(c,!0)}p==="drag"?i.on("mousedown touchstart",function(s){m=!0;let y=s.type==="touchstart"?s.touches[0].clientX:s.clientX,le=parseFloat(n.val())||0;$(document).on("mousemove touchmove",function(k){if(m){let ce=(k.type==="touchmove"?k.touches[0].clientX:k.clientX)-y,f=le+ce*u;f=Math.max(r,Math.min(l,f)),f=parseFloat(f.toFixed(1)),n.val(f),t.updateVariable&&d(f)}}),$(document).on("mouseup touchend",function(){m=!1,$(document).off("mousemove touchmove"),$(document).off("mouseup touchend")}),s.preventDefault()}):p==="input"&&(o.on("keydown",function(s){let y=parseInt($(this).val())||0;s.which===38||s.which===104?$(this).val(y+1).trigger("change"):(s.which===40||s.which===98)&&$(this).val(y-1).trigger("change")}),o.on("change",function(){let s=$(this).val();d(s)}))})}let se=[{element:".ui-divider",type:"drag",minVal:"0",maxVal:"40",step:"0.1",updateVariable:e=>{document.documentElement.style.setProperty("--duo-padding",e+"vw")}},{element:".ui-opacity",type:"input",minVal:"0",maxVal:"100",step:"1",updateVariable:e=>{document.documentElement.style.setProperty("--duo-opacity",e/100)}}],_=$(".duo_person._2"),B=_.attr("class"),I=$(".ui-display ._wf-box_inner"),V=$(".ui-display ._wf-ui_label");function q(e){I.removeClass("active"),I.eq(e).addClass("active")}$(".ui-display ._wf-box_inner").on("click",function(){let e=$(this).attr("data-display");_.attr("class",B).addClass(e),e==="hidden"?$(".duo_person._1").addClass(e):$(".duo_person._1").removeClass("hidden"),q($(this).index()),g(V,!0)}),v(V,()=>{_.attr("class",B),$(".duo_person._1").removeClass("hidden"),q(0)}),re(se),$(".divblockers").each(function(){let e=gsap.timeline({paused:!0,defaults:{ease:"power4.out",duration:.4}}),t=$("[divblockers-wrap]").find(".about_list-line"),o=$("[divblockers-wrap]").find(".div-block_label");e.to(o,{yPercent:-100}),e.to(t,{scale:1},"<"),$(this).hover(()=>{e.play()},()=>{e.reverse()})}),$("._4-pixels-off").each(function(){$(this).on("mouseenter",function(){let e=gsap.timeline();e.to($(this),{y:"4px",ease:"power2.out",duration:.3}),e.to($(this),{rotate:"6deg",ease:"bounce.out"},"-=0.1")})}),$(".no-code_trigger").each(function(){let e=[],t=document.querySelectorAll(".no-code_icon");function o(n,i){let a=gsap.utils.random(-50,50),r=gsap.utils.random(-50,50);gsap.set(n,{opacity:0,x:a});let l=gsap.timeline({delay:.625*i,repeat:-1,repeatDelay:.5*t.length,paused:!0});return l.to(n,{motionPath:{path:[{x:a,y:0},{x:r,y:-100}],curviness:.5,autoRotate:!1},duration:2.5,keyframes:{"0%":{opacity:0},"25%":{opacity:1},"50%":{opacity:1},"100%":{opacity:0}},opacity:0,ease:"power1.out",onComplete:()=>{gsap.set(n,{x:0,y:0,opacity:0})}}),l}$(this).hover(()=>{e=gsap.utils.shuffle([...t]).map((i,a)=>{let r=o(i,a);return r.play(),r})},()=>{e.forEach((n,i)=>{n.kill(),gsap.set(t,{clearProps:"all"})}),e=[]})})});})();
