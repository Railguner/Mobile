	var code = {};//登录状态
	var unknow = 'POST';//数据传输方法

	var listwarning = document.getElementById("listwarning");//提示框



	//检索地址栏参数函数
	function GetQueryString(name){
    	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    	var r = window.location.search.substr(1).match(reg);
    	if(r!=null)return  unescape(r[2]); return null;
	}

	var x = GetQueryString("color");
	var n = document.getElementById('link');//选取link颜色样式表链接
	if(x>=0&&x<=3)
	{n.href="css/gray.css"} 
	else {
		if (x<=6&&x>3) {
			n.href="css/green.css"
		} 	else{n.href="css/purple.css"};//更改样式表链接
	}




	//提示框状态函数
	function warning(display,text) {
		listwarning.style.display = display;
   		listwarning.innerHTML = text; 		
   	}
   	

	var activity = new XMLHttpRequest();

  	window.onload = function (event) {
     
	event.preventDefault();
	
	activity.onreadystatechange = function(event) {
	
		warning("block","摆摊列表获取中");

	  	if(activity.readyState == 4){
	  
	   		var data = {};
	   		
	   		warning("none","摆摊列表获取中");

	   		try{
	      		data = JSON.parse(activity.responseText);
	   		} catch(e) {
		  		console.error(e);}//获得数据，抛出错误

		  	for (var i = 0; i < data.detail.length ; i++) {
		  	
		  	//创建节点
	  		var ul = document.getElementById('ul');
	  		var li = document.createElement('li');
	  		var a = document.createElement('a');
	  		var span1 = document.createElement('span');
	  		var span2 = document.createElement('span');

	  		var text1 = document.createTextNode(data.detail[i].stuid);
	  		var text2 = document.createTextNode(data.detail[i].subtime);
	  		var text3 = document.createTextNode(data.detail[i].name);
	  		
	  		//节点添加className
	  		ul.className = "list";
	  		li.className = "item";
	  		a.href = "subactivity.html?color=" + x;
	  		span1.className = "itemtime middleword blackmain";
	  		span2.className = "itemactivity smallword blacksecond ry";
	  		
	  		//放入父节点
	  		ul.appendChild(li);
	  		li.appendChild(a);
	  		a.appendChild(span1);
	  		a.appendChild(span2);
	  		span1.appendChild(text1);
	  		span1.appendChild(text2);
	  		span2.appendChild(text3);
	  		
			}

			if (data.code) {
				
			} else {
				warning("block","摆摊列表为空");
				setTimeout('warning("none","摆摊列表获取中");',600);
			}
			
	  	}  else {

	  		warning("block","网络连接失败");
	  		setTimeout('warning("none","摆摊列表获取中");',600);
	  		
	  		  	 
	  		}
	
	}
  
    
   
    activity.open("POST","json/list.json",true);
  
    activity.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
  
    activity.send('&unknow' + unknow.value );

   }