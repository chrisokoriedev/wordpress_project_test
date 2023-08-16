(()=>{function e(e,o){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e))||o&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}window.addEventListener("DOMContentLoaded",(function(){var t=function(e){if(!e)return e;var t=e.toString().toLowerCase().replace(/&(amp;)/g,"").replace(/&(mdash;)/g,"").replace(/\u2013|\u2014/g,"").replace(/[&]nbsp[;]/gi,"-").replace(/\s+/g,"-").replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return decodeURI(encodeURIComponent(t))};({init:function(){this._run(),this._scroll(),this._toggleCollapse(),this._scrollToTop(),this._hide(),this._show(),this._hideOnMobileView(),this._hideOnDevice(),this._tooltip()},_tooltip:function(){var t,o=e(document.querySelectorAll(".eb-toc-container"));try{for(o.s();!(t=o.n()).done;){var n=t.value;if(n&&"true"==n.getAttribute("data-copy-link")){var r,a=e(document.querySelectorAll(".eb-tooltip"));try{var i=function(){var e=r.value;e&&(e.parentNode.parentNode.addEventListener("mouseenter",(function(t){e.style.display="inline-block"})),e.parentNode.parentNode.addEventListener("mouseleave",(function(t){e.style.display="none",this.getElementsByClassName("eb-tooltiptext")[0].style.visibility="hidden"})))};for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}var c,l=e(document.querySelectorAll(".eb-tooltip"));try{for(l.s();!(c=l.n()).done;){var s=c.value;s&&s.addEventListener("click",(function(e){this.children[0].style.visibility="visible"}))}}catch(e){l.e(e)}finally{l.f()}}}}catch(e){o.e(e)}finally{o.f()}},_toggleCollapse:function(){var t,o=e(document.querySelectorAll(".eb-toc-container"));try{var n=function(){var e=t.value,o="true"===e.getAttribute("data-sticky");if("true"===e.getAttribute("data-collapsible")){var n=e.querySelector(".eb-toc-title"),r=e.querySelector(".eb-toc-wrapper");o||n.addEventListener("click",(function(){r.classList.toggle("hide-content")}))}};for(o.s();!(t=o.n()).done;)n()}catch(e){o.e(e)}finally{o.f()}},_scrollToTop:function(){var t=document.querySelector(".eb-toc-container"),o=t&&"true"==t.getAttribute("data-scroll-top"),n=t&&"true"==t.getAttribute("data-sticky"),r=t.getAttribute("data-scroll-target"),a=document.querySelector(".eb-toc-wrapper").getAttribute("data-top-offset");if(o){var i=function(){l.classList.remove("show-scroll"),l.classList.add("hide-scroll")},c=function(){document.body.scrollTop>30||document.documentElement.scrollTop>20?(l.classList.remove("hide-scroll"),l.classList.add("show-scroll")):i()},l=document.createElement("span");l.setAttribute("class","eb-toc-go-top"),l.innerHTML=">",document.body.insertBefore(l,document.body.lastChild),l.addEventListener("click",(function(){if(n||"scroll_to_toc"!==r)window.scroll({top:0,left:0,behavior:"smooth"});else{var e=a?-Math.abs(a):0,o=t.getBoundingClientRect().top+window.pageYOffset+e;window.scroll({top:o,behavior:"smooth"})}}));var s,d=e(document.querySelectorAll(".eb-toc-container"));try{for(d.s();!(s=d.n()).done;)"true"===s.value.getAttribute("data-scroll-top")?(window.addEventListener("scroll",c),i()):i()}catch(e){d.e(e)}finally{d.f()}}},_scroll:function(){var t,o=e(document.querySelectorAll(".eb-toc-wrapper"));try{var n=function(){var e=t.value,o="true"===e.getAttribute("data-smooth"),n=parseFloat(e.getAttribute("data-top-offset"));if(o){e.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){var t=this.getAttribute("href").replace("#","");if(e.preventDefault(),"number"==typeof n&&n){var o=n?-Math.abs(n):0,r=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset+o;window.scrollTo({top:r,behavior:"smooth"})}else document.getElementById(t).scrollIntoView({behavior:"smooth"})}))}));var r=window.location.hash,a=r.slice(1);if(r&&"number"==typeof n&&n){var i=n?Math.abs(n):0;document.getElementById(a).style.scrollMarginTop=i+"px"}}};for(o.s();!(t=o.n()).done;)n()}catch(e){o.e(e)}finally{o.f()}},_hide:function(){var t,o=e(document.querySelectorAll(".eb-toc-close"));try{var n=function(){var e=t.value;e.addEventListener("click",(function(){var t=e.closest(".eb-toc-container");t.classList.add("eb-toc-content-hidden"),t.classList.remove("eb-toc-content-visible")}))};for(o.s();!(t=o.n()).done;)n()}catch(e){o.e(e)}finally{o.f()}},_show:function(){var t,o=e(document.querySelectorAll(".eb-toc-button"));try{var n=function(){var e=t.value;e.addEventListener("click",(function(){var t=e.closest(".eb-toc-container");t.classList.remove("eb-toc-content-hidden"),t.classList.add("eb-toc-content-visible")}))};for(o.s();!(t=o.n()).done;)n()}catch(e){o.e(e)}finally{o.f()}},_run:function(){var o,n=e(document.querySelectorAll(".eb-toc-container"));try{var r=function(){var e=o.value;if(e){var n=e.style.border;window.ebTocBorder=n}var r=e&&"true"==e.getAttribute("data-copy-link")?'<span class="eb-tooltip dashicons dashicons-clipboard"><span class="eb-tooltiptext">Copied!</span></span></span>':"",a=document.querySelector(".eb-toc-wrapper");if(a){var i=JSON.parse(a.getAttribute("data-headers")),c=JSON.parse(a.getAttribute("data-visible")),l=JSON.parse(a.getAttribute("data-delete-headers")),s=[];void 0!==c&&c.forEach((function(e,t){return!0===e?s.push("h"+(t+1)):null}));var d=null!==s?s.join(","):"",u=void 0!==d&&""!==d?document.body.querySelectorAll(d):document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");void 0!==i&&0!==u.length&&i.forEach((function(e,o){var n,a=t(e.text);!l||null!==(n=l[o])&&void 0!==n&&n.isDelete?u.forEach((function(e){var o=t(e.textContent);0===a.localeCompare(o)&&(e.innerHTML='<span id="'.concat(o,'" class="eb-toc__heading-anchor"></span>').concat(e.innerHTML))})):u.forEach((function(e,o){var n=t(e.textContent);0===a.localeCompare(n)&&(new ClipboardJS("#".concat(n)),e.innerHTML="".concat(e.innerHTML,'<span id="').concat(n,'"\n                                    class="eb-toc__heading-anchor" data-clipboard-text="').concat(location.protocol+"//"+location.host+location.pathname,"#").concat(n,'">').concat(r,"</span>"))}))}))}};for(n.s();!(o=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}},_hideOnMobileView:function(){var e=document.querySelector(".eb-toc-container");if(e){var t="true"===e.getAttribute("data-sticky"),o="true"==e.getAttribute("data-sticky-hide-mobile");t&&o&&window.screen.width<420&&(e.style.display="none")}},_hideOnDevice:function(){var e=document.querySelector(".eb-toc-container");if(e){var t="true"===e.getAttribute("data-hide-desktop"),o="true"===e.getAttribute("data-hide-tab"),n="true"==e.getAttribute("data-hide-mobile"),r=document.querySelector(".eb-toc-go-top");t&&window.screen.width>1024&&(r.style.display="none"),o&&window.screen.width<1024&&window.screen.width>420&&(r.style.display="none"),n&&window.screen.width<420&&(r.style.display="none")}}}).init()}))})();