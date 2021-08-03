/*!
* elektron - v0.5.3
* An Admin Layout
* https://github.com/onokumus/elektron#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(n,t,i){var r,o,u,d,a;function l(){var e=Date.now()-d;e<t&&0<=e?r=setTimeout(l,t-e):(r=null,i||(a=n.apply(u,o),u=o=null))}return null===t&&(t=250),function(){u=this,o=arguments,d=Date.now();var e=i&&!r;return r||(r=setTimeout(l,t)),e&&(a=n.apply(u,o),u=o=null),a}}var n=document.querySelector(".elk-side");if(null!==n){var t=function(){window.innerWidth<993?r.hide():r.show()},i=function(){var e="is-"+o.getAttribute("name");o.checked?n.classList.add(e):n.classList.remove(e)},r=new OnoffCanvas(n,{hideByEsc:window.innerWidth<993,createDrawer:window.innerWidth<993});t(),window.addEventListener("resize",e(t,250));var o=document.querySelector(".elk-switch-input");null!==o&&(i(),o.addEventListener("change",i));var u=document.querySelector(".elk-side-nav .metismenu");null!==u&&new MetisMenu(u)}var d,a=document.querySelector(".elk-top-nav");if(null!==a){var l=function(){window.innerWidth<993?d.hide():d.show()};d=new OnoffCanvas(".elk-top-nav",{hideByEsc:!1,createDrawer:!1}),l(),window.addEventListener("resize",e(l,250)),new MetisMenu(a.querySelector(".metismenu"))}});
//# sourceMappingURL=elektron.min.js.map