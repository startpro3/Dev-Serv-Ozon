/*global $, jQuery, alert,*/
$(document).ready(function() {
    "use strict";
// ascrail2000
    // Nice Scroll Code
    $("body").niceScroll();
    $(".nicescroll-rails .nicescroll-rails-hr").niceScroll({horizrailenabled:false});
    $(".nicescroll-rails .nicescroll-rails-hr").css('display', 'none');
    // $("body, html").niceScroll({
    //     cursorcolor:"",
    //     cursorwidth:""
    //   });

    var col = $('.color-option li').data('value');
    if(col === "css/blue_theme.css"){$("html").niceScroll({cursorcolor:"blue"});}
    
        $("html").niceScroll({
        cursorwidth:6,
        cursoropacitymin:0.3,
        // cursorcolor: $('.color-option').css('borderColor'),
        cursorborder:'1px solid #555',
        cursorborderradius:4,
        autohidemode:'leave'
        });  // free your immagination        


    $('.carousel').carousel({
        interval: 1300
    });
    // للتنقل بين الصور في السلايدر


    // Shwo Color Option Div When Click On The Gear
    $(".gear-check").on("click",function (e) {
        e.preventDefault();
        $(".color-option").fadeToggle();        
    });

    // Change Theme Color On Click
    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#4979fc").end()
        .eq(3).css("backgroundColor", "#c4ad1d").end()
        .eq(4).css("backgroundColor", "#0e912a");

    colorLi.click(function () {
        // console.log($(this).attr("data-value"));
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        //  ثم قم بتغيير قيمة هذه الخاصية بقيمة الكاستم اتربيوت لهذا العنصر  theme في قيمتها كلمة  href فيه خاصية اسمها  link  دور على وسم اسمه 
        
        // $("html, body").niceScroll({cursorcolor:$(this).css('backgroundColor')});
    });

    // Caching The Scroll Top Element
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        // if ($(this).scrollTop() >= 700 ){
        //     scrollButton.show();
        // } else {
        //     scrollButton.hide();
        // }

        //  المختصرة if دالة 
        $(this).scrollTop() >= 700? scrollButton.show(): scrollButton.hide();

        // Click On Button To Scroll Top
        // scrollButton.on("click", function(){  // stop عن طريق ال 
        //     $("html, body").stop().animate({ scrollTop : 0 },600);
        // });

        // $(window).scroll يفضل وضع هذه الأكواد خارج كود ال 

        // scrollButton.on("click", function(e){  // عن طريق منع الافتراضي
        //     $("html, body").stop().animate({ scrollTop : 0 },600);
        //     e.preventDefault();
        // });
    });

    // Click On Button To Scroll Top
    scrollButton.on("click", function (e) {  // stop عن طريق ال 
        e.preventDefault(); 
        $("html, body").animate({ scrollTop: 0 }, 600);
    });    

    // FitText
    $("#responsive_headline").fitText(1.0, {minFontSize: '30px', maxFontSize: '70px'});



    
});


 // :Loadind Screen
 $(window).on('load', function () {
    "use strict";

    // لجعل الموقع يبدأ من اول السكرول في جميع المتصفحات
    $("html, body").animate({ scrollTop: 0}, 500);

    // $(".loading-overlay").fadeOut(1000);
    //  Loading Element
    $(".loading-overlay .sk-cube-grid").fadeOut(1000, function () {  //  اخفاء الرسالة في ثانية
        // Show The Scroll
        $("body").css("overflow", "auto");  //  اظهار المحتوى المخفي الخارج عن البادي

        $(this).parent().fadeOut(2000, function () {  //  اخباء العنصر في ثانيتين
            $(this).remove();  // حذف العنصر من الدوم تري
        });
    });
});
