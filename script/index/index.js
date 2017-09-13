$(function () {
    clickmove.horzational('.box', 8000, 1, 1, true)

    function Scroll() {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                $('.gohead').show('300');
            } else {
                $('.gohead').hide('300')
            }
        })
        $('.gohead').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 600);
            return false;
        })
    }

    Scroll()
})