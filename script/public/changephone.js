window.onload = function () {
    // (function () {
    //     var timer = null;
    //     window.addEventListener('resize', function () {
    //         clearTimeout(timer)
    //         timer = setTimeout(function () {
    //             window.location.reload()
    //         }, 300)
    //     })
    // })()

    document.querySelector('.headbox>i').addEventListener('click',function(){
        var ul = document.querySelector('.headbox>ul')
        this.classList.toggle('on')
        if(this.classList.contains('on')){
            document.body.classList.add('on')
            ul.classList.add('on')
        }else{
            document.body.classList.remove('on')
            ul.classList.remove('on')            
        }
    })
    
    document.querySelector('.register').addEventListener('click',function(){
        console.log('sss')
        if(document.body.classList.contains('on')){
            document.querySelector('.headbox>i').classList.toggle('on')
                        document.body.classList.remove('on')
            document.querySelector('.headbox>ul').classList.remove('on')    
        }
    })
}