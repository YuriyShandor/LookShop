$(document).ready(function(){
  $(".charpet").click(function(){
    $(".charpet").removeClass("charpet_click");
    $(this).addClass("charpet_click");
    /*var index = $(this).index()+1;
    $(".content").removeClass("show");
    $(".content:nth-child("+ index +")").addClass("show");*/
  });

  $(".arrow").click(function(){
    $(".arrow").removeClass("arrow_click");
    $(this).addClass("arrow_click");
  });

  $('.products').slick({
    slidesToShow: 4.71,
    slidesToScroll: 1,
    nextArrow: $(".next_arrow"),
    prevArrow: $(".prev_arrow"),
    focusOnSelect: false,
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1200,

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
