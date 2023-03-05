$(function() {
    var tell1 = new Swiper('.tell1', {
            // autoplay: {
            //   delay: 3000,
            //   stopOnLastSlide: false,
            //   disableOnInteraction: false,
            // },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            on: {
                slideChangeTransitionStart: function() {
                    $('.tab0>li').eq(this.activeIndex).addClass('active').siblings().removeClass('active');
                }
            }
        }),
        tell2 = new Swiper('.tell2', {
            // autoplay: {
            //   delay: 3000,
            //   stopOnLastSlide: false,
            //   disableOnInteraction: false,
            // },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            on: {
                slideChangeTransitionStart: function() {
                    $('.tab1>li').eq(this.activeIndex).addClass('active').siblings().removeClass('active');
                }
            }
        }),
        tell3 = new Swiper('.tell3', {
            // autoplay: {
            //   delay: 3000,
            //   stopOnLastSlide: false,
            //   disableOnInteraction: false,
            // },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            on: {
                slideChangeTransitionStart: function() {
                    $('.tab2>li').eq(this.activeIndex).addClass('active').siblings().removeClass('active');
                }
            }
        });
    var num = 0,
        timer = null;
    timer = setInterval(function() {
        num++;
        num %= 3;
        tell1.slideTo(num);
        tell2.slideTo(num);
        tell3.slideTo(num);
    }, 3000);
    $('.tab0>li').each(function() {
        $(this).click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            tell1.slideTo($(this).index());
        })
    })
    $('.tab1>li').each(function() {
        $(this).click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            tell2.slideTo($(this).index());
        })
    })
    $('.tab2>li').each(function() {
        $(this).click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            tell3.slideTo($(this).index());
        })
    });
    var dot0 = $('.dot0'),
        dot1 = $('.dot1'),
        dot2 = $('.dot2'),
        dot3 = $('.dot3'),
        dot4 = $('.dot4'),
        dot5 = $('.dot5'),
        dot6 = $('.dot6'),
        dot7 = $('.dot7'),
        dot8 = $('.dot8');

    function init() {
        dot0.animate({
            top: '320px',
            left: '485px'
        }, 3000, 'linear').animate({
            top: '485px',
            left: '970px'
        }, 3000, 'linear').animate({
            left: '470px',
            top: '450px'
        }, 3000, 'linear').animate({
            left: '235px',
            top: '390px'
        }, 2000).animate({
            left: '0',
            top: '280px'
        }, 3000, 'linear');
        dot1.animate({
            left: '470px',
            top: '450px'
        }, 3000, 'linear').animate({
            left: '235px',
            top: '390px'
        }, 2000).animate({
            left: '0',
            top: '280px'
        }, 3000, 'linear').animate({
            top: '320px',
            left: '485px'
        }, 3000, 'linear').animate({
            top: '485px',
            left: '970px'
        }, 3000, 'linear');

        dot2.animate({
            top: '42px',
            left: '440px'
        }, 5000, 'linear').animate({
            top: '606px',
            left: '750px'
        }, 8000, 'linear').animate({
            top: '732px',
            left: '750px'
        }, 5000, 'linear').animate({
            top: '606px',
            left: '606px'
        }, 5000, 'linear').animate({
            top: '150px',
            left: '350px'
        }, 8000, 'linear').animate({
            top: '-10px',
            left: '352px'
        }, 5000, 'linear');
        dot3.animate({
            top: '732px',
            left: '750px'
        }, 5000, 'linear').animate({
            top: '606px',
            left: '606px'
        }, 5000, 'linear').animate({
            top: '150px',
            left: '350px'
        }, 8000, 'linear').animate({
            top: '-10px',
            left: '352px'
        }, 5000, 'linear').animate({
            top: '42px',
            left: '440px'
        }, 5000, 'linear').animate({
            top: '606px',
            left: '750px'
        }, 8000, 'linear');
        dot4.animate({
            top: '150px',
            left: '350px'
        }, 8000, 'linear').animate({
            top: '-10px',
            left: '352px'
        }, 5000, 'linear').animate({
            top: '42px',
            left: '440px'
        }, 5000, 'linear').animate({
            top: '606px',
            left: '750px'
        }, 8000, 'linear').animate({
            top: '732px',
            left: '750px'
        }, 5000, 'linear').animate({
            top: '606px',
            left: '606px'
        }, 5000, 'linear');
        dot5.animate({
            top: '210px',
            left: '750px'
        }, 15000, 'linear').animate({
            top: '205px',
            left: '935px'
        }, 5000, 'linear').animate({
            top: '315px',
            left: '850px'
        }, 5000, 'linear').animate({
            top: '588px',
            left: '205px'
        }, 15000, 'linear').animate({
            top: '570px',
            left: '108px'
        }, 5000, 'linear').animate({
            top: '476px',
            left: '165px'
        }, 5000, 'linear');
        dot6.animate({
            top: '205px',
            left: '935px'
        }, 5000, 'linear').animate({
            top: '315px',
            left: '850px'
        }, 5000, 'linear').animate({
            top: '588px',
            left: '205px'
        }, 15000, 'linear').animate({
            top: '570px',
            left: '108px'
        }, 5000, 'linear').animate({
            top: '476px',
            left: '165px'
        }, 5000, 'linear').animate({
            top: '210px',
            left: '750px'
        }, 15000, 'linear');
        dot7.animate({
            top: '570px',
            left: '108px'
        }, 5000, 'linear').animate({
            top: '476px',
            left: '165px'
        }, 5000, 'linear').animate({
            top: '210px',
            left: '750px'
        }, 15000, 'linear').animate({
            top: '205px',
            left: '935px'
        }, 5000, 'linear').animate({
            top: '315px',
            left: '850px'
        }, 5000, 'linear').animate({
            top: '588px',
            left: '205px'
        }, 15000, 'linear');
        dot8.animate({
            top: '315px',
            left: '850px'
        }, 5000, 'linear').animate({
            top: '588px',
            left: '205px'
        }, 15000, 'linear').animate({
            top: '570px',
            left: '108px'
        }, 5000, 'linear').animate({
            top: '476px',
            left: '165px'
        }, 5000, 'linear').animate({
            top: '210px',
            left: '750px'
        }, 15000, 'linear').animate({
            top: '205px',
            left: '935px'
        }, 5000, 'linear');

    }

    setInterval(function() {
        init();
    });
});