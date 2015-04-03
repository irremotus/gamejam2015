// JavaScript Document
box1 = new Box("box1");
box2 = new Box("box2");
box2.x = 780;

$(document).ready(function(e) {
	document.game.addObject(box1);
	document.game.addObject(box2); 
});