function menu(isOpen){

  if(isOpen){
    var menu = document.getElementsByClassName('menu');
    menu[0].style.display = "block";
    var arka = document.getElementsByClassName('back');
    arka[0].style.display = "block";
    var close = document.getElementsByClassName('closeIcon');
    close[0].style.display = "block";
  }else{
  var menu = document.getElementsByClassName('menu');
  menu[0].style.display = "none";
  var arka = document.getElementsByClassName('back');
  arka[0].style.display = "none";
  var close = document.getElementsByClassName('closeIcon');
  close[0].style.display = "none";
  }
  
}


