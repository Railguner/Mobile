document.getElementById('a').addEventListener('click',function(){

	var xhr = new XMLHttpRequest();

	var form = new FormData();

	form.append('username','lyj');
	form.append('age','21');

	xhr.open('GET','get.json');
	xhr.send(form);
	
})