$(document).ready(function(){
  $(".charpet:nth-child(1)").addClass("charpet_click");
  $(".charpet").click(function(){
    $(".charpet").removeClass("charpet_click");
    $(this).addClass("charpet_click");
  });

  $('select').niceSelect();

  $(".arrow").click(function(){
    $(".arrow").removeClass("arrow_click");
    $(this).addClass("arrow_click");
  });

  $('.navbar-btn').on('click', function() {
    $('.navbar-inner').toggleClass('in');
  });

  $('.products').slick({
    slidesToShow: 4.71,
    slidesToScroll: 1,
    nextArrow: $(".next_arrow"),
    prevArrow: $(".prev_arrow"),
    focusOnSelect: false,
    centerMode: false,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,

        settings: {
          slidesToShow: 3.03,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: $(".load_more_slick"),
        }
      }
    ]
  });

  $('.banners').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $("#right_nav_1"),
    prevArrow: $("#left_nav_1"),
    focusOnSelect: true,
    centerMode: true,
    centerPadding: true,
    initialSlide: 4,
    dots: true,
    dotsClass: "slick-dots_my",
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 769,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

});
