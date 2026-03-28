/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    const MINIMUM_WIDTH = 1024;
    var desktopProfile = $(".author-profile-card--desktop");
    var desktopButton = desktopProfile.find(".author__urls-wrapper button");
    var desktopUrls = desktopProfile.find(".author__urls");

    if (!desktopProfile.length) {
      return;
    }

    // Adjust if the follow button is shown based upon screen size
    var width = $(window).width();
    var show = desktopButton.length === 0 ? width > MINIMUM_WIDTH : !desktopButton.is(":visible");

    // Don't show the follow button if there is no content for it
    var count = desktopProfile.find('.author__urls.social-icons li').length - desktopProfile.find('li.author__desktop').length;
    if (width <= MINIMUM_WIDTH && count === 0) {
      desktopButton.hide();
      show = false;
    }

    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      desktopUrls.show();
    } else {
      // unfix
      Stickyfill.stop();
      desktopUrls.hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down
  $(".author-profile-card--desktop .author__urls-wrapper button").on("click", function() {
    var desktopProfile = $(this).closest(".author-profile-card--desktop");
    desktopProfile.find(".author__urls").fadeToggle("fast", function() {});
    desktopProfile.find(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -65});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
