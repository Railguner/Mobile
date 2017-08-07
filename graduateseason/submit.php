<?php
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
   }
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $text = $qq = $tel = $time=$college = "";
$name=test_input($_POST["name"]);
$qq=test_input($_POST["qq"]);
$year=test_input($_POST["time"]);
$text = test_input($_POST["text"]);
$tel = test_input($_POST["tel"]);
$myname = test_input($_POST["myname"]);
$mytel = test_input($_POST["mytel"]);
date_default_timezone_set("Asia/Shanghai");
   $time = date("Y-m-d h:i:sa");
}

$link=mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS) or die("error");

if($link)
{
    mysql_select_db(app_graduateseason,$link);
}

do{
$code = rand(10000, 99999);
$result = mysql_query("SELECT * FROM graduateSeason WHERE code = '$code'");
  }while (mysql_fetch_array($result));
mysql_query("INSERT INTO graduateSeason (QQ,Text,Name,Tel,Date,Code,query,Year,Myname,Mytel)
VALUES ('$qq','$text','$name','$tel','$time','$code','0','$year','$myname','$mytel')");
header("Location:succeed.php?code=$code");
?>
