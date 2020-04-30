<style>
    td{
        padding: 10px;
    }
</style>
<table width="400" height="400" border="1">
    <tr>
        <td>Adınız </td>
        <td><?php echo $_POST["ad"];?></td>
    </tr>
    <tr>
        <td>Soyadınız</td>
        <td><?php echo $_POST["soyad"];?></td>
    </tr>
    <tr>
        <td>Telefon Numarası </td>
        <td><?php echo $_POST["phone"];?></td>
    </tr>
    <tr>
        <td>Email </td>
        <td><?php echo $_POST["email"];?></td>
    </tr>
    <tr>
        <td>cinsiyetiniz</td>
        <td><?php echo $_POST["cinsiyet"];?></td>
    </tr>
    <tr>
        <td>Şehriniz </td>
        <td><?php echo $_POST["Sehir"];?></td>
    </tr>
    <tr>
        <td>Dönüş yolu</td>
        <td>
        <?php
            if(isset($_POST["yorum"])) {
                $contact = $_POST["yorum"];
                foreach ($contact as $key => $value) {
                    echo $value."<br>";
                }
            } 
            else {
                echo 'Dönüş istemiyor';
            }
                
            ?>
        </td>
    </tr>
    <tr>
        <td>Eklemek İstediği</td>
        <td><?php echo $_POST["extra "];?></td>
    </tr>
</table>