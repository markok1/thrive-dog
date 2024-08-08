(function ($) {
  let section = $("section.faq");
  let sectionForm = $("div.form-holder");
  if (section.length) {
    $(".qa-item").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("opened")) {
        $(this).removeClass("opened");
        $(this).find(".answer").slideUp(150);
      } else {
        $(".qa-item").removeClass("opened");
        $(".qa-item .answer").slideUp(150);
        $(this).addClass("opened");
        $(this).find(".answer").slideDown(150);
      }
    });
  }
  if (sectionForm.length) {
    $(".form-dropdown-label").click(function (e) {
      e.preventDefault();
      if ($(this).parent().hasClass("quote-form-active")) {
        $(this).parent().removeClass("quote-form-active");
      } else {
        $(this).parent().addClass("quote-form-active");
      }
    });
    $(
      ".form-dropdown-container .dropdown-list-custom .dropdown-list-item"
    ).click(function (e) {
      e.preventDefault();
      var val = $(this).find("p").text();
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find(".option-text")
        .text(val);
      $(this)
        .parent()
        .parent()
        .find(".dropdown-list-item--active")
        .removeClass("dropdown-list-item--active");
      $(this).addClass("dropdown-list-item--active");
      $(".quote-form-active").removeClass("quote-form-active");
    });
    $(document).click(function (event) {
      if (!$(event.target).closest(".form-dropdown-container").length) {
        $(".quote-form-active").removeClass("quote-form-active");
      }
    });
  }
})(jQuery);

// sliders
var whichBigSlider = 0;
var whichSmallSlider = 0;

$(document).ready(function () {
  // Add click event to all image-preview elements
  $(".image-preview img").on("click", function () {
    // Find the closest testimonial element
    var $testimonial = $(this).closest(".testimonial");

    // Get the index of the testimonial (slide number)
    whichBigSlider = $(".testimonial").index($testimonial);

    // Get the index of the clicked image inside .image-preview
    whichSmallSlider = $(this).parent().index();
    $(".testimonial-slider-holder").slick("slickGoTo", whichBigSlider);
  });
});

$(".testimonial-slider-holder").slick({
  // cssEase: "cubic-bezier(0.600, -0.400, 0.735, 0.045)",
  initialSlide: 0,
  dots: false,
  arrows: true,
  infinite: false,
  speed: 1500,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: false,
  draggable: false,
  swipe: false,
  // autoplaySpeed: 3000,
  prevArrow:
    "<button type='button' class='slick-prev pull-left big-slider'> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M15 6L9 12L15 18' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right big-slider'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M9 6L15 12L9 18' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
});

// close and open testimonail popup
$(".close-testimonial-popup").on("click", function () {
  $(".testimonial-popup").addClass("hide-testimonial");
});
$(".testimonial-images-preview .image-preview img ").on("click", function () {
  $(".testimonial-popup").removeClass("hide-testimonial");
});

//gallery slider

$(".single-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".bottom-slider",
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M10.5878 14.4109L7.01031 10.8334H14.9986V9.16672H7.01031L10.5878 5.58922L9.40948 4.41089L3.82031 10.0001L9.40948 15.5892L10.5878 14.4109Z' fill='#111111' fill-opacity='0.64'/></svg></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z' fill='#111111' fill-opacity='0.64'/></svg></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
      },
    },
  ],
});
$(".bottom-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".single-slider",
  dots: false,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left '><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M10.5878 14.4109L7.01031 10.8334H14.9986V9.16672H7.01031L10.5878 5.58922L9.40948 4.41089L3.82031 10.0001L9.40948 15.5892L10.5878 14.4109Z' fill='#111111' fill-opacity='0.64'/></svg></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z' fill='#111111' fill-opacity='0.64'/></svg></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
      },
    },
  ],
});

//success cases slider

$(".success-slider-holder").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M10.5878 14.4109L7.01031 10.8334H14.9986V9.16672H7.01031L10.5878 5.58922L9.40948 4.41089L3.82031 10.0001L9.40948 15.5892L10.5878 14.4109Z' fill='#111111' fill-opacity='0.64'/></svg></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z' fill='#111111' fill-opacity='0.64'/></svg></button>",
});

//exit intent
$(document).bind("mouseleave", function (e) {
  if (e.pageY - $(window).scrollTop() <= 1) {
    $(".exit-intent").addClass("show-exit-intent");
  }
});

$(".close-exit-intent").on("click", function () {
  $(".show-exit-intent").css("display", "none");
});
