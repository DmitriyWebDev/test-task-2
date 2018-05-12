import {isMobileView, goToUrl} from './common-functions'

$( document ).ready(function() {

  /** Bootstrap 4 Tooltips */

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  /** Scrol to top button */

  $( '.js-scroll-to-top' ).click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});