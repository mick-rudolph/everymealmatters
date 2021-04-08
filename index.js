$(document).ready(function(){






  $("#selector1").click(function(){
    $("#selector1").addClass("fill");
    $("#selector2").removeClass("fill");
    $("#selector3").removeClass("fill");
    $("#selector4").removeClass("fill");
    $("#selector5").removeClass("fill");
    $("#selector6").removeClass("fill");
  });
  $("#selector2").click(function(){
    $("#selector2").addClass("fill");
    $("#selector1").removeClass("fill");
    $("#selector3").removeClass("fill");
    $("#selector4").removeClass("fill");
    $("#selector5").removeClass("fill");
    $("#selector6").removeClass("fill");
  });
  $("#selector3").click(function(){
    $("#selector3").addClass("fill");
    $("#selector1").removeClass("fill");
    $("#selector2").removeClass("fill");
    $("#selector4").removeClass("fill");
    $("#selector5").removeClass("fill");
    $("#selector6").removeClass("fill");
  });
  $("#selector4").click(function(){
    $("#selector4").addClass("fill");
    $("#selector1").removeClass("fill");
    $("#selector2").removeClass("fill");
    $("#selector3").removeClass("fill");
    $("#selector5").removeClass("fill");
    $("#selector6").removeClass("fill");
  });
  $("#selector5").click(function(){
    $("#selector5").addClass("fill");
    $("#selector1").removeClass("fill");
    $("#selector2").removeClass("fill");
    $("#selector3").removeClass("fill");
    $("#selector4").removeClass("fill");
    $("#selector6").removeClass("fill");
  });
  $("#selector6").click(function(){
    $("#selector6").addClass("fill");
    $("#selector1").removeClass("fill");
    $("#selector2").removeClass("fill");
    $("#selector3").removeClass("fill");
    $("#selector4").removeClass("fill");
    $("#selector5").removeClass("fill");
  });

  $("#selector1").click(function(){
    $("#globe1").show();
    $("#globe2").hide();
    $("#globe3").hide();
    $("#globe4").hide();
    $("#globe5").hide();
    $("#globe6").hide();
  });
  $("#selector2").click(function(){
    $("#globe2").show();
    $("#globe1").hide();
    $("#globe3").hide();
    $("#globe4").hide();
    $("#globe5").hide();
    $("#globe6").hide();
  });
  $("#selector3").click(function(){
    $("#globe3").show();
    $("#globe2").hide();
    $("#globe1").hide();
    $("#globe4").hide();
    $("#globe5").hide();
    $("#globe6").hide();
  });
  $("#selector4").click(function(){
    $("#globe4").show();
    $("#globe2").hide();
    $("#globe3").hide();
    $("#globe1").hide();
    $("#globe5").hide();
    $("#globe6").hide();
  });
  $("#selector5").click(function(){
    $("#globe5").show();
    $("#globe2").hide();
    $("#globe3").hide();
    $("#globe4").hide();
    $("#globe1").hide();
    $("#globe6").hide();
  });
  $("#selector6").click(function(){
    $("#globe6").show();
    $("#globe2").hide();
    $("#globe3").hide();
    $("#globe4").hide();
    $("#globe5").hide();
    $("#globe1").hide();
  });

  $(".on-globe").click(function(){
    $("#section2").slideDown(1000);
  });
  $(".off-globe").click(function(){
    $("#section2").slideUp(500);
  });

  $("#selector2").click(function(){
    $(".waterfact1").empty();
    $(".waterfact2").empty();
    $(".foodfact1").empty();
    $(".foodfact2").empty();
    $(".co2fact1").empty();
    $(".co2fact2").empty();
    $(".moneyfact1").empty();
    $(".waterfact1-5x").append("60,889");
    $(".waterfact2-5x").append("334");
    $(".foodfact1-5x").append("416");
    $(".foodfact2-5x").append("20.83%");
    $(".co2fact1-5x").append("1,914");
    $(".co2fact2-5x").append("19%");
    $(".moneyfact1-5x").append("$218");
  });

  $("#selector3").click(function(){
    $(".waterfact1").empty();
    $(".waterfact2").empty();
    $(".foodfact1").empty();
    $(".foodfact2").empty();
    $(".co2fact1").empty();
    $(".co2fact2").empty();
    $(".moneyfact1").empty();
    $(".waterfact1-5x").append("121,778");
    $(".waterfact2-5x").append("667");
    $(".foodfact1-5x").append("831");
    $(".foodfact2-5x").append("41.66%");
    $(".co2fact1-5x").append("3,829");
    $(".co2fact2-5x").append("38%");
    $(".moneyfact1-5x").append("$436");
  });

  $("#selector4").click(function(){
    $(".waterfact1").empty();
    $(".waterfact2").empty();
    $(".foodfact1").empty();
    $(".foodfact2").empty();
    $(".co2fact1").empty();
    $(".co2fact2").empty();
    $(".moneyfact1").empty();
    $(".waterfact1-5x").append("182,667");
    $(".waterfact2-5x").append("1,001");
    $(".foodfact1-5x").append("1,247");
    $(".foodfact2-5x").append("62.48%");
    $(".co2fact1-5x").append("5,743");
    $(".co2fact2-5x").append("57%");
    $(".moneyfact1-5x").append("$654");
  });

  $("#selector5").click(function(){
    $(".waterfact1").empty();
    $(".waterfact2").empty();
    $(".foodfact1").empty();
    $(".foodfact2").empty();
    $(".co2fact1").empty();
    $(".co2fact2").empty();
    $(".moneyfact1").empty();
    $(".waterfact1-5x").append("197,889");
    $(".waterfact2-5x").append("1,084");
    $(".foodfact1-5x").append("1,351");
    $(".foodfact2-5x").append("67.69%");
    $(".co2fact1-5x").append("6,221");
    $(".co2fact2-5x").append("61%");
    $(".moneyfact1-5x").append("$708");
  });

  $("#selector6").click(function(){
    $(".waterfact1").empty();
    $(".waterfact2").empty();
    $(".foodfact1").empty();
    $(".foodfact2").empty();
    $(".co2fact1").empty();
    $(".co2fact2").empty();
    $(".moneyfact1").empty();
    $(".waterfact1-5x").append("206,007");
    $(".waterfact2-5x").append("1,129");
    $(".foodfact1-5x").append("1,403");
    $(".foodfact2-5x").append("70.29%");
    $(".co2fact1-5x").append("6,477");
    $(".co2fact2-5x").append("64%");
    $(".moneyfact1-5x").append("$737");
  });
});

