$(document).ready(function(){
  $(".small_button").click(function(){
    $(".small_button").removeClass("small_button_click");
    $(this).addClass("small_button_click");
    /*var index = $(this).index()+1;
    $(".content").removeClass("show");
    $(".content:nth-child("+ index +")").addClass("show");*/
    });
  });
