// JavaScript Document

function Box(name) {
	this.width = 0;
	this.name = name;
	this.x = 0;
	this.y = 0;
	this.boundWidth = 20;
	this.boundHeight = 20;
	
	this.update = function() {
		this.__proto__.update();
		//console.log("updated update func");
	}
	
	this.onClick = function(e) {
		alert(e.offsetX + e.offsetY);
	}
}

Box.prototype = new GameObject();