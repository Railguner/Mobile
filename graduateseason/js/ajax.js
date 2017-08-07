var logo = document.getElementById('logo');
var form = document.getElementById('form');
var btn = document.getElementById('btn');
var touch = document.getElementById('touch');

var code = document.getElementById('code');

var rewho = document.getElementById('rewho');
var powho = document.getElementById('powho');
var re_name = document.getElementById('re_name');
var po_name = document.getElementById('po_name');
var note = document.getElementById('note');

var x = 0;
var y = 0.54;
function down(){
		if (y <= 0) {logo.style.opacity = 0;} else{
		y = y - 0.01;
		logo.style.opacity = y;	
		setTimeout("down()","18");}
	}
function up(){
		if (x >= 1) {
			re_name.style.opacity = 1;	
			po_name.style.opacity = 1;
			note.style.opacity = 1;}  
		else {
			x = x + 0.01;
			re_name.style.opacity = x;	
			po_name.style.opacity = x;
			note.style.opacity = x;
			setTimeout("up()","10");}
}


var number = new RegExp('^[0-9]{5}$');

form.addEventListener('submit', function (event) {

    event.preventDefault();  
    document.getElementById('submit').disabled = 'disabled';

       if(code.value=="") {

		alert('请输入兑换码');

		}	else {
				if (!number.test(code.value)) {
					alert('请输入正确的兑换码');
				} else {


		var login = new XMLHttpRequest(); 
        

		login.onreadystatechange = function (event) {

			

			if (login.status == 200 || login.status == 304) {
			
				if(login.readyState == 4){
	  				
	  				var data = {};

	   				
	  				try{
	    				data = JSON.parse(login.responseText);
	   				} catch(e) {
		  			    console.error(e);}

					if(data.consequence == 'success') { 
                    	rewho.innerHTML = data.re_name;
                      	powho.innerHTML = data.po_name;
                      	note.innerHTML = data.note;

                    	down();
                   		up();
                   		document.getElementById('submit').removeAttribute("disabled"); 
                    } 

                    if(data.consequence == 'failed') {
                    	alert('获取失败');
                    	document.getElementById('submit').removeAttribute("disabled"); 
                    }
	  				
	  				if (data.consequence == 'failed_date') {
	  					alert('时间还没到，请半年后再来哦');
	  					document.getElementById('submit').removeAttribute("disabled"); 
	  				}

	  				if(data.consequence == 'none') {
                    	alert('很遗憾没有您的信件哦');
                    	document.getElementById('submit').removeAttribute("disabled"); 
                    }

	   			}
	   		} 
		}	 		

    	login.open("POST","../receive.php",true);
  	
   		login.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
  
    	login.send('code=' + form.code.value);
		}
		}
     
});

