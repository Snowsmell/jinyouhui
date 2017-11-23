$(function () {
    function modal() {
        //个人登录注册显示
        $('.register>div>div a:first-of-type').on('click', function () {
            $('.modal').fadeIn(300)
            $('.modal .person').show().siblings().hide()
            if ($(this).text() == '个人注册') {
                regP()
            } else {
                logP()
            }
        })
        //个人内部切换
        $('.person .guide span').on('click', function () {
            if($(this).text()=='登录'){
                logP()
                
            }else{
                regP()                
            }
        })

        //个人登录注册成功后弹窗
        $('.personsuccess').on('click',function(){
            $('.modal .complete').show().siblings().hide()
        })


        //个人登录注册切换
        function regP() {
            $('.person .guide span').eq(1).addClass('on').siblings().removeClass('on')
            $('.person .reg').addClass('on').siblings().removeClass('on')
        }
        function logP() {
            $('.person .guide span').eq(0).addClass('on').siblings().removeClass('on')
            $('.person .log').addClass('on').siblings().removeClass('on')
        }
        


        //企业登录注册显示
        $('.register>div>div a:last-of-type').on('click', function () {
            $('.modal').fadeIn(300)
            $('.modal .company').show().siblings().hide()
            if ($(this).text() == '企业注册') {
                regC()
            } else {
                logC()
            }
        })

        //企业内部切换
        $('.company .guide span').on('click', function () {
            if($(this).text()=='登录'){
                logC()                
            }else{
                regC()                
            }
        })

        //企业注册后认证邮箱
        $('.companyReg').on('click',function(){
            $('.modal .mailconfirm').show().siblings().hide()
        })
        //企业登录注册切换
        function regC() {
            $('.company .guide span').eq(1).addClass('on').siblings().removeClass('on')
            $('.company .stepone').addClass('on').siblings('.log').removeClass('on')
        }
        function logC() {
            $('.company .guide span').eq(0).addClass('on').siblings().removeClass('on')
            $('.company .log').addClass('on').siblings('div').removeClass('on')
        }

        //企业注册步骤切换
        $('#stepone').on('click', function () {

            var reg = /^[a-zA-Z0-9_\-]{1,}@[a-zA-Z0-9_\-]{1,}\.[a-zA-Z0-9_\-.]{1,}$/;
            if (!reg.test($("#RegEmail").val())) {
                $("#FormRegCompanyStepOne .msg").html("*请输入正确的邮箱");
                return;
            }
            else {
                $("#FormRegCompanyStepOne .msg").html("");
            }

            if ($("#CompanyCheck").is(":checked")) {
                $(this).parents('.stepone').removeClass('on').parent().find('.steptwo').addClass('on')
            }
            else {
                alert("请勾选服务声明！");
            }
        })
        $('#backToOne').on('click',function(){
            $(this).parents('.steptwo').removeClass('on').parent().find('.stepone').addClass('on')            
        })
        //关闭
        $('.closebtn').on('click', function () {
            $('.modal').fadeOut(300)
        })
        //密码是否可见
        $('.modal .psd span').on('click',function(){
            $(this).parent().toggleClass('cansee')
            if($(this).siblings('input').attr('type')=='password'){
                $(this).siblings('input')[0].type = 'text'
            }else{
                $(this).siblings('input')[0].type = 'password'
            }
            
        })
    }
    modal();

    $(document).on("click", "#GetRegMsg", function () {
        SendMobileMsg($("#RegPhone").val(), $("#RegImgValidCode").val(), $(this), function (msg) { alert(msg); });
    })
})


function loginP() {
    $(".login>div>a:eq(0)").click();
    scrollTo(0, 0);
}
function loginC() {
    $(".login>div>a:eq(1)").click();
    scrollTo(0, 0);
}


function SubRegPerson() {
    if ($('#RegAgreeStatus').is(':checked')) {
        $.ajax({
            type: "post",
            url: "/userajax/subregperson",
            data: $("#FormRegPerson").serializeObject(),
            dataType: "json",
            success: function (result) {
                if (result.Status == 1) {
                    alert("您已经有金程账号，请使用金程账号直接登录即可！");
                    location.href = location.href;
                }
                else if (result.Status == 2) {
                    alert("注册账号成功！");
                    location.href = location.href;
                }
                else {
                    alert(result.Message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
    else {
        alert("请勾选服务声明！");
    }
}
function SubRegCompany() {
        $.ajax({
            type: "post",
            url: "/userajax/subregcompany",
            data: $.extend(true, $("#FormRegCompanyStepOne").serializeObject(), $("#FormRegCompanyStepTwo").serializeObject()),
            dataType: "json",
            success: function (result) {
                if (result.Status == 1) {
                    alert("注册成功");
                    location.href = location.href;
                } else {
                    alert(result.Message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
}