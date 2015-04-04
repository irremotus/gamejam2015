// JavaScript Document

function GameObject() {
	this.name = "";
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.imageSrc = "";
	this.image = null;
	this.interval = 1;
	this.isCollided = [];
	
	this.updateEvent = function() {
		if (document.game.gameTime % this.interval == 0)
			this.update();
	};
	
	this.update = function() {
	}
	
	this.clickInBounds = function(x, y) {
		if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
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
	
	this.collidedWith = function(obj) {
		
	};
	
}