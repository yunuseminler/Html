$(document).ready(function () {
    $(window).scroll(function () {
        var bannerHeight = document.getElementById('banner').clientHeight;
        if ($(this).scrollTop() > bannerHeight-50) {
            $('header').addClass('fixed');
        } 
        else {
            $('header').removeClass('fixed');
        }
    });
});

function remove(){
    $('.back1').addClass('display');
    $('.back2').addClass('display');
    $('.back3').addClass('display');
    $('.back4').addClass('display');
    $('.back5').addClass('display');
    $('.text1').addClass('display');
    $('.text2').addClass('display');
    $('.text3').addClass('display');
    $('.text4').addClass('display');
    $('.text5').addClass('display');
    $('.dots a:nth-child(1)').removeClass('click');
    $('.dots a:nth-child(2)').removeClass('click');
    $('.dots a:nth-child(3)').removeClass('click');
    $('.dots a:nth-child(4)').removeClass('click');
    $('.dots a:nth-child(5)').removeClass('click');
}

function dots(deger){
    remove();
    if(deger==1){
        $('.back1').addClass('animation');
        $('.back1').removeClass('display');
        $('.text1').addClass('animation');
        $('.text1').removeClass('display');
        $('.dots a:nth-child(1)').addClass('click');
    }
    else if(deger==2){
        $('.back2').addClass('animation');
        $('.back2').removeClass('display');
        $('.text2').addClass('animation');
        $('.text2').removeClass('display');
        $('.dots a:nth-child(2)').addClass('click');
    }
    else if(deger==3){
        $('.back3').addClass('animation');
        $('.back3').removeClass('display');
        $('.text3').addClass('animation');
        $('.text3').removeClass('display');
        $('.dots a:nth-child(3)').addClass('click');
    }
    else if(deger==4){
        $('.back4').addClass('animation');
        $('.back4').removeClass('display');
        $('.text4').addClass('animation');
        $('.text4').removeClass('display');
        $('.dots a:nth-child(4)').addClass('click');
    }
    else if(deger==5){
        $('.back5').addClass('animation');
        $('.back5').removeClass('display');
        $('.text5').addClass('animation');
        $('.text5').removeClass('display');
        $('.dots a:nth-child(5)').addClass('click');
    }
}

function menu(deger){
    if(deger){
        $('.nav').removeClass('display');
        $('.front').removeClass('after-slide');
        $('.front').addClass('slide');
    }
    else{
        $('.front').removeClass('slide');
        $('.front').addClass('after-slide');
        setTimeout(after ,1000);
    }
}

function after(){
    $('.nav').addClass('display');
}

