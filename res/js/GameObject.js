// JavaScript Document

function GameObject() {
	this.name = "";
	this.x = 0;
	this.y = 0;
	this.boundWidth = 0;
	this.boundHeight = 0;
	
	this.update = function() {
		//console.log(this.name + " " + this.count);
		this.count += 1;
	}
	
	this.clickInBounds = function(x, y) {
		if (x >= this.x && x <= this.x + this.boundWidth && y >= this.y && y <= this.y + this.boundHeight) {
			return true;
		}
		return false;
	}
	
	this.clickEvent = function(e) {
		if (!this.clickInBounds(e.offsetX, e.offsetY))
			return;
			
		// click in bounds, so do the click handling
		this.onClick(e);
	}
	
	this.onClick = function(e) {
		console.log(e.offsetX + " " + e.offsetY);
	};
}