$("#biodiversity-mobile-button-front").click(function(){
  var div = $("#monkey-picture");
  div.animate({right: '500px'}, 700);
  var div = $("#monkey-picture");
  div.fadeOut(1000);
  var div = $("#biodiversity-fact-front");
  div.animate({left: '250px'}, 1000);
  var div = $("#biodiversity-fact-front");
  div.fadeOut(1200);
  var div = $("#biodiversity-fact-header");
  div.animate({right: '225px'}, 1200);
  var div = $("#biodiversity-mobile-button-front");
  div.animate({left: '400px'}, 1000);
  var div = $("#biodiversity-mobile-button-front");
  div.css("color","white");
  var div = $("#biodiversity-mobile-button-front");
  div.fadeOut(1000);
  var div = $(".biodiversity-backdrop");
  div.animate({height: '430px'}, 1000);
  var div = $("#biodiversity-fact-back");
  div.fadeIn(3500);
  var div = $("#biodiversity-mobile-button-back");
  div.fadeIn(3500);
});

$("#biodiversity-mobile-button-back").click(function(){
  var div = $("#biodiversity-fact-back");
  div.fadeOut(500);
  var div = $("#biodiversity-mobile-button-back");
  div.fadeOut(500);
  var div = $(".biodiversity-backdrop");
  div.animate({height: '250px'}, 3000);
  var div = $("#biodiversity-fact-header");
  div.animate({left: '0px'}, 1200);
  var div = $("#biodiversity-fact-front");
  div.fadeIn(1200);
  var div = $("#biodiversity-fact-front");
  div.animate({left: '0px'}, 1000);
  var div = $("#monkey-picture");
  div.fadeIn(3000);
  var div = $("#monkey-picture");
  div.animate({left: '0px'}, 500);
  var div = $("#biodiversity-mobile-button-front");
  div.fadeIn(1000);
  var div = $("#biodiversity-mobile-button-front");
  div.animate({left: '190px'}, 1000);
  var div = $("#biodiversity-mobile-button-front");
  div.css("color","black");
});

