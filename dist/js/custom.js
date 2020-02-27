
$(window).scroll(function() {
    var theta = $(window).scrollTop() / 10 % Math.PI;
    var thetaSlow = $(window).scrollTop() / 100 % Math.PI;
    $('.rotate-me-fast').css({ transform: 'rotate(' + theta + 'rad)' });
    $('.rotate-me-slow').css({ transform: 'rotate(' + thetaSlow + 'rad)' });
});


$(document).ready(function() {


    $('.js-rotate-gears-on-hover').hover(function() {
        $('.rocket-body, .rocket-fire').toggleClass('active');
    });

    // гамбургер-меню анимация кнопки
    $('.js-toggle-hamburger').click(function() {
        $(this).toggleClass('is-active');
    });


    // универсальная открывалка: модалки, аккорденоы и пр
    $('.js-opener').click(function(){
        var targetName = $(this).data('target-id');                        
        var elementToOpen = $('#' + targetName);
        var isClosed = $(elementToOpen).hasClass('hidden');
        if(isClosed) {
            $(elementToOpen).removeClass('hidden');
        }else {
            $(elementToOpen).addClass('hidden');
        };
    });
    $('.js-closer').click(function(){
        var targetName = $(this).data('target-id');                        
        var elementToClose = $('#' + targetName);
        $(elementToClose).addClass('hidden');
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

