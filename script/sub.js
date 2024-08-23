$(function() {
    var x = 0
    $('.slide-btn.right').on('click', function () {
        if (x < 4) {
            x++;
        } else {
            x = 0;
        }
        var sp = x * (-100) + "%"
        $('.slide-list').animate({
            left: sp
        }, 400)
    })

    $('.slide-btn.left').on('click', function () {
        if (x < 5 && x > 0) {
            x--;
        } else {
            x = 4;
        }

        var sp = x * (-100) + "%"
        $('.slide-list').animate({
            left: sp
        }, 400)
    })
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

    $('.color-item').on('click', function () {
        $(this).find('img').addClass('is-active')
        $(this).siblings('.color-item').find('img').removeClass('is-active')
    })

    $('.size-item').on('click', function() {
        $(this).addClass('is-active')
        $(this).siblings('.size-item').removeClass('is-active')
    })

    $('.color-link.first').on('click' ,function() {
        $('.slide-list.first').addClass('is-active')
        $('.slide-list.first').siblings('.slide-list').removeClass('is-active')
    })
    $('.color-link.second').on('click' ,function() {
        $('.slide-list.second').addClass('is-active')
        $('.slide-list.second').siblings('.slide-list').removeClass('is-active')
    })
    $('.color-link.third').on('click' ,function() {
        $('.slide-list.third').addClass('is-active')
        $('.slide-list.third').siblings('.slide-list').removeClass('is-active')
    })
    $('.color-link.fourth').on('click' ,function() {
        $('.slide-list.fourth').addClass('is-active')
        $('.slide-list.fourth').siblings('.slide-list').removeClass('is-active')
    })
    $('.color-link.fifth').on('click' ,function() {
        $('.slide-list.fifth').addClass('is-active')
        $('.slide-list.fifth').siblings('.slide-list').removeClass('is-active')
    })

    $('.detail-item').on('click', function() {
        $(this).find('.detail-link').addClass('is-active')
        $(this).siblings('.detail-item').find('.detail-link').removeClass('is-active')
    })

    $('.detail-item.size').on('click', function() {
        $('.size-inner').addClass('is-active')
        $('.review-inner').removeClass('is-active')
        $('.shop-inner').removeClass('is-active')
    })
    $('.detail-item.review').on('click', function() {
        $('.review-inner').addClass('is-active')
        $('.size-inner').removeClass('is-active')
        $('.shop-inner').removeClass('is-active')
    })
    $('.detail-item.recommend').on('click', function() {
        $('.shop-inner').addClass('is-active')
        $('.review-inner').removeClass('is-active')
        $('.size-inner').removeClass('is-active')
    })

})