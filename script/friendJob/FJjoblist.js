$(function(){
    $('.main .more').on('click',function(){
        $(this).parent().toggleClass('show')
    })

    //地区选择有疑问
    $('.job-filter>div li').on('click',function(){
        $(this).addClass('choiced').siblings().removeClass('choiced')
    })

    //仅仅是看上去的翻页
    $('.prevpage').on('click',function(){
        var nowpage = parseInt($('.nowpage').text())
        if(nowpage ==1){
            return
        }else{
            $('.nowpage').text(--nowpage)
        }
    })
    $('.nextpage').on('click',function(){
        var nowpage = parseInt($('.nowpage').text())
        if(nowpage ==parseInt($('.allpage').text())){
            return
        }else{
            $('.nowpage').text(++nowpage)
        }
    })    
})