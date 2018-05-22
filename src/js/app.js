import {isMobileView, goToUrl} from './common-functions'

$( document ).ready(function() {

  /** Bootstrap 4 Tooltips */

  $(function () {
    $('[data-toggle="popover"]').popover({
      trigger: 'focus'
    })
  });

  //$('#example').popover(options)

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

  /** Top search form */

  (function ($) {

    // Show/hide search form

    const searchFrom = $( '.js-top-search-form' );

    $(document).click( function(event){
      if( $(event.target).closest(searchFrom).length)
        return;
      jQuery(searchFrom).css({ 'display' : 'none' });
      event.stopPropagation();
    });

    $( '.js-show-top-search' ).on( 'click', function () {

      setTimeout( () => {
        searchFrom.css({ 'display' : 'block' });
      }, 10 );

    });

    // Cross browser placeholder color

    const searchInput = $( '.js-top-search-input' );
    const searchInputPlaceholder = $( '.js-top-search-form .js-top-search-form__input-placeholder');

    // Sync two search inputs
    searchInput.on( 'input', function () {

      $( '.js-top-search-input' ).val( $(this).val() );

    });

    searchInput.on( 'focus', function () {

      if( !searchInputPlaceholder.length ) return false;

      searchInputPlaceholder.css({ 'display' : 'none' });

    });

    searchInput.on( 'blur', function () {

      if( !searchInputPlaceholder.length ) return false;

      const $this = $(this);
      const value = $this.val();

      if( !value.length ) {
        searchInputPlaceholder.css({ 'display' : 'block' });
      }

    });

  })($);

  /** Form elements custom view set with js (custom scroll too) */

  (function($) {

    $('.js-styled-select').selectpicker();

    $(".js-styled-select .dropdown-menu>.inner").niceScroll({
      cursoropacitymin : 1
    });

  })($);

  /** Form, section 'Auto - elements', checkboxes */
  (function($) {

    const parentSelector        = '.js-form-auto-elements-item';
    const inputCheckboxSelector = '.js-form-checkbox__input';
    const imgWrapSelector       = '.js-form-auto-elements-item__img-wrap';
    const imgWrapActiveClass    = 'form-auto-elements-item__img-wrap_active';
    const imgSelector           = '.js-form-auto-elements-item__img';

    $( imgWrapSelector ).on( 'click', function () {

      const parent   = $( this ).closest( parentSelector );
      const checkbox = $( parent.find( inputCheckboxSelector )[0] );

      checkbox.click();

    });

    $( inputCheckboxSelector ).on( 'change', function () {

      const $this           = $( this );
      const parent          = $this.closest( parentSelector );
      const checkboxChecked = $this.prop('checked');

      const img             = $( parent.find( imgSelector )[0] );
      const imgWrap         = img.closest( imgWrapSelector );

      let newImgSrc         = img.attr('src');

      if( checkboxChecked ) {
        newImgSrc = img.data('active-img');
        imgWrap.addClass( imgWrapActiveClass );
      } else {
        newImgSrc = img.data('img');
        imgWrap.removeClass( imgWrapActiveClass );
      }

      img.attr( 'src', newImgSrc );

    });

  })($)

  /** Inputs with numbers */

  $(function () {

    $( '.js-input-number-only' ).on("input", function() {

      const $this = $(this);
      const value = $this.val();

      if( value.match(/[^0-9]/g) ) {
        $this.val( value.replace(/[^0-9]/g, '') );
      }

    });

  });


  /** Form input counter */

  (function($) {

    const counterSelector = '.js-form-input-counter';
    const inputSelector   = '.js-form-input-counter__input';

    $( '.js-form-input-counter__decrement' ).on( 'click', function () {
      changeInputVal( false, $(this) );
    });

    $( '.js-form-input-counter__increment' ).on( 'click', function () {
      changeInputVal( true, $(this) );
    });

    function changeInputVal( increment = true, $button = false ) {

      if( !$button ) return false;

      const parent   = $button.closest( counterSelector );
      const input    = $( parent.find( inputSelector )[0] );
      let inputVal   = parseInt( input.val() );

      if( !increment ) {

        if( inputVal <= 1 ) {
          inputVal = 1;
        } else {
          inputVal--;
        }

      } else {

        inputVal++;

      }

      input.val( inputVal );

    }

  })($);


});