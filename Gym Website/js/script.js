$('.training-left ul li:first-child a').addClass('click');

$(document).ready(function () {
    $(window).scroll(function () {
        var bannerHeight = document.getElementById('bannerVideo').clientHeight;

        if ($(this).scrollTop() > bannerHeight-80) {
            $('header').addClass('fixed');
            $('a').addClass('black');
            $('header ul li:last-child a').addClass('white');
        } 
        else {
            $('header').removeClass('fixed');
            $('a').removeClass('black');
        }
    });
});

function remove(){
    $('.first-training').addClass('training-none');
    $('.second-training').addClass('training-none');
    $('.third-training').addClass('training-none');
    $('.fourth-training').addClass('training-none');
    $('.training-left ul li:nth-child(1) a').removeClass('click');
    $('.training-left ul li:nth-child(2) a').removeClass('click');
    $('.training-left ul li:nth-child(3) a').removeClass('click');
    $('.training-left ul li:nth-child(4) a').removeClass('click');
}

function trainingMenu(deger){
    remove();
    if(deger==1){
        $('.first-training').addClass('animation');
        $('.first-training').removeClass('training-none');
        $('.training-left ul li:nth-child(1) a').addClass('click');
    }
    else if(deger==2){
        $('.second-training').addClass('animation');
        $('.second-training').removeClass('training-none');
        $('.training-left ul li:nth-child(2) a').addClass('click');
    }
    else if(deger==3){
        $('.third-training').addClass('animation');
        $('.third-training').removeClass('training-none');
        $('.training-left ul li:nth-child(3) a').addClass('click');
    }
    else if(deger==4){
        $('.fourth-training').addClass('animation');
        $('.fourth-training').removeClass('training-none');
        $('.training-left ul li:nth-child(4) a').addClass('click');
    }
}

function reset(){
    for (var index = 0; index < 5; index++) {
        $('tr td:nth-child(2)')[index].innerHTML = "";
        $('tr td:nth-child(3)')[index].innerHTML = "";
    }
    $('.days ul li:nth-child(1) a').removeClass('click');
    $('.days ul li:nth-child(2) a').removeClass('click');
    $('.days ul li:nth-child(3) a').removeClass('click');
    $('.days ul li:nth-child(4) a').removeClass('click');
    $('.days ul li:nth-child(5) a').removeClass('click');
}

function days(day){
    reset();
    if(day==1){
        var a = document.getElementsByClassName('monday');
        a[0].innerHTML = "11:00AM - 12:00AM";
        a[1].innerHTML = "2:00PM - 3:30PM";
        $('.days ul li:nth-child(1) a').addClass('click');

    }
    else if(day==2){
        var a = document.getElementsByClassName('tuesday');
        a[0].innerHTML = "2:00PM - 3:30PM";
        a[1].innerHTML = "10:00AM - 11:30AM";
        $('.days ul li:nth-child(2) a').addClass('click');
    }
    else if(day==3){
        var a = document.getElementsByClassName('wednesday');
        a[0].innerHTML = "11:00AM - 12:00AM";
        a[1].innerHTML = "2:00PM - 3:30PM";
        $('.days ul li:nth-child(3) a').addClass('click');
    }
    else if(day==4){        
        var a = document.getElementsByClassName('thursday');
        a[0].innerHTML = "11:00AM - 12:00AM";
        a[1].innerHTML = "2:00PM - 3:30PM";
        $('.days ul li:nth-child(4) a').addClass('click');
    }
    else if(day==5){
        var a = document.getElementsByClassName('friday');
        a[0].innerHTML = "11:00AM - 12:00AM";
        a[1].innerHTML = "2:00PM - 3:30PM";
        $('.days ul li:nth-child(5) a').addClass('click');
    }

}