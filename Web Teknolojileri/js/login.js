function kontrol(){
    var email = document.getElementById('email');
    var sifre = document.getElementById('sifre');
    var sHata = document.getElementById('sifreHata');
    var eHata = document.getElementById('emailHata');
    var hataSayisi = 0;

    if(email.value == null || email.value == ""){
        email.style.borderColor = "red";
        eHata.textContent = "* Email Alanını boş bırakmayınız";
        hataSayisi++;
    }
    else{
        email.style.border = "gray";
        eHata.textContent = "";
    }
    if(sifre.value == null || sifre.value == ""){
        sifre.style.borderColor = "red";
        sHata.textContent = "* Şifre Alanını boş bırakmayınız";
        hataSayisi++;
    }
    else{
        sifre.style.borderColor = "gray";
        sHata.textContent = "";
    }

    if(hataSayisi == 0){
        return true;
    }
    
    return false;

}