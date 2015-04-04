// JavaScript Document
$(document).ready(function(e) {
    document.game = new Game();
	document.game.init();
});

function Game() {
	this.gameTime = 0;
	this.interval = 1;
	
	this.objects = [];
	
	this.init = function() {
		// init here
		
		var self = this;
		
		// enable keyboard events
		$(document).bind('keyup', function(e) {
			self.keyEvent(e);
		});
		
		// enable mouse events
		$('#canvas').click(function(e) {
            self.mouseEvent(e);
        });
		
		this.loadContent();
		
		this.gameLoop = setInterval(function(){self.runGameLoop();}, this.interval);
	};
	
	this.loadContent = function() {
		// load initial content
		
		// set up canvas
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
	};
	
	this.runGameLoop = function() {
		this.update();
		this.draw();
		this.gameTime++;
	};
	
	this.update = function() {
		// react to user interaction here
		
		this.objects.forEach(function(obj) {
			obj.updateEvent();
		});
	};
	
	this.draw = function() {
		// draw the contents in the canvas here
		
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.objects.forEach(function(obj) {
			document.game.ctx.drawImage(obj.getImage(), obj.x, obj.y, obj.width, obj.height);
		});
	};
	
	this.keyEvent = function(e) {
		console.log(e.keyCode);
	};
	
	this.mouseEvent = function(e) {
		console.log(e.offsetX + " " + e.offsetY);
		this.objects.forEach(function(obj) {
			obj.clickEvent(e);
		});
	};
	
	this.addObject = function(obj) {
		obj.image = this.loadImage(obj.imageSrc);
		this.objects.push(obj);
	};
	
	this.loadImage = function(src) {
		var img = new Image();
		img.src = src;
		return img;
	}
	
}