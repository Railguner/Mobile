
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
</head>

<body>
    <?php
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
   }
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$code=test_input($_POST["code"]);
}

$link=mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS) or die("error");

if($link)
{
    mysql_select_db(app_graduateseason,$link);
}
$result = mysql_query("SELECT * FROM graduateSeason WHERE code = '$code'");
if (!$row = mysql_fetch_array($result))
{
    $url = "check.html";
    echo "<script language=\"javascript\">
    alert('sorry,验证码错误,请检查后重新输入')
    window.location.href='$url';</script>";
}
else{

mysql_query("UPDATE graduateSeason SET query = '1'
WHERE code = '$code'");
$result = mysql_query("SELECT * FROM graduateSeason WHERE code = '$code'");
   
$row = mysql_fetch_array($result); ?>
    <p>  <?php echo $row['Name']; ?> </p>
    <p><?php echo $row['Text'];  ?></p>
    <?php
}
    ?>
</body>
</html>
