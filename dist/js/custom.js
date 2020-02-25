


$(document).ready(function() {


    // 1. накидывать классы для изменения цветов
    // 2. менять js-ом координаты градиентов


    // гамбургер-меню анимация кнопки
    $('.js-toggle-hamburger').click(function() {
        $(this).toggleClass('is-active');
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
        breakpoints: {
            1200: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
        }
    });

    var swiperCourses = new Swiper('.js-courses-mobile-slider', {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
        768: {
          slidesPerView: 1,
        },
      }
    });



    $('select').niceSelect();


 
});