$("#pollution-mobile-button-front").click(function(){
  var div = $("#cow-picture");
  div.animate({right: '1000px'}, 700);
  var div = $("#cow-picture");
  div.fadeOut(1000);
  var div = $("#pollution-fact-front");
  div.animate({left: '250px'}, 1000);
  var div = $("#pollution-fact-front");
  div.fadeOut(1200);
  var div = $("#pollution-fact-header");
  div.animate({right: '11rem'}, 1200);
  var div = $("#pollution-mobile-button-front");
  div.animate({left: '400px'}, 1000);
  var div = $("#pollution-mobile-button-front");
  div.css("color","white");
  var div = $("#pollution-mobile-button-front");
  div.fadeOut(1000);
  var div = $(".pollution-backdrop");
  div.animate({height: '430px'}, 1000);
  var div = $("#pollution-fact-back");
  div.fadeIn(3500);
  var div = $("#pollution-mobile-button-back");
  div.fadeIn(3500);
});

$("#pollution-mobile-button-back").click(function(){
  var div = $("#pollution-fact-back");
  div.fadeOut(500);
  var div = $("#pollution-mobile-button-back");
  div.fadeOut(500);
  var div = $(".pollution-backdrop");
  div.animate({height: '250px'}, 3000);
  var div = $("#pollution-fact-header");
  div.animate({left: '0px'}, 1200);
  var div = $("#pollution-fact-front");
  div.fadeIn(1200);
  var div = $("#pollution-fact-front");
  div.animate({left: '0px'}, 1000);
  var div = $("#cow-picture");
  div.fadeIn(3000);
  var div = $("#cow-picture");
  div.animate({left: '0px'}, 500);
  var div = $("#pollution-mobile-button-front");
  div.fadeIn(1000);
  var div = $("#pollution-mobile-button-front");
  div.animate({left: '190px'}, 1000);
  var div = $("#pollution-mobile-button-front");
  div.css("color","black");
});

$("#deforestation-mobile-button-front").click(function(){
  var div = $("#deforestation-picture");
  div.animate({right: '1000px'}, 700);
  var div = $("#deforestation-picture");
  div.fadeOut(1000);
  var div = $("#deforestation-fact-front");
  div.animate({left: '250px'}, 1000);
  var div = $("#deforestation-fact-front");
  div.fadeOut(1200);
  var div = $("#deforestation-fact-header");
  div.animate({right: '13rem'}, 1200);
  var div = $("#deforestation-mobile-button-front");
  div.animate({left: '400px'}, 1000);
  var div = $("#deforestation-mobile-button-front");
  div.css("color","white");
  var div = $("#deforestation-mobile-button-front");
  div.fadeOut(1000);
  var div = $(".deforestation-backdrop");
  div.animate({height: '600px'}, 1000);
  var div = $("#deforestation-fact-back");
  div.fadeIn(3500);
  var div = $("#deforestation-mobile-button-back");
  div.fadeIn(3500);
});

