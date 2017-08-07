		
		var random = Math.random()*10; //产生随机数
		var x = random.toFixed(0);
		
		var n = document.getElementById('link');  //选取ID link
		if(x>=0&&x<=3)
		{n.href="css/gray.css"} 
		else {
			if (x<=6&&x>3) {
				n.href="css/green.css"
			} 	else{	
			n.href="css/purple.css"};//更改链接
		}