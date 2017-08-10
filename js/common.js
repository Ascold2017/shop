;"use strict";
$(document).ready(function(){
   // Пользовательские функции 
   $(".top_slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
       prevArrow: '<button type="button" class="arrow prev"><img src="img/arrowprev.png" alt="previos" /></button>',
       nextArrow: '<button type="button" class="arrow next"><img src="img/arrownext.png" alt="next" /></button>',
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        
      ]
   });
    
    $(".partners_slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
         nextArrow:'<button type="button" class="arrownext"><img src="img/arrownextblack.png" alt="next" /></button>',
    });
    $(".product_slider").slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
       prevArrow: '<button type="button" class="product__arrow prev"><img src="img/arrowprevsmall.png" alt="previos" /></button>',
       nextArrow: '<button type="button" class="product__arrow next"><img src="img/arrownextsmall.png" alt="next" /></button>',
    });
    
});
