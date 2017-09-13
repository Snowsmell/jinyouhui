$(function(){
    //密码可见
    $('.seepsd').on('click',function(){
        $(this).toggleClass('cansee')
        if($(this).hasClass('cansee')){
            $(this).siblings('input')[0].type = 'text'
        }else{
            $(this).siblings('input')[0].type = 'password'
        }
    })

    $('#btn1').on('click',function(){
        $('.stepone').removeClass('current').siblings('.steptwo').addClass('current')
        $('span#user')[0].innerHTML = $('.usermsg input')[0].value ||'随便的数字'
    })
    $('#btn2').on('click',function(){
        $('.steptwo').removeClass('current').siblings('.stepthree').addClass('current')
    })    

    $('.backstep').on('click',function(){
        $('.steptwo').removeClass('current').siblings('.stepone').addClass('current')
    })

    //限制1分钟1条验证码
    var timelimit = 60,
        timer = null;
    document.querySelector('.sendmsg button').addEventListener('click',function(){        
        $(this).attr('disabled',"true")
        this.style.color = "#bbb"
        var that = this;        
        setInterval(function(){
            timelimit--;            
            that.innerHTML = '重新发送 '+timelimit
            if(timelimit==0){
                timelimit=60
                $(that).removeAttr('disabled')
                this.style.color = "#666"
                clearInterval(timer)
            }
        },1000)
    })
})