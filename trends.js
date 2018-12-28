window.onload = function(){
	var go = document.getElementById('go');
	var box = document.getElementById('box');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop;
		if(st>150){
			go.style.position = 'fixed';
			box.style.top = '130px';
		}
		else{
			go.style.position = 'static';
			box.style.top = '0px';
		}
	}
}

//电话修改
var select = document.getElementById("select");
// select.setAttribute("onclick","click(this)");
select.addEventListener('click',function(){
	var text = select.options[select.selectedIndex].text;
	var span = document.getElementById("ap1");
	span.innerHTML = text;
},false);
// function click(that){
// 	var text = select.options[select.selectedIndex].text;
// 	var p = document.getElementById("ap");
// 	var span = document.getElementById("ap1");
// 	span.innerHTML = text;
// }

var dk11 = document.getElementById("dk11");
var dk2 = document.getElementById("dk2");
var dk3 = document.getElementById("dk3");
var dk4 = document.getElementById("dk4");
dk11.onmouseover = function(){
	dk11.style.right = 0 + "px";
}
dk11.onmouseout = function(){
	dk11.style.right = -78 + "px";
}
dk2.onmouseover = function(){
	dk2.style.right = 0 + "px";
}
dk2.onmouseout = function(){
	dk2.style.right = -78 + "px";
}
dk3.onmouseover = function(){
	dk3.style.right = 0 + "px";
	dk3.lastElementChild.setAttribute("src","./img/erwei.png");
	dk3.lastElementChild.setAttribute("style","margin-top:-8px;margin-left:13px;"); 
}
dk3.onmouseout = function(){
	dk3.style.right = -78 + "px";
	dk3.lastElementChild.setAttribute("src","./img/serwei.png");
	dk3.lastElementChild.setAttribute("style","margin-top:35px;margin-left:13px;");
}
dk4.onmouseover = function(){
	dk4.style.right = 0 + "px";
}
dk4.onmouseout = function(){
	dk4.style.right = -78 + "px";
}


