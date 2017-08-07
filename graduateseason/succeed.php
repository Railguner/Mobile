<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" charset="utf-8" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<title>时光胶囊2015-大学城百步梯</title>
	<link rel="stylesheet" type="text/css" href="css/succeed.css">
</head>
<body id="body">
    <img class="bgt" src="img/top.png">
    <img class="bgd" src="img/down.png">
	<div class="Tbg">
		<div class="success">
			<p class="header">投递成功</p>
			<hr>
		</div>
		<div class="content">
			<p class="text">感谢您的参与!</p>
            <p class="text1">梯仔会在<label>半年</label>或<label>一年</label>后</p>
			<p class="text2">以<label>短信</label>再次通知<label>收信人</label></p>
			<p class="text3">信件的<label>获取码</label>和<label>获取方式</label></p>
			
			<p class="text4">获取码<label>
                <?php echo $_GET["code"]; ?>
                </label></p>
            
			<hr>
		</div>
		<div class="return" onclick="location.href='index.html'">
			<img src="img/botton.png" class="botton">
			<a href="index.html" style="color:rgba(28,80,120,0.76);">再写一封</a>
		</div>
	</div>
	<div class="Dbg">
		<div class="img">
			<img src="img/code.png" class="code">
		</div>
    </div>
    <footer>&copy;BBTtech2015</footer>
</body>

</html>
