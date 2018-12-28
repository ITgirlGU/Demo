var pitch = document.getElementById("pitch");
var p = document.getElementById("ppp");
pitch.firstElementChild.nextElementSibling.setAttribute("onclick","check(this)");
pitch.lastElementChild.setAttribute("onclick","check1(this)");
function check(that){
	pitch.firstElementChild.nextElementSibling.setAttribute("id","img1");
	if(pitch.lastElementChild.hasAttribute("id")){
		pitch.lastElementChild.removeAttribute("id");
	}
	p.lastElementChild.innerHTML = '"150ml"';
}
function check1(that){
	pitch.lastElementChild.setAttribute("id","img1");
	if(pitch.firstElementChild.nextElementSibling.hasAttribute("id")){
		pitch.firstElementChild.nextElementSibling.removeAttribute("id");
	}
	p.lastElementChild.innerHTML = '"200ml"';
}

var pitch3 = document.getElementById("pitch3");
var pitch5 = document.getElementById("pitch5");
var pitch4 = document.getElementById("pitch4");
pitch3.setAttribute("onclick","click1(this)");
pitch5.setAttribute("onclick","click2(this)");
function click1(that){
	console.log(1);
	if(pitch4.innerHTML==1){
		pitch3.setAttribute("style","color: #aca7a2;");
		pitch5.setAttribute("style","color: #000;");
	}
	else{
		var i =pitch4.innerHTML;
		i--;
		pitch4.innerHTML=i;
		pitch3.setAttribute("style","color: #000;");
		pitch5.setAttribute("style","color: #000;");
		if(pitch4.innerHTML==1){
			pitch3.setAttribute("style","color: #aca7a2;");
			pitch5.setAttribute("style","color: #000;");
		}
	}
	
}
function click2(that){
	if(pitch4.innerHTML==5){
		pitch5.setAttribute("style","color: #aca7a2;");
		pitch3.setAttribute("style","color: #000;");
	}
	else{
		var i =pitch4.innerHTML;
		i++;
		pitch4.innerHTML=i;
		pitch5.setAttribute("style","color: #000;");
		pitch3.setAttribute("style","color: #000;");
		if(pitch4.innerHTML==5){
			pitch5.setAttribute("style","color: #aca7a2;");

		}
	}
}

var jimg = document.getElementById("jimg");
var jimg1 = document.getElementById("jimg1");
var ximg = document.getElementById("ximg");
var ximg1 = document.getElementById("ximg1");
var img = document.getElementById("img");
ximg.setAttribute("onclick","fun(this)");
ximg1.setAttribute("onclick","fun1(this)");
jimg.setAttribute("onclick","func(this)");
jimg1.setAttribute("onclick","func1(this)");
function fun(that){
	ximg.setAttribute("class","tian");
	if(ximg1.hasAttribute("class")){
		ximg1.removeAttribute("class");
	}
	img.firstElementChild.setAttribute("src","./img/pp0.jpeg");
	Bimg.setAttribute("src","./img/pp0.jpeg");
}
function fun1(that){
	ximg1.setAttribute("class","tian");
	if(ximg.hasAttribute("class")){
		ximg.removeAttribute("class");
	}
	img.firstElementChild.setAttribute("src","./img/pp1.jpeg");
	Bimg.setAttribute("src","./img/pp1.jpeg");
}
function func(that){
	if(ximg1.hasAttribute("class")){
		ximg1.removeAttribute("class");
		ximg.setAttribute("class","tian");
		img.firstElementChild.setAttribute("src","./img/pp0.jpeg");
		Bimg.setAttribute("src","./img/pp0.jpeg");
	}
}
function func1(that){
	if(ximg.hasAttribute("class")){
		ximg.removeAttribute("class");
		ximg1.setAttribute("class","tian");
		img.firstElementChild.setAttribute("src","./img/pp1.jpeg");
		Bimg.setAttribute("src","./img/pp1.jpeg");
	}
}

var img = document.getElementById("img");
var slider1 = document.getElementById("slider1");
var img2 = document.getElementById("img2");
var Bimg = document.getElementById("Bimg");
//给左侧的小图随鼠标移动移出移入事件
img.onmouseover = function(){
	slider1.style.display = "block";
	img2.style.display = "block";
}
img.onmouseout = function(){
	slider1.style.display = "none";
	img2.style.display = "none";
}
img.onmousemove = function(ev){
	var ev = ev||window.event;
	var left = ev.clientX -boxx.offsetLeft - slider1.offsetWidth/2 -20;
	var top = ev.clientY - boxx.offsetTop - slider1.offsetHeight/2 -20 + document.documentElement.scrollTop -130;
	var maxleft = img.offsetWidth - slider1.offsetWidth;
	var maxtop = img.offsetHeight - slider1.offsetHeight;

	left = left>maxleft ? maxleft : left<0 ? 0 : left;
	top = top>maxtop ? maxtop : top<0 ? 0 : top;

	//设置放大镜的位置
	slider1.style.left = left + "px";
	slider1.style.top = top + "px";

	//根据左侧的放大镜的位置去计算右侧大图移动的比例
	var w = left/maxleft;
	var h = top/maxtop;

	//计算大图的最大的移动范围
	var BimgLeft = img2.offsetWidth - Bimg.offsetWidth;
	var BimgTop = img2.offsetHeight - Bimg.offsetHeight;

	//计算出来大图的移动的距离，设置位置
	Bimg.style.left = w* BimgLeft + "px";
	Bimg.style.top = h*BimgTop + "px";
}
window.onload = function(){
	var go1 = document.getElementById('go1');
	var boxquan = document.getElementById("boxquan");
	window.onscroll = function(){
		var st = document.documentElement.scrollTop;
		if(st>180){
			go1.style.position = 'fixed';
		}
		else{
			go1.style.position = 'static';
		}
	}
}

var d1 = document.getElementById("d1");
d1.setAttribute("onclick","addclick(this)");
function addclick(that){
	var k1 = document.getElementById("k1");
	var k11 =document.getElementById("k11");
	k1.style.opacity = '0.5';
	var wq = document.createElement("div");
	var imgg =document.createElement("img");
	var diva = document.createElement("div");
	var divb = document.createElement("div");
	var qp = document.createElement("p");
	wq.setAttribute("id","wq");
	qp.innerHTML = 'X';
	qp.setAttribute("id","qp");
	imgg.setAttribute("src","./img/rr11_02.jpg");
	imgg.style.float = 'left';
	diva.setAttribute("id","da");
	diva.innerHTML = "继续购物";
	divb.setAttribute("id","da1");
	divb.innerHTML = '去购物车结算';
	wq.insertBefore(qp,null);
	wq.insertBefore(imgg,null);
	wq.insertBefore(diva,null);
	wq.insertBefore(divb,null);
	k11.insertBefore(wq,null);
	var qp1 = document.getElementById("qp");
	var wq1 = document.getElementById("wq");
	var diva1 = document.getElementById("da");
	qp1.addEventListener('click',function(){
		var k1 = document.getElementById("k1");
		wq1.parentNode.removeChild(wq1);
		k1.style.opacity = '1';
	},false);
	diva1.addEventListener('click',function(){
		var k1 = document.getElementById("k1");
		wq1.parentNode.removeChild(wq1);
		k1.style.opacity = '1';
	},false);
}

