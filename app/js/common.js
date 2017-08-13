;"use strict";
$(document).ready(function(){
   // Пользовательские функции 
    
   $(".top_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
       prevArrow: '<button type="button" class="arrow prev"><img src="img/arrowprev.png" alt="previos" /></button>',
       nextArrow: '<button type="button" class="arrow next"><img src="img/arrownext.png" alt="next" /></button>',
      
     
   });
    
    $(".partners_slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<button type="button" class="arrowprev"><img src="img/arrownextblack.png" alt="prev" /></button>',
         nextArrow:'<button type="button" class="arrownext"><img src="img/arrownextblack.png" alt="next" /></button>',
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          },
            
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
      ]
    });
    $(".product_slider").slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<button type="button" class="product__arrow prev"><img src="img/arrowprevsmall.png" alt="previos" /></button>',
        nextArrow: '<button type="button" class="product__arrow next"><img src="img/arrownextsmall.png" alt="next" /></button>',
        responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        ],
    });
    
    $(".mobile_menu_list").slicknav({
        prependTo: '.nav_mobile',
        appentTo: '.searchform',
    });
    
    $(function() {
        $( "#slider" ).slider({
              range: true,
              min: 120,
              max: 28500,
              values: [ 120, 28500 ],
              range: true,
            stop: function(event, ui) {
                $(".price_form__input.start" ).val($( "#slider" ).slider( "values", 0 ));
                $(".price_form__input.end" ).val($( "#slider" ).slider( "values", 1 ));
            },
            slide: function(event, ui){
                $(".price_form__input.start" ).val($( "#slider" ).slider( "values", 0 ));
                $(".price_form__input.end" ).val($("#slider" ).slider( "values", 1 ));
             }
        });
        
        jQuery(".price_form__input.start").change(function(){

           var value1=jQuery(".price_form__input.start").val();
           var value2=jQuery(".price_form__input.end").val();

           if(parseInt(value1) > parseInt(value2)){
               value1 = value2;
               jQuery(".price_form__input.start").val(value1);
           }
           jQuery("#slider").slider("values",0,value1);	
       });

	
        jQuery(".price_form__input.end").change(function(){

            var value1=jQuery(".price_form__input.start").val();
            var value2=jQuery(".price_form__input.end").val();

            if (value2 > 1000) { value2 = 1000; jQuery(".price_form__input.end").val(1000)}

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                jQuery(".price_form__input.end").val(value2);
            }
            jQuery("#slider").slider("values",1,value2);
        });

    } );
    // фильтрация ввода в поля
	jQuery('.price_form__input, .price_form__start, .price_form__end, .form_counter__input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});
    
    $(function(){
        $('.form_counter__button.less').click(function () {
                var $input = $(this).parent().find('.form_counter__input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.form_counter__button.more').click(function () {
                var $input = $(this).parent().find('.form_counter__input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
    });
    
    $(".product_photo").fancybox();
});
