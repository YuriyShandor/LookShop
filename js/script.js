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

  var sliderNav = $('.products');
  var maxItems = Math.round(sliderNav.parent('div').width() / 250);
  if(sliderNav.children('div').length < maxItems) {
    maxItems = sliderNav.children('div').length;
  }

  sliderNav.slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: maxItems,
    slidesToScroll: 1,
    nextArrow: $(".next_arrow"),
    prevArrow: $(".prev_arrow"),
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,

        settings: {
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
