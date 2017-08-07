$(document).ready(function (){
	$('body').click(function(event){
		$('.option').slideUp();
	});
});


$(document).ready(function (){
	$('.triangle1').click(function (e){
		e.stopPropagation();
		$('.select1').children(".option1").toggle();
	});
});  
$(document).ready(function (){
	$('.select1').children(".option1").click(function(){
		var a = $(this).text();
		$('.triangle1').text(a+'∨');
	});
});	


$(document).ready(function (){
	$('.triangle2').click(function (e){
		e.stopPropagation();
		$('.select2').children(".option2").toggle();
	});
});  
$(document).ready(function (){
	$('.select2').children(".option2").click(function(){
		var b = $(this).text();
		$('.triangle2').text(b+'∨');
	});
});	

$(document).ready(function (){
	$(window).resize(function(){
		$('.resize').css('width','10%');
	});
});	


