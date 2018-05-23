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

    $( parentSelector + ' ' + inputCheckboxSelector ).on( 'change', function () {

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

  /** Radio buttons is sound insulation section */

  $(function () {

    const rootParent         = '.js-sound-insulation';
    const parentSelector     = '.js-sound-insulation-item';
    const activeClass        = 'sound-insulation-item_checked';
    const radioBtnSelector   = '.js-form-checkbox__input';
    const btnContentSelector = '.js-sound-insulation-item__content';

    $( parentSelector + ' ' + radioBtnSelector ).on("change", function() {

      const $this  = $(this);
      const parent = $this.closest( parentSelector );

      $( parentSelector ).removeClass( activeClass );
      parent.addClass( activeClass );

      $( rootParent + ' ' + btnContentSelector ).css({ 'display' : 'none'});
      $( btnContentSelector, parent ).css({ 'display' : 'block'});

    });

  });

  /** Calculation table drop-down button and drop-down block */

  $(function () {

    const btnSelector    = '.js-calc-drop-down-btn';
    const btnActiveClass = 'calc-drop-down-btn_active';
    const dropDownBlock  = $( '.js-calc-drop-down-block' );

    $( btnSelector ).on("click", function() {

      const $this = $(this);

      if( dropDownBlock.css( 'display' ) === 'block' ) {
        dropDownBlock.css({ 'display' : 'none' });
        $this.removeClass( btnActiveClass );
      } else {
        $this.addClass( btnActiveClass );
        dropDownBlock.css({ 'display' : 'block' });
      }

    });

  });

  /** Our works slider (for mobile only) */

  $(function () {

    $(window).on('load resize orientationchange', function () {

      const $carousel = $('.js-more-works-carousel');
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() > 750) {
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }
      }
      else {
        if (!$carousel.hasClass('slick-initialized')) {
          $carousel.slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            arrows: true,
            responsive: [
              {
                breakpoint: 480,
                settings: {
                  dots: false,
                  infinite: true,
                  centerMode: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  mobileFirst: true,
                  arrows: true,
                }
              },
              {
                breakpoint: 500,
                settings: {
                  dots: false,
                  infinite: true,
                  centerMode: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  mobileFirst: true,
                  arrows: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  dots: false,
                  infinite: true,
                  centerMode: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  mobileFirst: true,
                  arrows: true,
                }
              }
            ]
          });
        }
      }

    });

    $(window).trigger('resize');

  });




});