$("#deforestation-mobile-button-back").click(function(){
  var div = $("#deforestation-fact-back");
  div.fadeOut(500);
  var div = $("#deforestation-mobile-button-back");
  div.fadeOut(500);
  var div = $(".deforestation-backdrop");
  div.animate({height:'250px'}, 3000);
  var div = $("#deforestation-fact-header");
  div.animate({left: '0px'}, 1200);
  var div = $("#deforestation-fact-front");
  div.fadeIn(1200);
  var div = $("#deforestation-fact-front");
  div.animate({left: '0px'}, 1000);
  var div = $("#deforestation-picture");
  div.fadeIn(3000);
  var div = $("#deforestation-picture");
  div.animate({left: '0px'}, 500);
  var div = $("#deforestation-mobile-button-front");
  div.fadeIn(1000);
  var div = $("#deforestation-mobile-button-front");
  div.animate({left: '190px'}, 1000);
  var div = $("#deforestation-mobile-button-front");
  div.css("color","black");
});

$("#greenhouse-mobile-button-front").click(function(){
  var div = $("#fish-picture");
  div.animate({right: '1000px'}, 700);
  var div = $("#fish-picture");
  div.fadeOut(1000);
  var div = $("#greenhouse-fact-front");
  div.animate({left: '250px'}, 1000);
  var div = $("#greenhouse-fact-front");
  div.fadeOut(1200);
  var div = $("#greenhouse-fact-header");
  div.animate({right: '11.3rem'}, 1200);
  var div = $("#greenhouse-mobile-button-front");
  div.animate({left: '400px'}, 1000);
  var div = $("#greenhouse-mobile-button-front");
  div.css("color","white");
  var div = $("#greenhouse-mobile-button-front");
  div.fadeOut(1000);
  var div = $(".greenhouse-backdrop");
  div.animate({height: '600px'}, 1000);
  var div = $("#greenhouse-fact-back");
  div.fadeIn(3500);
  var div = $("#greenhouse-mobile-button-back");
  div.fadeIn(3500);
});

$("#greenhouse-mobile-button-back").click(function(){
  var div = $("#greenhouse-fact-back");
  div.fadeOut(500);
  var div = $("#greenhouse-mobile-button-back");
  div.fadeOut(500);
  var div = $(".greenhouse-backdrop");
  div.animate({height:'250px'}, 3000);
  var div = $("#greenhouse-fact-header");
  div.animate({left: '0px'}, 1200);
  var div = $("#greenhouse-fact-front");
  div.fadeIn(1200);
  var div = $("#greenhouse-fact-front");
  div.animate({left: '0px'}, 1000);
  var div = $("#fish-picture");
  div.fadeIn(3000);
  var div = $("#fish-picture");
  div.animate({left: '0px'}, 500);
  var div = $("#greenhouse-mobile-button-front");
  div.fadeIn(1000);
  var div = $("#greenhouse-mobile-button-front");
  div.animate({left: '190px'}, 1000);
  var div = $("#greenhouse-mobile-button-front");
  div.css("color","black");
});

$(".nav-container").hover(function(){
  var div = $(".nav-box");
  div.animate({width:'toggle'});
  var div = $(".nav");
  div.toggleClass("nav-selected");
});

$(".nav").click(function(){
  var div = $(".nav-box");
  div.animate({width:'toggle'});
  var div = $(".nav");
  div.toggleClass("nav-selected");
});

$(".nav").click(function(){
  var div = $(".nav-box");
  div.animate({width:'toggle'});
  var div = $(".nav");
  div.toggleClass("nav-selected");
});

$("#biodiversity-button").click(function(){
  var div = $(".biodiversity");
  div.fadeIn(1);
  var div = $(".section3");
  div.fadeOut(1);
});

$("#biodiversity-back-button").click(function(){
  var div = $(".section3");
  div.fadeIn(1);
  var div = $(".biodiversity");
  div.fadeOut(1);
});

$("#deforestation-button").click(function(){
  var div = $(".deforestation");
  div.fadeIn(1);
  var div = $(".section3");
  div.fadeOut(1);
});

$("#deforestation-back-button").click(function(){
  var div = $(".section3");
  div.fadeIn(1);
  var div = $(".deforestation");
  div.fadeOut(1);
});

