// JavaScript Document
box1 = new Box("box1");
box1.deltaX = 5;

box2 = new Box("box2");
box2.y = 580;
box2.deltaY = -3;
box2.imageSrc = "res/img/Sinistar/Sun2.bmp";

$(document).ready(function(e) {
	document.game.addObject(box1);
	document.game.addObject(box2); 
});