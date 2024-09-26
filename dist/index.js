"use strict";(()=>{$(document).ready(function(){function g(e,t){let o="edit";t?e.addClass(o):e.removeClass(o)}function w(e,t){$(e).on("click",function(){g(e,!1),t()})}function V(){$("[dark-menu-section]").each(function(){let e=gsap.timeline({scrollTrigger:{trigger:$(this),start:"top 36px",end:"bottom 36px",onEnter:()=>{let t=$(".hero_top");t.hasClass("cc-dark")||t.addClass("cc-dark")},onEnterBack:()=>{let t=$(".hero_top");t.hasClass("cc-dark")||t.addClass("cc-dark")},onLeaveBack:()=>{$(".hero_top").removeClass("cc-dark")},onLeave:()=>{$(".hero_top").removeClass("cc-dark")}}})})}V();let q=document.querySelectorAll(".btn_wrap");function h(e,t,o){return e+(t-e)*o}function b(e,t,o){let a=Date.now(),n=(a-o)/t,r;n<.3282275711?r=h(0,0,n/.3282275711):n<.5?r=h(0,180,(n-.3282275711)/(.5-.3282275711)):n<.8282275711?r=180:n<=1?r=h(180,360,(n-.8282275711)/(1-.8282275711)):(r=360,o=a),e.style.setProperty("--r2",`${r}deg`),n<=1?requestAnimationFrame(()=>b(e,t,o)):requestAnimationFrame(()=>b(e,t,Date.now()))}function x(e,t,o){let a=Date.now(),n=(a-o)/t,r;n<.3282275711?r=h(10,90,n/.3282275711):n<.5?r=90:n<.8282275711?r=h(90,10,(n-.5)/(.8282275711-.5)):n<=1?r=10:(r=10,o=a),e.style.setProperty("--x",`${r}%`),n<=1?requestAnimationFrame(()=>x(e,t,o)):requestAnimationFrame(()=>x(e,t,Date.now()))}q.forEach(e=>{b(e,3e3,Date.now()),x(e,3e3,Date.now())});function D(e){$(".sidebar_trigger").trigger("click"),gsap.fromTo($(".sidebar_success"),{y:"-8rem"},{y:"0",display:"flex"}),setTimeout(()=>{$(".sidebar_success").fadeOut()},8e3)}$("select").niceSelect(),$(".nice-select li").on("click",function(){$(".nice-select .current").css("color","white")}),document.getElementById("wf-form-get-in-touch-form").addEventListener("submit",D);let y=$(".form_input");console.log(y),y.hover(function(){$(this).siblings().addClass("active")},function(){$(this).siblings().removeClass("active")}),y.on("focus",function(){$(this).siblings().addClass("active")}),y.on("blur",function(){$(this).siblings().removeClass("active")});function O(){var e=$("<input>");let t;$(".sidebar_email").click(function(){var o=$(this).text();let a=$(".sidebar_label").text();$("body").append(e),e.val(o).select(),document.execCommand("copy"),e.remove(),clearTimeout(t),$(".sidebar_label").text("Copied to a clipboard"),t=setTimeout(()=>{$(".sidebar_label").text(a)},2e3)}),$("#copyEmailFooter").click(function(){var o="hello@divblockers.com";$("body").append(e),e.val(o).select(),document.execCommand("copy"),e.remove(),clearTimeout(t),$(this).find(".meta-text").text("Copied to a clipboard"),t=setTimeout(()=>{$(this).find(".meta-text").text("Email")},2e3)})}O();function T(){let e=gsap.timeline();return e.fromTo(".hero_heading",{y:"10%",opacity:0},{y:"0%",opacity:1,duration:.3,ease:"power1.inOut"},"+=0.2"),e.to("[data-hide-default]",{opacity:1}),e.set(".preloader",{display:"none"}),e.set(["html","body"],{height:"auto",overflow:"visible"}),e}function A(){gsap.registerPlugin(SplitText,CustomEase),CustomEase.create("primary","0.57, 0, 0.08, 1"),gsap.defaults({ease:"primary"}),gsap.set(".preloader",{display:"flex"}),gsap.set(["html","body"],{height:"100vh",overflow:"hidden"}),gsap.set("[data-hide-default]",{opacity:0});function e(){$(".preloader_img").not("[data-no-move]").each(function(){let n=Math.random()*10+50;gsap.to($(this),{y:`-${n}vh`,duration:10,ease:"linear"})})}let t=0;function o(){let i=["We are","Webflow","Studio"];if(t<i.length){let n=document.querySelector(".preloader_text");n.textContent=i[t],t===0&&a(-1);let r=gsap.timeline({delay:.5,onComplete:()=>{t=t+1,o()}});r.fromTo(n,{y:"10%",opacity:0},{y:"0%",opacity:1,duration:.8,ease:"power2.inOut"}),t<i.length-1&&r.to(n,{y:"-10%",opacity:0,duration:.4,ease:"power2.inOut",onStart:()=>{a(t)}},"+=0.2")}else setTimeout(()=>{a(t+2)},300),setTimeout(()=>{let n=gsap.timeline();n.to(".preloader_text",{y:"10%",opacity:0,duration:.3,ease:"power1.inOut"}),n.add(T())},600)}function a(i){gsap.to(".preloader_col:first-child",{y:`-${(i+1)*100}vh`,duration:2}),gsap.to(".preloader_col:last-child",{y:`-${(i+1)*100}vh`,duration:2})}o(),e()}"scrollRestoration"in history&&(history.scrollRestoration="manual"),$(window).on("unload",function(){$("body").css("opacity","0"),$(window).scrollTop(0)});let L=sessionStorage.getItem("loaderState")==="true";window.scrollTo(0,0),$(".page-wrapper").css("opacity","1"),L?T():(A(),sessionStorage.setItem("loaderState","true")),$(document).ready(function(){var e=$(document.body),t=0,o=!1,a="";function i(){o?r():n()}function n(){var u=e.innerWidth();t=window.pageYOffset,e.css({overflow:"hidden",position:"fixed",top:`-${t}px`,width:u}),o=!0}function r(){e.css({overflow:"",position:"",top:"",width:""}),$(window).scrollTop(t),o=!1}$('[scroll="toggle"]').on("click",i);let l=[991,767,479],c=window.innerWidth;function p(u){o&&r()}function m(){let u=window.innerWidth;l.forEach(d=>{(c<=d&&u>d||c>=d&&u<d)&&p(d)}),c=u}window.addEventListener("resize",m)}),gsap.registerPlugin(ScrollTrigger),ScrollTrigger.matchMedia({"(min-width: 768px)":function(){let e=gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"310 bottom",toggleActions:"play none none reverse"}});e.set($(".btn_wrap.is-nav"),{display:"block"}),e.set([$(".hero_col.full,.hero_team-meta")],{pointerEvents:"none"}),e.set($(".hero_team-meta"),{display:"none"}),e.fromTo($(".btn_wrap.is-nav"),{opacity:0},{opacity:1})}});function F(){function e(o){let a=$(o),i=[.2,1,.8,.6,.4,.3,.2],n=7,r=.4,l=gsap.timeline({repeat:-1,repeatDelay:0,onStart:()=>c(.2,a),onRepeat:()=>c(.2,a)});function c(m,u){for(let d=1;d<=n;d++)gsap.set($(u).find(`#path-${d}`),{opacity:m})}function p(m){for(let u=1;u<=n;u++){let d=(n-u)*.1;for(let s=0;s<i.length;s++)l.to($(m).find(`#path-${u}`),{opacity:i[s],duration:r,ease:"none"},d+s*r)}}return p(a),l}function t(o){let a=$(o);gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);let i={repeat:-1,repeatDelay:1,ease:"power1.inOut",motionPath:{autoRotate:!0,alignOrigin:[.5,.5]}};function n(l){return l.includes("-")?parseInt(l.split("-")[1],10)*5:0}let r=gsap.timeline();["1","2","3","4","5","6","7"].forEach(l=>{let c=n(l),p=$(a).find(`#line-visual-${l}`).get(0),m=$(a).find(`#path-${l}`).get(0);if(!p||!m){console.error("GSAP target not found:",p?`#path-${l}`:`#line-visual-${l}`);return}r.to(p,{...i,delay:c,duration:gsap.utils.random(5,10),motionPath:{...i.motionPath,path:$(a).find(`#path-${l}`).get(0),align:$(a).find(`#path-${l}`).get(0)}},"<")})}$('[data-animation="lines"]').each(function(){e($(this)),t($(this))})}function R(){let e=$(".hero-wrap_heading h1"),t=$(".hero-wrap_par"),o=$("[data-hero-ui]"),a=$(".hero-wrap_lines");gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"100px bottom",end:"bottom bottom",scrub:1,invalidateOnRefresh:!0}}).to(e,{y:()=>t.outerHeight()/2,keyframes:{"20%":{opacity:.15,filter:"blur(10px)"},"90%":{opacity:0}}}),gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"300 bottom",invalidateOnRefresh:!0,toggleActions:"play none none reverse"}}).to([t,a,o],{opacity:0,duration:.5},"<")}function M(){gsap.timeline({scrollTrigger:{trigger:$(".section_work"),start:"20px bottom",end:"40px bottom",scrub:1,invalidateOnRefresh:!0}}).to([".hero_btn-box",".hero_notification"],{opacity:0})}function W(){let e=$(".hero-wrap_heading").find("._wf-ui_label"),t=$(".hero-wrap_heading h1");$("._wf-ui-colors-block").on("click",function(){let o=$(this).css("background-color");g(e,!0),t.css("color",o),$("html").css("--wf-ui--lines",o)}),w(e,()=>{t.css("color","inherit"),$("html").css("--wf-ui--lines","var(--color--main)")})}function X(){var{DateTime:e}=luxon;function t(){var o=e.local(),a=o.setZone("Europe/Paris").toFormat("hh:mm a");$("[data-real-time]").text(a+" CET")}t(),setInterval(t,1e3)}function z(){let e=0;$("[data-hero-brand]").on("click",function(){let t=["Just homepage, sry..","Definitely not SVG","Web Dev Bois","superheroes","friends","running out of ideas","check the projects pls","stop now","for real?","one more","maybe one more","DivBlockers"];$(this).text(t[e]),e=(e+1)%t.length})}function H(){tippy("[data-tippy-content]",{content(e){return e.getAttribute("data-tippy-content")},animation:"shift-toward",theme:"translucent"})}R(),M(),W(),X(),z(),H(),F();function j(){let e=gsap.timeline({paused:!0,defaults:{ease:"power3.inOut"}});e.fromTo($(".modular-chip"),{xPercent:-100,yPercent:100},{xPercent:0,yPercent:0,opacity:1,stagger:.1}),$(".work_item-block.modular").hover(function(){e.play()},function(){e.reverse()})}function G(){let e=gsap.timeline({paused:!0,defaults:{ease:"power2.inOut"}});e.to($(".tiny-person._1"),{xPercent:100,duration:1}),e.to($(".tiny-person._2"),{xPercent:-100,duration:1},"<0.2");let t=gsap.timeline({paused:!0,repeat:-1,yoyo:!0,ease:"power3.inOut"});t.to($(".tiny-person._1"),{rotate:3,duration:2}),t.to($(".tiny-person._2"),{rotate:-3,duration:2},"<"),$(".work_item-block.tiny").hover(function(){e.play(),t.play(),$(this).addClass("animation-play")},function(){e.reverse(),$(this).removeClass("animation-play")})}function N(){$(".work_item-block.docusign").hover(function(){let e=$(this).find("video")[0];e.paused&&e.play()},function(){let e=$(this).find("video")[0];e.played&&e.pause()})}function Y(){let e=gsap.timeline({paused:!0,defaults:{ease:"power3.out"}});e.from($(".vsco-card"),{yPercent:30,opacity:0,stagger:.15,duration:1}),$(".work_item-block.vsco").hover(function(){e.play()},function(){e.reverse()})}function J(){for(var e=document.getElementsByClassName("pixel"),t=0;t<e.length;t++)e[t].style.animationDelay=Math.ceil(Math.random()*5e3)+"ms";setTimeout(function(){for(var o=0;o<e.length;o++)e[o].classList.add("paused")},4e3)}function Q(){let e=$(".together-logo"),t=$(".together-ball"),o=$(".together-text-1"),a=$(".together-text-2"),i=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});i.to(e,{opacity:0,duration:.3}),i.to(t,{y:"0%",width:"65%",duration:.8},"<"),i.fromTo(o,{xPercent:-15},{xPercent:0,opacity:1},"<0.3"),i.fromTo(a,{xPercent:15},{xPercent:0,opacity:1,stagger:.2},"<.02"),$(".work_item-block.together").hover(function(){i.play()},function(){i.reverse()})}function U(){let e=$(".polywork-shape"),t=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});t.fromTo(e.eq(0),{rotate:"-15deg",xPercent:5,scale:.8},{rotate:"0",xPercent:0,scale:1}),t.fromTo(e.eq(1),{rotate:"15deg",scale:.8},{rotate:"0",scale:1},"<"),t.fromTo(e.eq(2),{scale:0},{scale:1},"<"),$(".work_item-block.polywork").hover(function(){t.play()},function(){t.reverse()})}function Z(){var e=$(".work_item-block.atoms").find("video")[0];$(".work_item-block.atoms").on("mouseenter",function(){e.playbackRate=1,e.play()}),$(".work_item-block.atoms").on("mouseleave",function(){e.playBackwards()}),HTMLVideoElement.prototype.playBackwards=function(){this.pause();var t=this,o=25,a=setInterval(function(){t.currentTime===0?(clearInterval(a),t.pause()):t.currentTime+=-(1.5/o)},1e3/o)}}function K(){let e=$(".modernlife_bg-base"),t=$(".modernlife_bg-inner"),o=gsap.timeline({paused:!0,defaults:{ease:"power1.inOut"}});o.to(e,{scale:.4,xPercent:19,yPercent:-22}),o.to(t,{scale:.4,xPercent:18,yPercent:-21.5},"<"),$(".work_item-block.modernlife").hover(function(){o.play()},function(){o.reverse()})}function ee(){let e=0,t={keyframes:{"50%":{opacity:1}}},o=.7,a=.15,i=$(".cache_box"),n=$(".cache_avatar"),r=[1,4,0,3,2],l=$($.map(r,s=>i[s]));CustomBounce.create("boxBounce",{strength:.25,squash:10}),CustomBounce.create("mainBounce",{strength:.3,squash:.3});let c=gsap.timeline({paused:!0});c.fromTo(l,{opacity:0,y:"-30em"},{...t,y:"0",stagger:a,ease:"boxBounce",duration:o}).to(l,{yPercent:-50,rotate:8,duration:o,stagger:a,ease:"boxBounce-squash"},0).to(l.eq(4),{rotate:23},"-=0.3");function p(){let s=gsap.timeline();return s.fromTo(n,{opacity:0,scale:.5},{...t,scale:1,xPercent:-90,duration:.2}).to(n,{duration:.001,onStart:()=>n.css("z-index",1),onReverseComplete:()=>n.css("z-index",1),onComplete:()=>n.css("z-index",5)}).to(n,{xPercent:0}),s}function m(){let s=gsap.timeline({onReverseComplete:u});return s.add(p()),s}function u(){let s=$(".cache_avatar img");s.hide(),e=(e+1)%s.length,s.eq(e).show()}let d=gsap.timeline({paused:!0});d.add(m()),$(".work_item-block.cache").hover(function(){c.play(),d.play()},function(){c.reverse(),d.reverse()})}G(),j(),N(),Y(),J(),Q(),U(),Z(),K(),ee();function te(e){gsap.registerPlugin(TextPlugin);let t=["Prague","New York","San Francisco","London","Chicago","Vienna","Amsterdam","Los Angeles"],o=0,a=$(e),i=$(e).find("#reveal-top"),n=$(e).find("#reveal-bot");function r(l){let c=t[o];n.text(c);let p=n.width();gsap.to(a,{width:`${p}px`}),gsap.timeline({onComplete:()=>{setTimeout(u,2e3)}}).to(n,{y:"-100%",duration:.5}).to(i,{y:"-100%",duration:.5},"<");function u(){gsap.set([n,i],{y:"0%"}),i.text(c),n.text(""),o=(o+1)%t.length,r()}}r(e)}$(".section_head-text-reveal").each(function(){te($(this))});function P(e){let{activeIndex:t,slides:o}=e,a=o[t],i=$(a).attr("data-quote"),n=$(a).attr("data-name"),r=$(a).attr("data-role"),l=$("[quote-el]"),c=$("[quote-text]"),p=$("[quote-name]"),m=$("[quote-role]");gsap.to(l,{duration:.3,yPercent:10,opacity:0,onComplete:()=>{gsap.set(c,{text:{value:i},onComplete:()=>{gsap.to(l,{height:()=>c.outerHeight(),yPercent:0,opacity:1,duration:.3})}})}}),gsap.to(p,{duration:1,scrambleText:{text:n,chars:"jompaWB!^",delimiter:" "}}),gsap.to(m,{duration:1,scrambleText:{text:r,chars:"jompaWB!^"}}),$(window).on("resize",function(){l.attr("style",""),e.slideTo(3)})}let oe=new Swiper(".testimonials_slider",{on:{init:function(){P(this)}},observer:!0,slideToClickedSlide:!0,breakpoints:{0:{direction:"horizontal",slidesPerView:1,spaceBetween:16,initialSlide:1,threshold:10,freeMode:{enabled:!1}},992:{direction:"vertical",slidesPerView:1,spaceBetween:0,initialSlide:3,threshold:40,freeMode:{enabled:!0,sticky:!0},mousewheel:{enabled:!0,thresholdDelta:20}}}}),C;oe.on("slideChange",function(){clearTimeout(C),C=setTimeout(()=>{P(this)},300)});function ne(e){e.forEach(t=>{let o=$(t.element+" ._wf-spacer-input"),a=o,i=$(t.element+" ._wf-draggable"),n=o.val(),r=parseFloat(t.minVal),l=parseFloat(t.maxVal),c=parseFloat(t.step),{type:p}=t,m=!1,u=$(t.element).find("._wf-ui_label");w(u,()=>{o.val(n),t.updateVariable(n)});function d(s){t.updateVariable(s),u&&g(u,!0)}p==="drag"?i.on("mousedown touchstart",function(s){m=!0;let v=s.type==="touchstart"?s.touches[0].clientX:s.clientX,se=parseFloat(a.val())||0;$(document).on("mousemove touchmove",function(k){if(m){let le=(k.type==="touchmove"?k.touches[0].clientX:k.clientX)-v,f=se+le*c;f=Math.max(r,Math.min(l,f)),f=parseFloat(f.toFixed(1)),a.val(f),t.updateVariable&&d(f)}}),$(document).on("mouseup touchend",function(){m=!1,$(document).off("mousemove touchmove"),$(document).off("mouseup touchend")}),s.preventDefault()}):p==="input"&&(o.on("keydown",function(s){let v=parseInt($(this).val())||0;s.which===38||s.which===104?$(this).val(v+1).trigger("change"):(s.which===40||s.which===98)&&$(this).val(v-1).trigger("change")}),o.on("change",function(){let s=$(this).val();d(s)}))})}let ae=[{element:".ui-divider",type:"drag",minVal:"0",maxVal:"40",step:"0.1",updateVariable:e=>{document.documentElement.style.setProperty("--duo-padding",e+"vw")}},{element:".ui-opacity",type:"input",minVal:"0",maxVal:"100",step:"1",updateVariable:e=>{document.documentElement.style.setProperty("--duo-opacity",e/100)}}],_=$(".duo_person._2"),S=_.attr("class"),E=$(".ui-display ._wf-box_inner"),B=$(".ui-display ._wf-ui_label");function I(e){E.removeClass("active"),E.eq(e).addClass("active")}$(".ui-display ._wf-box_inner").on("click",function(){let e=$(this).attr("data-display");_.attr("class",S).addClass(e),e==="hidden"?$(".duo_person._1").addClass(e):$(".duo_person._1").removeClass("hidden"),I($(this).index()),g(B,!0)}),w(B,()=>{_.attr("class",S),$(".duo_person._1").removeClass("hidden"),I(0)}),ne(ae),gsap.registerPlugin(MotionPathPlugin);let ie=document.querySelectorAll(".no-code_icon");function re(){let e=gsap.utils.shuffle([...ie]),t=gsap.timeline({repeat:-1,repeatDelay:.5});e.forEach(o=>{let a=gsap.utils.random(-100,100),i=gsap.utils.random(-50,50);gsap.set(o,{opacity:0}),t.to(o,{motionPath:{path:[{x:0,y:0},{x:i,y:-50},{x:a,y:-100}],curviness:1.5,autoRotate:!1},duration:2,keyframes:{"25%":{opacity:1},"50%":{opacity:1},"100%":{opacity:0}},opacity:0,ease:"power1.inOut",onComplete:()=>{gsap.set(o,{x:0,y:0,opacity:0})}},"+=0.2")})}re()});})();
