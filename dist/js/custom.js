


$(document).ready(function() {


    // 1. накидывать классы для изменения цветов
    // 2. менять js-ом координаты градиентов





    $('.js-change-page-color').click(function() {
        
        // $('#first').addClass('green');
        // setTimeout(function() {
        //     $('#paint0_linear').attr('x1', '577.5');
        //     $('#paint0_linear').attr('y1', '-124');
        //     $('#paint0_linear').attr('x2', '-176.967');
        //     $('#paint0_linear').attr('y2', '-110.441');
        // }, 1000);
    });



	
	// появление деко	
    $('.js-fancy-heading').each(function() {
        if( $(this).visible(true) ) {  
            $(this).addClass('lines-added')
        }
    });

    

    var swiperHero = new Swiper('.js-swiper-about-us', {
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiperTeam = new Swiper('.js-swiper-team', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    $('select').niceSelect();


 
});

