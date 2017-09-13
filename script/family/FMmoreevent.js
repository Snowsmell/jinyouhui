$(function(){
        $('.eventfilter>div li').on('click',function(){
        $(this).addClass('choiced').siblings().removeClass('choiced')
    })
})