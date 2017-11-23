$(function () {
    $('.eventfilter>div').on('click', 'li', function () {
        $(this).addClass('choiced').siblings().removeClass('choiced')
    })

    //显示更多
    $('.eventtype .more').on('click', function () {
        $(this).parent()[0].innerHTML = allarea
    })

    var allarea = `
    <li class="choiced">
        <a href="javascript:;"><span>北京市</span></a>
    </li>
    <li>
        <a href="javascript:;"><span>天津市</span></a>
    </li>
    <li>
        <a href="javascript:;"><span>上海市</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>重庆市</span></a>
    </li>      
    <li>
        <a href="javascript:;"><span>河北省</span></a>
    </li>       
    <li>
        <a href="javascript:;"><span>山西省</span></a>
    </li>       
    <li>
        <a href="javascript:;"><span>辽宁省</span></a>
    </li>      
    <li>
        <a href="javascript:;"><span>吉林省</span></a>
    </li>      
     <li>
        <a href="javascript:;"><span>黑龙江省</span></a>
    </li>   
    <li>
        <a href="javascript:;"><span>江苏省</span></a>
    </li> 
    <li>
        <a href="javascript:;"><span>浙江省</span></a>
    </li> 
    <li>
        <a href="javascript:;"><span>安徽省</span></a>
    </li> 
    <li>
        <a href="javascript:;"><span>福建省</span></a>
    </li>     
    <li>
        <a href="javascript:;"><span>江西省</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>山东省</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>河南省</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>湖北省</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>湖南省</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>广东省</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>海南省</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>四川省</span></a>
    </li>  
    <li>
        <a href="javascript:;"><span>贵州省</span></a>
    </li> 
    <li>
        <a href="javascript:;"><span>云南省</span></a>
    </li>    
    <li>
        <a href="javascript:;"><span>陕西省</span></a>
    </li>    
    <li>
        <a href="javascript:;"><span>甘肃省</span></a>
    </li>    
    <li>
        <a href="javascript:;"><span>青海省</span></a>
    </li>    
    <li>
        <a href="javascript:;"><span>台湾省</span></a>
    </li>     
    <li>
        <a href="javascript:;"><span>内蒙古自治区</span></a>
    </li> 
    <li>
        <a href="javascript:;"><span>广西壮族自治区</span></a>
    </li> 
    <li>
        <a href="javascript:;"><span>西藏自治区</span></a>
    </li>   
    <li>
        <a href="javascript:;"><span>宁夏回族自治区</span></a>
    </li>
    <li>
        <a href="javascript:;"><span>新疆维吾尔自治区</span></a>
    </li>
    <li>
        <a href="javascript:;"><span>香港特别行政区</span></a>
    </li>     
    <li>
        <a href="javascript:;"><span>澳门特别行政区</span></a>
    </li>                                                                              
    `

})