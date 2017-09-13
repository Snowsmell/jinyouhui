$(function () {
    //虽然很蠢，但是先把基本的写了
    $('.stepone button').on('click', function () {
        $('.nav span').eq(1).addClass('current').siblings().removeClass('current')
        $('.steptwo').addClass('current').siblings().removeClass('current')
    })

    $('.steptwo button').eq(0).on('click', function () {
        $('.nav span').eq(0).addClass('current').siblings().removeClass('current')
        $('.stepone').addClass('current').siblings().removeClass('current')
    })
    $('.steptwo button').eq(1).on('click', function () {
        $('.nav span').eq(2).addClass('current').siblings().removeClass('current')
        $('.stepthree').addClass('current').siblings().removeClass('current')
    })
    $('.stepthree button').eq(1).on('click', function () {
        $('.nav span').eq(0).addClass('current').siblings().removeClass('current')
        $('.stepone').addClass('current').siblings().removeClass('current')
    })

    document.querySelector('.steptwo textarea').addEventListener('focus', function () {
        document.querySelector('.steptwo .note').style.display = 'none'
    })
    document.querySelector('.steptwo textarea').addEventListener('blur', function () {
        if ($.trim(this.value) == '') {
            document.querySelector('.steptwo .note').style.display = 'block'
        }
    })
})