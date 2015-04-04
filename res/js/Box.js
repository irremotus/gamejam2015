// JavaScript Document

function Box(name) {
	this.width = 0;
	this.name = name;
	this.x = 0;
	this.y = 0;
	this.width = 20;
	this.height = 20;
	this.imageSrc = "res/img/Sinistar/Sun1.bmp";
	this.interval = 5;
	
	this.deltaX = 1;
	this.deltaY = 1;
	
	this.update = function() {
		this.x += this.deltaX;
		this.y += this.deltaY;
		
		if (this.x > document.game.canvas.width || this.x < 0)
			this.deltaX *= -1;
		if (this.y > document.game.canvas.height || this.y < 0)
			this.deltaY *= -1;
	}
	
	this.onClick = function(e) {
		console.log(e);
		this.deltaX *= -1;
		this.deltaY *= -1;
	}
	
	this.collidedWith = function(obj) {
		// obj is readonly!!!!
		if (this.deltaX > 0 != obj.deltaX > 0)
			this.deltaX *= -1;
		if (this.deltaY > 0 != obj.deltaY > 0)
			this.deltaY *= -1;
		
		this.update();
	};
}

Box.prototype = new GameObject();