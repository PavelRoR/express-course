//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend owl.carousel.min.js

$(document).ready(function () {
    var isIE = false || !!document.documentMode;

    if (isIE) {
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "css/ie.css";
        head.appendChild(link);
    }
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });
    $('#ray_revs').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        nav: true,
        navText: ["<", ">"],
        dots: false
    });
    $('#janna_revs').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        nav: true,
        navText: ["<", ">"],
        dots: false
    });
    $('#janna_videos').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<", ">"],
        dots: false,
        responsive: {
             280: {
                 items: 1
             },
             767: {
                 items: 2
             },
             1200: {
                 items: 3
             }
         }
    });
    $('#ray_videos').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<", ">"],
        dots: false,
        responsive: {
             280: {
                 items: 1
             },
             767: {
                 items: 2
             },
             1200: {
                 items: 3
             }
         }
    });
    
    $(function () {
        $(".video_wrapper_revs .video_rev_img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?enablejsapi=1&mute=1&showinfo=0&rel=0&autoplay=1"  allowfullscreen></iframe>');
            console.log(a);
        });
    });

    $(function () {
        $('#janna_videos .owl-prev, #janna_videos .owl-next, #ray_videos .owl-prev, #ray_videos .owl-next').click(function () {
            $('.video_wrapper_revs iframe').each(function () {
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img class="video_rev_img" src="' + l + '" alt="Видео отзыв">');
            });
            $(".video_wrapper_revs .video_rev_img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?enablejsapi=1&mute=1&showinfo=0&rel=0&autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
            });
        });
    })
    /*Конец документа*/
});