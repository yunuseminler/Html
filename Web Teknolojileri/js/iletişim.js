function kontrol(){
    var name = document.getElementById('ad');
    var surname = document.getElementById('soyad');
    var telefon = document.getElementById('telefon');
    var email = document.getElementById('email');
    var sehir = document.getElementById('Sehir');
    var ad_error = document.getElementById('AdHata');
    var soyad_error = document.getElementById('SoyadHata');
    var telefon_error = document.getElementById('TelefonHata');
    var email_error = document.getElementById('EmailHata');
    var Sehir_error = document.getElementById('SehirHata');
    var hataSayisi = 0;

    if(name.value == null || name.value == ""){
        name.style.borderBottomColor = "red";
        ad_error.textContent = "* Ad Alanını boş bırakmayınız";
        hataSayisi++;
    }
    else{
        name.style.border = "gray";
        ad_error.textContent = "";
    }
    if(surname.value == null || surname.value == ""){
        surname.style.borderBottomColor = "red";
        soyad_error.textContent = "* Soyad Alanını boş bırakmayınız";
        hataSayisi++
    }
    else{
        surname.style.borderBottomColor = "gray";
        soyad_error.textContent = "";
    }
    if(telefon.value == null || telefon.value == ""){
        telefon.style.borderBottomColor = "red";
        telefon_error.textContent = "* Telefon Alanını boş bırakmayınız";
        hataSayisi++;
    }
    else{
        telefon.style.borderBottomColor = "gray";
        telefon_error.textContent = "";
    }
    if(email.value == null || email.value == ""){
        email.style.borderBottomColor = "red";
        email_error.textContent = "* Email Alanını boş bırakmayınız";
        hataSayisi++;
    }
    else{
        email.style.borderBottomColor = "gray";
        email_error.textContent = "";
    }
    if(hataSayisi==0){
        return true;
    }


    return false;
        
    
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


