	var account = document.getElementById('account');//输入账号
   	var password = document.getElementById('password'); //输入密码
   
   	var inputform = document.getElementById('inputform');//form表单

   	var loginButton = document.getElementById('login');//登录按钮
   	var loadWarning = document.getElementById('loadwarning');//提示框

   	
   	var unknow = 'POST';//数据传输方法



   	//随机颜色样式
	var random = Math.random()*10; //产生随机数
	var x = random.toFixed(0);//四舍五入
	var n = document.getElementById('link');  //选取link颜色样式表链接
	if(x>=0&&x<=3){n.href="css/gray.css"} 
	else {
		if (x<=6&&x>3) {
			n.href="css/green.css"
		} 	else{n.href="css/purple.css"};//更改样式表链接
	}



	//提示框状态函数
   	function warning(display,text) {
   		loadWarning.style.display = display;
   		loadWarning.innerHTML = text;		
   	}

   	//登录按钮状态函数
   	function loginbutton(text,classname) {
   		loginButton.innerHTML = text;
		loginButton.className = classname;
   	}



   
     
  		inputform.addEventListener('submit', function (event) {

  			//防空
		if (account.value ==""||password.value =="") {
			event.preventDefault();  
			warning("block","账号或密码不能为空");
			setTimeout('warning("none","账号或密码错误");',600);
			setTimeout('loginbutton("登录","load whitemain largeword");',300);
			
		} 

   		else {

		loginbutton("登录中","loading whitemain largeword");


		var login = new XMLHttpRequest(); 
    			
	
			login.onreadystatechange = function (event) {
	
				if (login.status == 200 || login.status == 304) {

	  				if(login.readyState == 4){
	  				
	  				var data = {};

	   				//获得数据，抛出错误
	  				try{
	    				data = JSON.parse(login.responseText);
	   				} catch(e) {
		  			    console.error(e);}
	  		 

	  				if (data.code == 1){	
	  					warning("block","账号或密码错误");
	   				} else { window.open("list.html?color=" + x, "_self"); }
	   					//跳转链接，get发送color参数
	   				}
	   	   		} 
	  		}

	  		


		
	  	

		

  	
   
   
    	login.open("POST","json/load.json",true);
  	
   		login.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
  
    	login.send('unknow=' + unknow.value + '&account=' + inputform.account.value + '&pw=' + inputform.password.value  );
		
		
		}
   
		});
   	
   	

