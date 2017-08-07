<?php
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
   }
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$code = "";
$code=test_input($_POST["code"]);
date_default_timezone_set("Asia/Shanghai");
   $time = date("Y-m-d h:i:sa");
}

$link=mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS) or die("error");

if($link)
{
    mysql_select_db(app_graduateseason,$link);
}
else
{
    echo json_encode(array('consequence' => 'failed'));
}
$result =  mysql_query("SELECT * FROM graduateSeason WHERE code = '$code'");
$result_re = mysql_fetch_array($result) ; 
if ($result_re['year'] == '半年')
{
	echo json_encode(array('consequence' => 'success','re_name' => $result_re['Name'],'note' => $result_re['Text'],'po_name' => $result_re['myname']));
    mysql_query("UPDATE graduateSeason SET query = '1'WHERE code = '$code'");
}
else if ($result_re['year'] == '一年')
{
     echo json_encode(array('consequence' => 'success','re_name' => $result_re['Name'],'note' => $result_re['Text'],'po_name' => $result_re['myname']));
    mysql_query("UPDATE graduateSeason SET query = '1'WHERE code = '$code'");
}
else
{
    echo json_encode(array('consequence' => 'none'));
}

?>
