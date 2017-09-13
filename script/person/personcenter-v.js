Vue.component('base-info', {
    template: `                    <ul class="userdata">
                        <li>
                            <span>真实姓名</span>
                            <div>
                                <input type="text" placeholder="金小程">
                            </div>
                        </li>
                        <li>
                            <span>性别</span>
                            <div>
                                <label class="on sexchoice">
                                    <input type="radio" name='gender'>
                                    男
                                    <img src="../../images/person/gender.jpg">
                                </label>
                                <label class="sexchoice">
                                    <input type="radio" name='gender'>
                                    女
                                    <img src="../../images/person/gender.jpg">
                                </label>
                            </div>
                        </li>
                        <li>
                            <span>居住地</span>
                            <div>
                                <input type="text" placeholder="黄浦区南车站路">
                            </div>
                        </li>
                        <li>
                            <span>公司</span>
                            <div>
                                <input type="text" placeholder="金程教育">
                            </div>
                        </li>
                        <li>
                            <span>职位</span>
                            <div>
                                <input type="text" placeholder="项目经理">
                            </div>
                        </li>
                        <li>
                            <span>手机号</span>
                            <div>
                                <input type="text" placeholder="15248793526">
                            </div>
                        </li>
                        <li>
                            <span>邮箱</span>
                            <div>
                                <input type="text" placeholder="1454596465@qq.com ">
                            </div>
                        </li>
                        <li>
                            <span>简介</span>
                            <div>
                                <textarea rows="2" placeholder="这位同学很懒，木有签名的说～ "></textarea>
                            </div>
                        </li>
                        <button>保存资料</button>
                    </ul>`
})


var app = new Vue({
    el: '#main',
    data: {
        guide: {
            dl1: {
                dt: '个人中心',
                dd: {
                    dd1: '个人资料',
                    dd2: '我的简历',
                    dd3: '我的收藏',
                    dd4: '我的活动',
                    dd5: '我的求职',
                },
                src: '../../images/person/person.png',
            },
            dl2: {
                dt: '账号设置',
                dd: {
                    dd6: '账号设置',
                    dd7: '修改密码',
                    dd8: '绑定手机',
                },
                src: '../../images/person/settings.png',
            },
            dl3: {
                dt: '身份认证',
                dd: {
                    dd9: '立即认证',
                },
                src: '../../images/person/authentication.png',
            },
        },
        content: {
            dd1: {
                name: '个人资料',
                form: {
                    realname: '金小程',
                    gender: 'male',
                    address: '黄浦区南车站路',
                    company: '金程教育',
                    position: '项目经理',
                    phone: '15248793526',
                    email: '1454596465@qq.com',
                    introduce: '这位同学很懒,木有签名的说'
                }
            }
        },
        ddindex: 'dd1',
        dlindex: 'dl1',
        showindex: 'dd1',
    },
    methods: {
        clickdd: function (index) {
            this.ddindex = index;
            this.showindex = index
        },
        addClassdl: function (index) {
            this.dlindex = index
        }
    }
})

