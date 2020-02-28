            // кнопка наверх
    function showToTopButton() {
        if ( window.pageYOffset > 500 ) {
           $('.to-top').addClass('visible')
        }
        else {
            $('.to-top').removeClass('visible')
        }
    };


    function scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    }; 



$(window).scroll(function() {
    var theta = $(window).scrollTop() / 10 % Math.PI;
    var thetaSlow = $(window).scrollTop() / 100 % Math.PI;
    $('.rotate-me-fast').css({ transform: 'rotate(' + theta + 'rad)' });
    $('.rotate-me-slow').css({ transform: 'rotate(' + thetaSlow + 'rad)' });
    showToTopButton();
});


$(document).ready(function() {

    // аккордеоны
    $('.js-accordeon').click(function() {
        let accordIsOpen = $(this).parent().hasClass('accordeon_active');
        $('.accordeon').removeClass('accordeon_active');
        $('.accordeon').find('.accordeon__content').slideUp(300);
        if(accordIsOpen) {
            $(this).parent().removeClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideUp(300);
        }else {
            $(this).parent().addClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideDown(300);
        }
    });
    

    $('.js-feature-hover').hover(function() {


        if($(window).width() > 768) {
            var self = $(this);
            var path = $(self).find('.shape');
            var atBeginning = !$(self).hasClass('active')
            if(atBeginning) {
                anime({
                  targets: this.querySelector('.shape'),
                  d: "M179 99.5C179 149.206 129.206 183 79.5 183C29.7944 183 0 126.206 0 76.5C0 26.7944 65.2944 0.5 115 0.5C164.706 0.5 179 49.7944 179 99.5Z",
                  opacity: '1',
                  duration: 300,
                  loop: true,
                  direction: 'normal',
                  easing: "easeOutQuad",
                  loop: false
                });
                $(self).addClass('active');
            } else {
                anime({
                  targets: this.querySelector('.shape'),
                  d: "M180 91.0735C180 140.779 139.706 181.5 90 181.5C40.2944 181.5 0 140.779 0 91.0735C0 41.3679 40.2944 0 90 0C139.706 0 180 41.3679 180 91.0735Z",
                  opacity: '0.5',
                  duration: 300,
                  loop: true,
                  direction: 'normal',
                  easing: "easeOutQuad",
                  loop: false
                });
                $(self).removeClass('active');
            }
        }


    });


    $('.js-rotate-gears-on-hover').hover(function() {
        $('.rocket-body, .rocket-fire').toggleClass('active');
    });

    // гамбургер-меню анимация кнопки
    $('.js-toggle-hamburger').click(function() {
        $(this).toggleClass('is-active');
    });

    // табы
    $('.js-features-tab').click(function() {
        if($(window).width() > 768) {
            $('.js-features-tab').removeClass('active');
            $(this).addClass('active');
            var targetName = $(this).data('target');
            $('.features-tab').hide();
            $('#' + targetName).show();
        }
    });


    // универсальная открывалка: модалки, аккорденоы и пр
    $('.js-opener').click(function(e){
        e.preventDefault();
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

    

    var swiperAboutUs= new Swiper('.js-swiper-about-us', {
        spaceBetween: 20,
        effect: 'fade',
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



    
    $('.js-to-top').click(scrollToTop);
    $(window).scroll(showToTopButton); 


 
});

