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

  /** Mobile menu button */

  const headerMobileMenuToggleButton = $( "#header-mobile-menu-btn" );
  const headerMobileMenu = $('#header-mobile-menu');

  (function ($) {

    headerMobileMenuToggleButton.on( 'click', function () {

      const $this = $( this );
      const activeClass = 'is-active';

      if( headerMobileMenu.css('display') === 'none' ) {
        headerMobileMenu.css({ 'display' : 'block' });
        $this.addClass( activeClass );
      } else {
        headerMobileMenu.css({ 'display' : 'none' });
        $this.removeClass( activeClass );
      }

    });

  })($);

  /** Set mobile menu width */

  (function ($) {

    setMobileMenuWidth();

    $( window ).resize(function() {
      setMobileMenuWidth();
    });

    function setMobileMenuWidth() {

      const rightOffsetFromWindow = ($(window).width() - (headerMobileMenuToggleButton.offset().left + headerMobileMenuToggleButton.outerWidth()));
      const rightPadding = 10;
      const offset = rightOffsetFromWindow + rightPadding;
      const width = 'calc(100% - ' + offset + 'px)';

      headerMobileMenu.css({'width' : width});

    }

  })($);

});