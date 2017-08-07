	
	var unknow = 'POST';//传输数据方法
	var id = {};//人员识别ID

	var sign = new Array();//签到按钮数组
	var replacebutton = new Array();//代替签到按钮数组
	var sn = new Array();//代替者学号数组

	var replacerdiv = document.getElementById('replacerdiv');//弹出输入框
	var cancel = document.getElementById('cancel');//取消
	var replace = document.getElementById('replace');//代替签到
	
	
	var subwarning = document.getElementById('subwarning');//提示框
	
	var body = document.getElementById('body');//html的body
	

	
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
		subwarning.style.display = display;
   		subwarning.innerHTML = text; 		
   	}

   	//输入框状态函数
   	function tipsdiv(display) {
   		replacerdiv.style.display = display;
   	}


   	var activity = new XMLHttpRequest(); 
       

  	window.onload = function (event) {

  	warning("block","名单读取中");

    event.preventDefault();  	

	 
	activity.onreadystatechange = function (event) {
	
	  	if(activity.readyState == 4){

	  		warning("none","名单读取中");

	   	var data = {};
	 	 
	 	//获得数据，抛出错误 
	 	try{
	    	data = JSON.parse(activity.responseText);
	   	} catch(e) {
		  	console.error(e);}
	  	


	  	for (var i = 0; i < data.student.length ; i++) {
	  		
	  		//创建节点	
	  		var ul_big = document.getElementById('ul');
	  		var li_big = document.createElement('li');
	  		var div_big = document.createElement('div');
	  		var div_middle1 = document.createElement('div');
	  		var div_middle2 = document.createElement('div');
	  		var ul_small = document.createElement('ul');
	  		var div_small1 = document.createElement('div');
	  		var div_small2 = document.createElement('div');
	  		var li_small1 = document.createElement('li');
	  		var li_small2 = document.createElement('li');
	  		var li_small3 = document.createElement('li');

	  		var text1 = document.createTextNode(data.student[i].name);
	  		var text2 = document.createTextNode(data.student[i].tel);
	  		var text3 = document.createTextNode(data.student[i].depart);
	  		var text4 = document.createTextNode("签到");
	  		var text5 = document.createTextNode("替换");
	  		
	  		//节点添加classname
	  		div_big.className = "card";
	  		div_middle1.className = "info";
	  		div_middle2.className = "signaction";
	  		div_small1.className = "sign middleword colormain";
	  		div_small2.className = "replace middleword colorsecondary";
	  		li_small1.className = "name largestword blackmain";
	  		li_small2.className = "tel smallword blackmain";
	  		li_small3.className = "department smallword blacksecondary";
	  		
	  		//放入父节点
	  		ul_big.appendChild(li_big);
			li_big.appendChild(div_big);
			div_big.appendChild(div_middle1);
			div_big.appendChild(div_middle2);
			div_middle1.appendChild(ul_small);
			div_middle2.appendChild(div_small1);
			div_middle2.appendChild(div_small2);
			ul_small.appendChild(li_small1);
			ul_small.appendChild(li_small2);
			ul_small.appendChild(li_small3);
			div_small1.appendChild(text4);
			div_small2.appendChild(text5);
			li_small1.appendChild(text1);
			li_small2.appendChild(text2);
			li_small3.appendChild(text3);

			sign[i] = div_small1;//节点存入数组
			replacebutton[i] = div_small2//节点存入数组
		}


		function check(){
			for (var e = 0; e < data.student.length; e++) {
				if (data.student[e].state==true) {	//为真即已签到
					sign[e].className = "aftersign middleword colormain";
					replacebutton[e].className = "afterreplace middleword colorsecondary";
				} else {

					sign[e].onmousedown = function () {
						sign[e-1].className = "aftersign middleword colormain";					 
						replacebutton[e-1].className = "afterreplace middleword colorsecondary";
						
						//发送签到人员ID
						activity.send( 'unknow=' + unknow.value + '&id=' + data.student[e-1].id.value);
    					
    					
    					function ok(){
    					
    					//获取返回数据，抛出错误
    					try{
	    					data = JSON.parse(activity.responseText);
	   					} catch(e) {
		  					console.error(e);}
	  					

	  					//是否签到成功
						if (data.student[e].state==true) {	
							sign[e].className = "aftersign middleword colormain";
							replacebutton[e].className = "afterreplace middleword colorsecondary";
						} else {
							warning("block","签到失败");}
						}

						ok();
					}


					replace.onmousedown = function () {
						tipsdiv("none");
						body.className = "subactivitybody";
						sign[e-1].className = "aftersign middleword colormain";					 
						replacebutton[e-1].className = "afterreplace middleword colorsecondary";
						sn[e-1] =	document.getElementById('replacer').value;//代替者学号
						
						//代替签到，发送数据
						activity.send( 'unknow=' + unknow.value + '&sn=' +document.getElementById('replacer').value + '&id=' + data.student[e-1].id.value);
					}

					//代签按钮，弹出输入框
					replacebutton[e].onmousedown = function () {
						body.className = "replacebody";
						tipsdiv("block");
						document.getElementById('replacer').value = sn[e-1];
					}

					//取消按钮
					cancel.onmousedown = function () {
						body.className = "subactivitybody";
						tipsdiv("none");	
					}

				}
			}
		}

		check();
		
		} else {	
			warning("block","网络连接失败");	
			setTimeout('warning("none","名单读取中");',600);
		
		}
	}	
   }

	activity.open("POST","json/subactivity.json",true);
  						
  	activity.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
  
  	activity.send();
					
