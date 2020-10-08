
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 50) {
      $("nav").addClass("sticky");
    }else {
      $("nav").removeClass("sticky");
    }
  });

  // Collapse menu button........

  $(document).ready(function () {
    $('.first-button').on('click', function () {
      $('.animated-icon').toggleClass('open');
    });
  });



$(document).ready(function(){
    $('#slide1').clik(function(){
        $('.carousel-item1').show()
    });
    $('#slide2').clik(function(){
        $('.carousel-item2').show()
    });
    $('#slide3').clik(function(){
        $('.carouse3-item1').show()
    });
    $('#slide4').clik(function(){
        $('.carousel-item4').show()
    });
    $('#slide5').clik(function(){
        $('.carousel-item5').show()
    });
});












/*

 $('#myCarousel').carousel({
    interval: false
});

//scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function(event){

    var yClick = event.originalEvent.touches[0].pageY;
    $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
    });
});*/