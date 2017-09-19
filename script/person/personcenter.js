$(function () {
    //点击导航栏目切换显示
    $('.guidenav dl dd').on('click', function () {
        //样式显示逻辑
        $(this).addClass('current').siblings().removeClass('current').parent().
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






    //dd1和2中的性别选择
    $('.sexchoice').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
    })
    //保存资料逻辑
    $('.savedata').on('click', function () {
        $('.modal').fadeIn(300).find('button').eq(0).on('click', function () {
            $(this).parents('.modal').fadeOut(300)
        })

        $('.modal').find('button').eq(1).on('click', function () {
            $(this).parents('.modal').fadeOut(300)
            $('.guidenav dd').removeClass('current').eq(7).addClass('current')
            $('.content .box').removeClass('current').eq(7).addClass('current')
        })
    })

    //dd2简历编辑事件,触发来源是h2标签内的a标签时
    $('.dd2  h2 a.edit').on('click', function () {
        $(this).parent().parent().find('.view').hide().siblings('.editing').show()
    })
    //dd2 编辑中的取消事件
    $('.dd2 .canceledit ').on('click', function () {
        $(this).parents('.editing').hide().siblings('.view').show()
    })

    //dd2简历添加事件,触发来源是工作经验和教育经历中时
    $('.dd2 h2 .plus').on('click', function () {
        $(this).parent().parent().find('.editing').show()
    })

    //dd2工作经验假的编辑当前条目，只为了演示效果而已
    $('.experience dt .edit').on('click', function () {
        var that = $(this);
        var clone = $('.experience .editing')[0].cloneNode(true)
        var thisText = $(this).parent().parent()[0];
        console.log(thisText)
        clone.style.display = 'block'
        $(clone).find('.btns .delete').on('click', function () {
            $(this).parents('.editing').remove()
        })
        $(clone).find('.btns button').on('click', function () {
            $(this).parents('.editing').replaceWith($(thisText))

        })

        that.parents('.view').prepend(clone)
        that.parent().parent().remove();

    })
    //textarea限制字数

    $('.dd2').on('input', 'textarea', function () {
        $(this).parent().siblings('.hint').find('span')[0].innerHTML = this.value.length > 1000 ? 1000 : this.value.length;
        if (this.value.length > 1000) {
            this.value = this.value.substr(0, 1000)
        }

    })




    //dd3文章活动职位切换
    $('.dd3>ul li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        $('.dd3>div>div').eq($(this).index()).addClass('current').
            siblings().removeClass('current')
    })

    //dd4切换
    $('.dd4>ul li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        $('.dd4>div>div').eq($(this).index()).addClass('current').
            siblings().removeClass('current')
    })
    //dd5切换
    $('.dd5>ul li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current')
        $('.dd5>div>div').eq($(this).index()).addClass('current').
            siblings().removeClass('current')
    })


    //dd8是否是金程学员切换
    $('.dd8 .choice span').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
        if ($(this).attr('id') == 'isgf') {
            $('.dd8 .isgf').addClass('on')
        } else {
            $('.dd8 .isgf').removeClass('on')
        }
    })


    //密码是否可见
    $('.dd6 .psd label span').on('click', function () {
        $(this).parent().parent().toggleClass('cansee')
        if ($(this).siblings('input').attr('type') == 'password') {
            $(this).siblings('input')[0].type = 'text'
        } else {
            $(this).siblings('input')[0].type = 'password'
        }
    })


    //9.19号年月选择组件使用
    document.querySelector('.experience .starttime').addEventListener('click', function () {
        var date1 = new DateSelect(this)
        date1.init({
            num: 1,
            min: 1990,
            max: 2017,
            w: 250,
            h: 165
        })
    })
    document.querySelector('.experience .endtime').addEventListener('click', function () {
        var date2 = new DateSelect(this)
        date2.init({
            num: 2,
            min: 1990,
            max: 2017,
            w: 250,
            h: 165
        })
    })

})