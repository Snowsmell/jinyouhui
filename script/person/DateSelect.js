//金友汇中出现的时间选择
(function () {

    //构造函数
    function dateSelect(ele) {
        this.ele = ele
        this.limit = {
            min: 1970,
            max: 2017,
            w:300,
            h:200,
        }
    }

    dateSelect.prototype.flag = {}//旗子，防止多次初始化创建div

    dateSelect.prototype.init = function (option) {
        //混合区间年份
        this.limit = extend(this.limit, option)

        //判断逻辑，点击后只运行一次init()
        //由于flag是原型上的，所以为了区分开不同实例，利用传入参数时候的num来区分成
        //flag对象上的不同属性，这样再多的实例也不会互相干扰了
        if(this.flag[option.num]==undefined){
            this.flag[option.num]=true
        }
        if(this.flag[option.num]){
            //只进行一次的初期化create()逻辑
            this.create()
            this.close()
            this.choose()
            this.flag[option.num] = false
        }
        this.ele.querySelector('.box').style.display = 'block'
    }
    //创建
    dateSelect.prototype.create = function(){
        console.log(this.ele)
        this.ele.innerHTML='<span class="sel-year"></span>/<span class="sel-month"></span>'
        var div1 = document.createElement('div')//大盒子        
        var ul1 = document.createElement('ul')//放年份
        var ul2 = document.createElement('ul')//放月份
        div1.className = 'box'
        ul1.className = 'yearbox'
        ul2.className = 'monthbox'
        //依据区间值创建li,由于比较多，就考虑字符串拼接了
        //年份的
        var litext1 = '',
            litext2='';
        for(var i = this.limit.max;i>=this.limit.min;i--){
            //ul,div的宽高随参数变化，内部li的高和间距固定是整个高度的五分之一
            litext1 = litext1+'<li style = "height:'+this.limit.h/5+'px; line-height:'+this.limit.h/5+'px">'+i+'年</li>'
        }
        ul1.innerHTML = litext1
        //月份的
        for(var j=1;j<=12;j++){
            litext2 = litext2+'<li style = "height:'+(this.limit.h-40)/4+'px; line-height:'+(this.limit.h-40)/4+'px">'+j+'月</li>'
        }
        ul2.innerHTML = litext2
        div1.appendChild(ul1)
        div1.appendChild(ul2)
        div1.style.width = this.limit.w+'px'
        div1.style.height = this.limit.h+'px'
        ul1.style.width = Math.floor(this.limit.w/3 )+'px'
        ul1.style.height= this.limit.h+'px'
        ul2.style.width = 2*Math.floor((this.limit.w/3))-2+'px'
        ul2.style.height= this.limit.h+'px'        
        this.ele.appendChild(div1)        
    }
    //选择 year,month
    dateSelect.prototype.choose = function(){     
        var that = this.ele,
            thisbox = that.querySelector('.box'),   
            yearbox = this.ele.querySelector('.yearbox'),
            monthbox = this.ele.querySelector('.monthbox');
        yearbox.addEventListener('click',function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;   
            var lis = yearbox.querySelectorAll('li')
            ;[].forEach.call(lis,function(v,i){
                v.classList.remove('current')
            })  
            if(target.nodeName.toLowerCase() === 'li'){
                that.querySelector('.sel-year').innerHTML = target.innerHTML
                target.classList.add('current')
            }        
        })
        monthbox.addEventListener('click',function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;   
            var lis = monthbox.querySelectorAll('li')
            ;[].forEach.call(lis,function(v,i){
                v.classList.remove('current')
            })  
            if(target.nodeName.toLowerCase() === 'li'){
                that.querySelector('.sel-month').innerHTML = target.innerHTML
                target.classList.add('current')
            }        
        })        
    }
    //关闭
    dateSelect.prototype.close = function(){
        var that = this.ele
        var thisbox = that.querySelector('.box')
        document.body.addEventListener('click',function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;
            //如果触发源不在相关的元素上，那么就关闭
            if(target!=that && target!= thisbox && target.nodeName.toLowerCase() !== 'li' ){
                thisbox.style.display = 'none'
            }
        })
    }
    //混合两个对象且不会影响
    function extend(a, b) {
        var c = JSON.parse(JSON.stringify(a))
        for (var item in b) {
            c[item] = b[item]
        }
        return c
    }
    //暴露出去的全局方法
    window.DateSelect = dateSelect

}())

