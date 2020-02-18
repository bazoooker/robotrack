


$(document).ready(function() {



	
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

