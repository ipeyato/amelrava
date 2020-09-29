$(function () {
  "use strict";
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".header_navbar").removeClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/anr2.png");
    } else {
      $(".header_navbar").addClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/anr.png");
    }
  });
  var scrollLink = $(".page-scroll");
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single_slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on("beforeChange", function (
      e,
      slick,
      currentSlide,
      nextSlide
    ) {
      var $animatingElements = $(
        '.single_slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false,
      centerMode: true,
      adaptiveHeight: true,
      responsive: [{ breakpoint: 767, settings: { arrows: false } }],
    });
    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<div class="coming_soon_count d-flex justify-content-between pt-20"><div class="single_count d-flex align-items-center justify-content-center mt-30"><div class="count_content"><span class="count">%D</span><p class="times">Hari</p></div></div><div class="single_count d-flex align-items-center justify-content-center mt-30"><div class="count_content"><span class="count">%H</span><p class="times">Jam</p></div></div><div class="single_count d-flex align-items-center justify-content-center mt-30"><div class="count_content"><span class="count">%M</span><p class="times">Menit</p></div></div><div class="single_count d-flex align-items-center justify-content-center mt-30"><div class="count_content"><span class="count">%S</span><p class="times">Detik</p>                            </div></div></div>'
        )
      );
    });
  });
  $(".testimonial_wrapper").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-chevron-left"></i></span>',
    nextArrow:
      '<span class="next"><i class="lni lni-chevron-right"></i></span>',
    responsive: [{ breakpoint: 576, settings: { arrows: false } }],
  });
  $(".video-popup").magnificPopup({ type: "iframe" });
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1500);
  });
  var wow = new WOW({ boxClass: "wow", mobile: false });
  wow.init();
});
