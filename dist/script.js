function initAR(){AFRAME.registerComponent("markerhandler",{init:function(){this.el.sceneEl.addEventListener("gps-entity-place-added",(()=>{alert("test")}))}})}$(document).ready((function(){$(".js-show-info").on("click",(e=>{e.preventDefault(),$(".js-text").addClass("hidden"),$(".js-info").removeClass("hidden")})),$(".js-start-ar").on("click",(e=>{e.preventDefault(),$(window).scrollTop(0),$(".ar").addClass("show"),$(".js-kaartje").addClass("hidden"),$(".ar").load("ar"),initAR()}));var e=!1,n=!0;const t=document.getElementById("audio");$("*").click((function(){n&&(e=!0,$(".js-mute").removeClass("hidden"),t.play(),n=!1)})),$(".js-mute").click((function(){e?t.pause():t.play()})),t.onplaying=function(){e=!0},t.onpause=function(){e=!1}}));
//# sourceMappingURL=script.js.map