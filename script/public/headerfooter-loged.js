var header = 
    '<header>'+
        '<div class="headbox">'+
            '<i class="icon-navlist"></i>'+
            '<h1>'+
                '<img src="../../images/public/logo.png" alt="金程金友汇">'+
            '</h1>'+
                '<div class="register loged">'+
                    '<div class="login">'+
                        '<a href="javascript:;">登录</a>'+
                        '<div>'+
                            '<a href="javascript:;">个人登录</a>'+
                            '<a href="javascript:;">企业登录</a>'+
                        '</div>'+
                    '</div>'+
                    '<div class="singup">'+
                        '<a href="javascript:;">注册</a>'+
                        '<div>'+
                            '<a href="javascript:;">个人注册</a>'+
                            '<a href="javascript:;">企业注册</a>'+
                        '</div>'+
                    '</div>'+
                    '<div class="userinfo">'+
                        '<a href="javascript:;">'+
                            '<img src="../../images/public/userinfo.png" alt="用户头像">'+
                        '</a>'+
                        '<div>'+
                            '<a href="javascript:;">个人信息</a>'+
                            '<a href="javascript:;">退出登录</a>'+
                            '<a href="javascript:;">我觉得应</a>'+
                            '<a href="javascript:;">该有些啥</a>'+
                        '</div>'+
                    '</div>'+                    
                '</div>'+            
            '<ul>'+
                '<li class=""><a href="../../html/index/index.html">首页</a></li>'+
                '<li><a href="../../html/family/FMindex.html">金家族</a></li>'+
                '<li><a href="../../html/friendJob/FJindex.html">友职场</a></li>'+
                '<li><a href="../../html/service/service.html">汇服务</a></li>'+
                '<li class="search">'+
                    '<input type="text" placeholder="搜索你想知道的">'+
                    '<a href="javascript:;"><i class="icon-search"></i></a>'+
                '</li>'+
            '</ul>'+
        '</div>'+
    '</header>';

    document.body.insertAdjacentHTML("afterBegin",header)

var footerText = 
        '<div class="footbox">'+
        '<div class="text">'+
            '<dl>'+
                '<dt>新手指南</dt>'+
                '<dd><a href="javascript:;">注册流程</a></dd>'+
                '<dd><a href="javascript:;">活动报名</a></dd>'+
                '<dd><a href="javascript:;">简历投递</a></dd>'+
                '<dd><a href="javascript:;">积分说明</a></dd>'+
            '</dl>'+
            '<dl>'+
                '<dt>关于我们</dt>'+
                '<dd><a href="javascript:;">金友汇简介</a></dd>'+
                '<dd><a href="javascript:;">联系我们</a></dd>'+
                '<dd><a href="javascript:;">市场合作</a></dd>'+
                '<dd><a href="javascript:;">投诉与建议</a></dd>'+
            '</dl>'+
            '<dl>'+
                '<dt>常见问题</dt>'+
                '<dd><a href="javascript:;">会员分类</a></dd>'+
                '<dd><a href="javascript:;">会员福利</a></dd>'+
                '<dd><a href="javascript:;">企业注册审核</a></dd>'+
                '<dd><a href="javascript:;">忘记账号密码</a></dd>'+
            '</dl>'+
        '</div>'+
        '<div class="weixin">'+
            '<div>'+
                '<dl>'+
                    '<dt>官方微信</dt>'+
                    '<dd>'+
                        '<img src="../../images/public/gfwx.png" alt="官方微信">'+
                    '</dd>'+
                '</dl>'+
            '</div>'+
            '<div>'+
                '<dl>'+
                    '<dt>咨询微信</dt>'+
                    '<dd>'+
                        '<img src="../../images/public/zxwx.png" alt="咨询微信">'+
                    '</dd>'+
                '</dl>'+
            '</div>'+
        '</div>'+
    '</div>';
    var footer = document.createElement('footer');
	footer.innerHTML = footerText;
	document.body.appendChild(footer)
