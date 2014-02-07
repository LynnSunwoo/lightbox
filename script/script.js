// JavaScript Document

window.onload = rawl;

//global variables
var overBtn = false;
var pos = 0;
var image;
var title;

function rawl(){

	image = document.querySelectorAll(".imagebox img");
	for(var i=0;i<image.length;i++){
		image[i].onclick = makeLightbox;
		image[i].id = i;
	}
}

function makeLightbox(){
	
	//making a overlay div, boxer, img, next, prev, exit, title
	var overlay = makeCustomDiv("overlay",document.querySelector("body"));
	var boxer = makeCustomDiv("boxer",overlay);
	var prev = makeCustomDiv("btnPrev",boxer);
	var next = makeCustomDiv("btnNext",boxer);	
	var exit = makeCustomDiv("exit",boxer);
	var img = document.createElement("img");
	title = document.createElement("p");
	
	//append img and title (p)
	boxer.appendChild(img);
	boxer.appendChild(title);
	
	//calling image locations
	pos = this.id;
	var imgsrc = this.src;
	var slash = imgsrc.lastIndexOf("/")+1;
	var end = imgsrc.length-9;
	var name = imgsrc.substring(slash,end);
	img.src = "images/" + name + ".jpg";
	
	//just getting the title which is imagenames
	title.innerHTML =  name ;
	
	//function the buttons
	prev.onclick = goPrev;
	next.onclick = goNext;
	exit.onclick = quit;
}

//exit button
function quit(){
	
	if(overBtn == true){
		overBtn = false;
	}else{
		var overlay = document.querySelector("#overlay");
		document.querySelector("body").removeChild(overlay);
	}
}

//function for the Prev button in the lightbox
function goNext(){
	
	overBtn = true;
	pos++;
	if(pos>=image.length){
		pos=0;
	}
	var name = getBigImage(image[pos]);
	var img = document.querySelector("#boxer img");
	img.src = "images/" + name + ".jpg";
	
	title.innerHTML = name ;
}

//function for the Next button in the lightbox
function goPrev(){
	
	overBtn = true;
	pos--;
	if(pos<0){
		pos=image.length -1;
	}
	var name = getBigImage(image[pos]);
	var img = document.querySelector("#boxer img");
	img.src = "images/" + name + ".jpg";
	
	title.innerHTML = name ;	
}

function getBigImage(thumb){

	var imgsrc = thumb.src;
	var slash = imgsrc.lastIndexOf("/")+1;
	var end = imgsrc.length-9;
	var name = imgsrc.substring(slash,end);
	return name;
}

//making Div with id and the locaiton
function makeCustomDiv(dID,dParent){
	
	var div = document.createElement("div");
	div.id = dID;
	dParent.appendChild(div);
	return div;
	}