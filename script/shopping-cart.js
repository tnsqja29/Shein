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


    $('.category-cont').mouseenter(function () {
        $('.main-category').addClass('is-active')
    })
    $('.category-cont').mouseleave(function () {
        $('.main-category').removeClass('is-active')
    })


    $('.main-category-list').mouseenter(function () {
        $(this).find('.sub-category').addClass('is-active')
    })
    $('.main-category-list').mouseleave(function () {
        $(this).find('.sub-category').removeClass('is-active')
    })


    // 체크박스
    var selectAll = $("#selectAll"); //전체 선택박스 
    var checkBoxes = $('tbody input[type="checkbox"]'); //tbody의 체크박스들
    selectAll.on('change', function () {
        checkBoxes.prop('checked', $(this).prop('checked'));
        //첫 번째 .prop - 체크박스 속성 설정을 의미
        //두 번째 .prop - 체크박스의 현재 선택 상태를 가져오는 것을 의미 
        //SelectAll과 동기화

    });
    checkBoxes.on('change', function () {
        if (!$(this).prop('checked')) {
            selectAll.prop('checked', false);
        }
    });

    
    //전체 선택된 체크박스들 선택해제
    selectAll.prop('checked', false);

    //체크박스 리스트 다시 선택
    checkBoxes = $('tbody input[type="checkbox"]');

})