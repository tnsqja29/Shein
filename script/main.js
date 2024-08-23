$(function () {
    $('.header-list.first').on('click', function () {
        $(this).find('.header-link').addClass('is-active')
        $(this).siblings('.header-list').find('.header-link').removeClass('is-active')
        $('.category-circle').addClass('fashion').removeClass('life')
        $('.header-category').removeClass('life')
    })
    $('.header-list.second').on('click', function () {
        $(this).find('.header-link').addClass('is-active')
        $(this).siblings('.header-list').find('.header-link').removeClass('is-active')
        $('.category-circle').addClass('life').removeClass('fashion')
        $('.header-category').addClass('life')
    })

    var x = 0
    $('.right-arrow').on('click', function () {
        if (x < 3) {
            x++;
            $('.page').text(x + 1)
        } else {
            x = 0;
            $('.page').text(x + 1)
        }
        var sp = x * (-100) + "%"
        $('.swiper').animate({
            left: sp
        }, 400)
    })

    $('.left-arrow').on('click', function () {
        if (x < 4 && x > 0) {
            x--;
            $('.page').text(x + 1)
        } else {
            x = 0;
            $('.page').text(x + 1)
        }

        var sp = x * (-100) + "%"
        $('.swiper').animate({
            left: sp
        }, 400)
    })


    setInterval(function() {
        if (x < 3) {
            x++;
            $('.page').text(x + 1)
        } else {
            x = 0;
            $('.page').text(x + 1)
        }
        var sp = x * (-100) + "%"
        $('.swiper').animate({
            left: sp
        }, 400)
    },3000)

    

    var y = 0;
    var z = 0;

    var mo_interval
    var mo_interval2
    $('.brand-link.first').hover(function() {
        $(this).stop().animate({
            left: (-100) + "%"
        },300)
        y = 1;
        mo_interval = setInterval(function() {
            if (y < 3) {
                y++;
            } else {
                y = 0;
            }

            var bp = y * (-100) + "%"
            $('.brand-link.first').animate({
                left: bp
            },300)
        },1000)
    }, function() {
        y = 0;
        $('.brand-link.first').animate({
            left: y
        },300)
        clearInterval(mo_interval)
    })



    $('.brand-link.second').hover(function() {
        $(this).stop().animate({
            left: (-100) + "%"
        },300)
        y = 1;
        mo_interval = setInterval(function() {
            if (y < 3) {
                y++;
            } else {
                y = 0;
            }

            var bp = y * (-100) + "%"
            $('.brand-link.second').animate({
                left: bp
            },300)
        },1000)
    }, function() {
        y = 0;
        $('.brand-link.second').animate({
            left: y
        },300)
        clearInterval(mo_interval)
    })

    $('.brand-link.third').hover(function() {
        $(this).stop().animate({
            left: (-100) + "%"
        },300)
        y = 1;
        mo_interval = setInterval(function() {
            if (y < 3) {
                y++;
            } else {
                y = 0;
            }

            var bp = y * (-100) + "%"
            $('.brand-link.third').animate({
                left: bp
            },300)
        },1000)
    }, function() {
        y = 0;
        $('.brand-link.third').animate({
            left: y
        },300)
        clearInterval(mo_interval)
    })

    $('.brand-link.fourth').hover(function() {
        $(this).stop().animate({
            left: (-100) + "%"
        },300)
        y = 1;
        mo_interval = setInterval(function() {
            if (y < 3) {
                y++;
            } else {
                y = 0;
            }

            var bp = y * (-100) + "%"
            $('.brand-link.fourth').animate({
                left: bp
            },300)
        },1000)
    }, function() {
        y = 0;
        $('.brand-link.fourth').animate({
            left: y
        },300)
        clearInterval(mo_interval)
    })

    $('.brand-link.fifth').hover(function() {
        $(this).stop().animate({
            left: (-100) + "%"
        },300)
        y = 1;
        mo_interval = setInterval(function() {
            if (y < 3) {
                y++;
            } else {
                y = 0;
            }

            var bp = y * (-100) + "%"
            $('.brand-link.fifth').animate({
                left: bp
            },300)
        },1000)
    }, function() {
        y = 0;
        $('.brand-link.fifth').animate({
            left: y
        },300)
        clearInterval(mo_interval)
    })

    $('.close').on('click',function() {
        $('.popup-fixed').addClass('is-hide');
    })


    $('.remote-btn.top').on('click', function() {
        $('html, body').animate({scrollTop:0},500);
        return false;
    })

    $('.remote-btn.bottom').on('click', function() {
        $('html, body').animate({scrollTop:document.body.scrollHeight},500);
        return false;
    })

    $('.category-cont').mouseenter(function() {
        $('.main-category').addClass('is-active')
    })
    $('.category-cont').mouseleave(function() {
        $('.main-category').removeClass('is-active')
    })

    
    $('.main-category-list').mouseenter(function() {
        $(this).find('.sub-category').addClass('is-active')
    })
    $('.main-category-list').mouseleave(function() {
        $(this).find('.sub-category').removeClass('is-active')
    })

    $('.remote-btn.ai').on('click', function() {
        $('.chat').addClass('is-active')
        $('.remote-btn.ai').css('pointer-events', 'none')
    })

    $('.chat-close').on('click', function() {
        $('.chat').removeClass('is-active')
        $('.remote-btn.ai').css('pointer-events', '')
    })

    var dragFlag = false;
    var x, y, pre_x, pre_y;

    $('.shop-list').mousedown(
        function (e) {
            
            dragFlag = true;
            var obj = $(this);
            x = obj.scrollLeft();
            y = obj.scrollTop();
            

            pre_x = e.screenX;
            pre_y = e.screenY;
        }
    );

    $('.shop-list').mousemove(
        function (e) {
            if (dragFlag) {
                $('.shop-link').addClass('is-active')
                var obj = $(this);
                obj.scrollLeft(x+ 2.2*(pre_x-e.screenX));
                obj.scrollTop(y - e.screenY + pre_y);
                return false;     
            }
        }
    );

    $('.shop-list').mouseup(
        function () {
            $('.shop-link').removeClass('is-active')
            dragFlag = false;
        }
    );


    $('.fashion-list').mousedown(
        function (e) {
            
            dragFlag = true;
            var obj = $(this);
            x = obj.scrollLeft();
            y = obj.scrollTop();
            

            pre_x = e.screenX;
            pre_y = e.screenY;
        }
    );

    $('.fashion-list').mousemove(
        function (e) {
            if (dragFlag) {
                $('.shop-link').addClass('is-active')
                var obj = $(this);
                obj.scrollLeft(x+ 2.2*(pre_x-e.screenX));
                obj.scrollTop(y - e.screenY + pre_y);
                return false;     
            }
        }
    );

    $('.fashion-list').mouseup(
        function () {
            $('.shop-link').removeClass('is-active')
            dragFlag = false;
        }
    );


    $('.brand-list').mousedown(
        function (e) {
            
            dragFlag = true;
            var obj = $(this);
            x = obj.scrollLeft();
            y = obj.scrollTop();
            

            pre_x = e.screenX;
            pre_y = e.screenY;
        }
    );

    $('.brand-list').mousemove(
        function (e) {
            if (dragFlag) {
                $('.shop-link').addClass('is-active')
                var obj = $(this);
                obj.scrollLeft(x+ 2.2*(pre_x-e.screenX));
                obj.scrollTop(y - e.screenY + pre_y);
                return false;     
            }
        }
    );

    $('.brand-list').mouseup(
        function () {
            $('.shop-link').removeClass('is-active')
            dragFlag = false;
        }
    );

    var q = 0
    $('.mo-right-arrow').on('click', function () {
        if (q < 2) {
            q++;
            $('.mo-page').text(q + 1)
        } else {
            q = 0;
            $('.mo-page').text(q + 1)
        }
        var msp = q * (-100) + "%"
        $('.mo-slider-list').animate({
            left: msp
        }, 400)
    })

    $('.mo-left-arrow').on('click', function () {
        if (q < 3 && q > 0) {
            q--;
            $('.mo-page').text(q + 1)
        } else {
            q = 0;
            $('.mo-page').text(q + 1)
        }

        var msp = q * (-100) + "%"
        $('.mo-slider-list').animate({
            left: msp
        }, 400)
    })

    setInterval(function() {
        if (q < 2) {
            q++;
            $('.mo-page').text(q + 1)
        } else {
            q = 0;
            $('.mo-page').text(q + 1)
        }
        var msp = q * (-100) + "%"
        $('.mo-slider-list').animate({
            left: msp
        }, 400)
    },3000)

    
    

    
})



