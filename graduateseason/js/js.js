function setTimeAttr(){
		var tabs=[document.getElementById('tabHalfYear'),document.getElementById('tabOneYear')];
		document.getElementById('halfYear').onclick=function()
		{
			tabs[0].setAttribute('class','halfYear tabs');
			tabs[1].setAttribute('class','tabs');
			
		};
		document.getElementById('oneYear').onclick = function()
		{
			tabs[0].setAttribute('class','tabs');
			tabs[1].setAttribute('class','oneYear tabs');			
		};
	}
	


	
//验证	
  function validate()
  {
	resetFields();
	resetFieldsbox();
	var isTrue=1;
	var isT=1;
    var name=document.getElementById('name').value;

	var qq=document.getElementById('qq').value;
	var Vqq=/^\d{5,10}$/;
	var tel=document.getElementById('tel').value;
	var Vtel=/^1[3|4|5|8][0-9]\d{4,8}$/;
	var text=document.getElementById('text').value;
      
	   if(name=="")
		{
		  $('#name').addClass("required");
		  	isT=0;
        	isTrue=0;
		}
		if(text=="")
		{
			$("#text").addClass("required");
			 isT=0;
			isTrue=0;
		}
		if((qq=="")||(!Vqq.test(qq)))
		{
			$("#qq").addClass("requiredbox");
			 isT=0;;
			isTrue=0;
		}
		if((tel=="")||(!Vtel.test(tel)))
		{
			$("#tel").addClass("requiredbox");
			isT=0;
			isTrue=0;
		}
		if(isT==0)
		{
			alert("有些信息填错了哦，请检查一下！")
		}
      	if (!$(".time input[name=time]").is(":checked")) 
		{   
            alert("请选择收信时间！");
            isTrue=0;
    	 } 	

		if(isTrue==0)
		{
			return false;
		}
         function resetFields() {
            $("#name,#text").removeClass("required");
        }
		function resetFieldsbox() {
            $("#qq,#tel").removeClass("requiredbox");
        }

  };