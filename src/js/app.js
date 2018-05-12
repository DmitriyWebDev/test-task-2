import {isMobileView, goToUrl} from './common-functions'

$( document ).ready(function() {

  /** Scrol to top button */

  $( '.js-scroll-to-top' ).click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});