var form = document.getElementById('form');
var btn = document.getElementById('btn');
var touch = document.getElementById('touch');
var button = document.getElementById('button');
var code = document.getElementById('code');
var receive = document.getElementById('receive');
var rewho = document.getElementById('rewho');
var powho = document.getElementById('powho');
var re_name = document.getElementById('re_name');
var po_name = document.getElementById('po_name');
var note = document.getElementById('note');

code.oninput = function() {
	if (code.value=="") {
		touch.style.display = "none";
	} else {
		touch.style.display = "block";
	}
}
touch.onclick = function() {
	touch.style.display = "none";
	code.focus();
}


if(window.screen.width <= 360){
	receive.style.paddingRight = 8 + 'px';
	re_name.style.paddingLeft = 8 + 'px';
	po_name.style.paddingLeft = 8 + 'px';
	note.style.paddingLeft = 8 + 'px';
	note.style.paddingRight = 8 + 'px';

	} else{

	}

document.body.style.minHeight = window.innerHeight + 'px';
