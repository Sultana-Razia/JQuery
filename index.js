$(document).ready(function(){
    $(".btn").click(function(){
      $(".p1").hide(2000).show(2000);
    });
  });
$(document).ready(function(){
    $(".btn1").click(function(){
      $(".p2").toggle(2000);
    });
});  
$(document).ready(function(){
    $(".btn2").click(function(){
      $(".p3").fadeOut(2000).fadeIn(2000);
    });
});
$(document).ready(function(){
    $(".btn3").click(function(){
      $(".p4").fadeTo(1000, .5);
    });
});
$(document).ready(function(){
    $(".btn4").click(function(){
      $(".p5").slideUp(2000).slideDown(2000);
    });
});
