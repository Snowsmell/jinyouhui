$(function () {
    //点击导航栏目切换显示
    $('.guidenav dl dd').on('click', function () {
        //样式显示逻辑
        $(this).addClass('current').siblings().
            removeClass('current').parent().
            siblings().find('dd').removeClass('current');
        var index = $(this).attr('data-index')
        $('.content .box').eq(index - 1).addClass('current').siblings('.box').removeClass('current')
    })
    $('.guidenav dl dt').on('click', function () {
        $(this).parent().toggleClass('phoneshow').siblings().removeClass('phoneshow')
        $(this).siblings('dd').on('click', function () {
            $(this).parent().removeClass('phoneshow')
        })
    })


    //dd2中未认证时点击到认证处
    $('.dd2 .uncertified').on('click', 'button', function () {
        $('.guidenav dd').removeClass('current').eq(7).addClass('current')
        $('.content .box').removeClass('current').eq(7).addClass('current')
    })

    //dd2预览和编辑间的切换
    $('.dd2 .jobpreview').on('click', function () {
        $('.dd2 .job').hide().siblings('.preview').show().
            find('.jobedit').on('click', function () {
                $(this).parents('.preview').hide().siblings('.job').show()
            })
    })

    //dd3,dd4职位简历管理，中间切换栏目的显示逻辑
    $('.division span').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        $(this).parent().siblings('.information').find('>div').
            eq($(this).index()).addClass('current').siblings().
            removeClass('current')
    })
    //全选逻辑
    $('.selectall').on('click', function () {
        $(this).parent().siblings('table').find('input[type=checkbox]').attr('checked', true)
    })
    //查看简历逻辑
    $('#seeresume').on('click', function () {
        if (!$(this).parent().siblings('table').find('input:checked').length) {
            alert('请选择至少一份简历')
            return
        }
        window.open("../../html/person/resume.html")
    })




    //密码是否可见
    $('.dd5 .psd label span').on('click', function () {
        $(this).parent().parent().toggleClass('cansee')
        if ($(this).siblings('input').attr('type') == 'password') {
            $(this).siblings('input')[0].type = 'text'
        } else {
            $(this).siblings('input')[0].type = 'password'
        }
    })

    //dd8认证逻辑
    $('.dd8 #file').change(function (e) {
        //图片显示
        var file = document.getElementById('file')
        var src = [];
        if (file.files && file.files.length > 0) {
            for (var i = 0; i < file.files.length; i++) {
                src.push(window.URL.createObjectURL(file.files[i]))
            }
            $('#identify').removeAttr('disabled')
        }
        src.forEach(function (v, i) {
            var div = document.createElement('div')
            var img1 = document.createElement('img')
            img1.src = v;
            $('.uploadpic')[0].appendChild(img1)
        })
    })
    $('#identify').on('click', function () {
        $(this).attr('disabled', 'disabled').html('认证中...')
        //如果日后要补充上传逻辑，就在这里
    })
    //跳转到发布职位
    $('.content').on('click', '.addnewjob', function () {
        $('.guidenav dd').removeClass('current').eq(1).addClass('current')
        $('.content .box').removeClass('current').eq(1).addClass('current')
    })

})