$(function () {
    //收藏
    $(' .collect').on('click', function () {
        $(this).toggleClass('on')
    })

    //刷新
    $('.fresh').on('click',function(){
        var that = $(this)
        $(this).addClass('on');
        setTimeout(function(){
           that.removeClass('on')
        },1200)
    })

    
})