$("#greenhouse-button").click(function(){
  var div = $(".greenhouse");
  div.fadeIn(1);
  var div = $(".section3");
  div.fadeOut(1);
});

$("#greenhouse-back-button").click(function(){
  var div = $(".section3");
  div.fadeIn(1);
  var div = $(".greenhouse");
  div.fadeOut(1);
});

$("#pollution-button").click(function(){
  var div = $(".pollution");
  div.fadeIn(1);
  var div = $(".section3");
  div.fadeOut(1);
});

$("#pollution-back-button").click(function(){
  var div = $(".section3");
  div.fadeIn(1);
  var div = $(".pollution");
  div.fadeOut(1);
});

$(".hero-arrow").click(function(){
var y = $(window).scrollTop();
 $('html, body').animate({ scrollTop: y + 820 },1500) 
});

$("#home-footer-home").click(function(){
  var y = $(window).scrollTop();
   $('html, body').animate({ scrollTop: 0 },1000) 
  });

$(".pledge-5x").click(function(){
  var div = $(".pledge-5x");
  div.addClass("animate__animated animate__bounce");
  var div = $(".shade");
  div.fadeIn(5000);
  var div = $(".alert");
  div.slideToggle(2000);
});

$(".pledge-3x").click(function(){
  var div = $(".pledge-3x");
  div.addClass("animate__animated animate__bounce");
  var div = $(".shade");
  div.fadeIn(5000);
  var div = $(".alert");
  div.slideToggle(2000);
});

$(".pledge-week").click(function(){
  var div = $(".pledge-week");
  div.addClass("animate__animated animate__bounce");
  var div = $(".shade");
  div.fadeIn(5000);
  var div = $(".alert");
  div.slideToggle(2000);
});

$(".pledge-2week").click(function(){
  var div = $(".pledge-2week");
  div.addClass("animate__animated animate__bounce");
  var div = $(".shade");
  div.fadeIn(5000);
  var div = $(".alert");
  div.slideToggle(2000);
});

$(".pledge-month").click(function(){
  var div = $(".pledge-month");
  div.addClass("animate__animated animate__bounce");
  var div = $(".shade");
  div.fadeIn(5000);
  var div = $(".alert");
  div.slideToggle(2000);
});

$(".pledge-less").click(function(){
  var div = $(".pledge-less");
  div.addClass("animate__animated animate__bounce");
  var div = $(".shade");
  div.fadeIn(5000);
  var div = $(".alert");
  div.slideToggle(2000);
});

$(".fab").click(function(){
  var div = $(".shade");
  div.fadeOut(1500);
  var div = $(".alert");
  div.slideToggle(2000);
});


$('ul li span').each(function(){
  const This = $(this);
  $({Count: This.text()}).animate(
    {Count: This.parent().attr
    ("data-count")},
    {
      duration: 5000,
      easing: "swing",
      step: function(){
        This.text(Math.floor(this.Count)
        )
      },
      complete: function(){
        This.text(this.Count).css(
          // {color:"blue"}
        )
      }
    }
)});





// $(".slide-toggle").click(function(){
//   $(".nav-box").animate({
//       width: "toggle"
//   });
// });


// $("#biodiversity-mobile-button").click(function(){
//   $('#monkey-picture').animate( {right: '500px'}, 1000 )
// });

   


// $(".start-animation").click( function(){
//   $('.animate').animate( {left: '200px'}, 1000 );
// });





// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 1: Hide a div
$('#button1').on("click", function(){
    $('.hideMe').slideToggle();
  });
  
  // Step 2: Change a color
  $('#button2').on("click", function(){
    $('.cssChange').css("background-color","red");
  });
  
  // Step 3: Append content
  $('#button3').on("click", function(){
    $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ")
  });
  
  // Step 4: Animate a DIV
  // $("button").click( function(){
  //      $('.animate').animate( {left: '1000px'}, 1000 );
  // });
  