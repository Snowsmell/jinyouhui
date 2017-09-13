$(function(){
    $('.job .collect').on('click',function(){
        $(this).toggleClass('on')
    })


    //投个简历弹出层
    $('.job .pushcv').on('click',function(){
        if($(this).attr('data-if')=='false'){
            $('.modal').fadeIn(300)
        }else{
            alert('您已投递过该职位')
        }
    })
    $('.modal .closebtn').on('click',function(){
        if($(this).parent().hasClass('success')){
             $('.job .pushcv').attr('data-if',true)
        }
        $('.modal').fadeOut(300);

    })
})