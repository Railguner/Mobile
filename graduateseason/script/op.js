window.onload=fade();
var t=0,t2=0,c=1,d=50,b=0;
function autoplay1(){
	     var pic1=document.getElementById("op");
		 pic1.style.opacity=1-easeout(t,b,c,d);
		  t++;   
    if(t<=d)   
        setTimeout(autoplay1,20);   
    else
        pic1.style.display='none';

	 }

	 function autoplay2(){
	     var pic2=document.getElementById("container");
		 pic2.style.opacity=easeout(t2,b,c,d);
		  t2++;   
    if(t2<=d)   
        setTimeout(autoplay2,20);   

	 }
function easeout(t,b,c,d){
            return t*c/d+b;
}
function fade(){
	setTimeout(autoplay1,2000);
	setTimeout(autoplay2,3000);
	
}