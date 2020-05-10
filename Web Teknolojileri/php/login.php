

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/LoginStyle.css">
    <script src="../js/login.js"></script>
    <title>Giriş Yap</title>
</head>
<body>
    <div class="container">
        <div class="back">
            <form action="login.php">
                <ul>
                    <li>
                        <h2>
                            <?php 
                                $email = "sakarya.edu.tr";
                                if ($_POST){
                                    $sifre = $_POST["sifre"];
                                    $mail = $_POST["email"];
                                    $gelenMail = explode("@",$mail);
                                if(!($gelenMail[1] == $email) || !(strlen($gelenMail[0]) == 10) ){
                                    echo "Mail adresi yanlış";
                                }
                                else{
                                    echo "Hoşgeldiniz ";
                                    echo $gelenMail[0];
                                }
                                }
                            ?>
                        </h2>
                    </li>
                    <li>
                        <div class="logo">
                            <img src="../images/mail.png">
                        </div>
                        <input type="email" id="email" placeholder="Mail adresinizi giriniz">
                        <span id="emailHata" class="error"></span>    
                    </li>
                    <li>    
                        <div class="logo">
                            <img src="../images/key.png">
                        </div>
                        <input type="password" id="sifre" placeholder="Şifrenizi giriniz">
                        <span id="sifreHata" class="error"></span>
                    </li>
                    <li>
                        <button type="submit" onclick="return kontrol();">Giriş Yap</button>
                    </li>
                </ul>
            </form>
            
        </div>
    </div>
    
</body>
</html>