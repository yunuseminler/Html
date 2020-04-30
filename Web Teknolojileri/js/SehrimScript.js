$(function(){
    var slider = $('.slider'),
        list = slider.find('ul'),
        length = list.find('li').length;
        width = slider.outerWidth();
        totalwidth = width * length,
        index = 0;
    list.find('li').width(width).end().width(totalwidth);
})