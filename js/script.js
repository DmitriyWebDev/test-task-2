!function(n){var t={};function o(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=n,o.c=t,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/js/",o(o.s=1)}([function(n,t){n.exports=jQuery},function(n,t,o){"use strict";(function(n,t){o(2);n(document).ready(function(){n(function(){n('[data-toggle="popover"]').popover({trigger:"focus"})}),n(".js-scroll-to-top").click(function(){return n("html, body").animate({scrollTop:0},600),!1});var o=n("#header-mobile-menu-btn"),e=n("#header-mobile-menu");!function(n){o.on("click",function(){var t=n(this);"none"===e.css("display")?(e.css({display:"block"}),t.addClass("is-active")):(e.css({display:"none"}),t.removeClass("is-active"))})}(n),function(n){function t(){var t="calc(100% - "+(n(window).width()-(o.offset().left+o.outerWidth())+10)+"px)";e.css({width:t})}t(),n(window).resize(function(){t()})}(n),function(n){var o=n(".js-top-search-form");n(document).click(function(e){n(e.target).closest(o).length||(t(o).css({display:"none"}),e.stopPropagation())}),n(".js-show-top-search").on("click",function(){setTimeout(function(){o.css({display:"block"})},10)});var e=n(".js-top-search-input"),i=n(".js-top-search-form .js-top-search-form__input-placeholder");e.on("input",function(){n(".js-top-search-input").val(n(this).val())}),e.on("focus",function(){if(!i.length)return!1;i.css({display:"none"})}),e.on("blur",function(){if(!i.length)return!1;n(this).val().length||i.css({display:"block"})})}(n),function(n){n(".js-styled-select").selectpicker(),n(".js-styled-select .dropdown-menu>.inner").niceScroll({cursoropacitymin:1})}(n),function(n){n(".js-form-auto-elements-item__img-wrap").on("click",function(){var t=n(this).closest(".js-form-auto-elements-item");n(t.find(".js-form-checkbox__input")[0]).click()}),n(".js-form-auto-elements-item .js-form-checkbox__input").on("change",function(){var t=n(this),o=t.closest(".js-form-auto-elements-item"),e=t.prop("checked"),i=n(o.find(".js-form-auto-elements-item__img")[0]),s=i.closest(".js-form-auto-elements-item__img-wrap"),c=i.attr("src");e?(c=i.data("active-img"),s.addClass("form-auto-elements-item__img-wrap_active")):(c=i.data("img"),s.removeClass("form-auto-elements-item__img-wrap_active")),i.attr("src",c)})}(n),n(function(){n(".js-input-number-only").on("input",function(){var t=n(this),o=t.val();o.match(/[^0-9]/g)&&t.val(o.replace(/[^0-9]/g,""))})}),function(n){var t=".js-form-input-counter",o=".js-form-input-counter__input";function e(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!i)return!1;var s=i.closest(t),c=n(s.find(o)[0]),r=parseInt(c.val());e?r++:r<=1?r=1:r--,c.val(r)}n(".js-form-input-counter__decrement").on("click",function(){e(!1,n(this))}),n(".js-form-input-counter__increment").on("click",function(){e(!0,n(this))})}(n),n(function(){n(".js-sound-insulation-item .js-form-checkbox__input").on("change",function(){var t=n(this).closest(".js-sound-insulation-item");n(".js-sound-insulation .js-sound-insulation-item__content").css({display:"none"}),n(".js-sound-insulation-item__content",t).css({display:"block"})})})})}).call(t,o(0),o(0))},function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.isMobileView=function(){return"block"===n("#mobile-menu-button-and-logo").css("display")},t.goToUrl=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n.length&&(window.location.href=n)}}).call(t,o(0))}]);