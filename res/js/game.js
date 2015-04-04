// JavaScript Document
$(document).ready(function(e) {
    document.game = new Game();
	document.game.init();
});

function Game() {
	this.gameTime = 0;
	this.interval = 1;
	
	this.objects = [];
	this.images = [];
	
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
		
		this.detectCollisions();
		
		this.objects.forEach(function(obj) {
			obj.updateEvent();
		});
	};
	
	this.draw = function() {
		// draw the contents in the canvas here
		if (this.gameTime % 5 != 0)
			return;
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle=("black");
		this.ctx.fill();
		this.objects.forEach(function(obj) {
			document.game.ctx.drawImage(obj.image, obj.x, obj.y, obj.width, obj.height);
		});
	};
	
	this.detectCollisions = function() {
		var objs = this.objects;
		for (i = 0; i < this.objects.length; i++) {
			for (j = 0; j < this.objects.length; j++) {
				if (i == j)
					continue;
				ixHigh = objs[i].x + objs[i].width;
				iyHigh = objs[i].y + objs[i].height;
				ixLow = objs[i].x;
				iyLow = objs[i].y;
				jxHigh = objs[j].x + objs[j].width;
				jyHigh = objs[j].y + objs[j].height;
				jxLow = objs[j].x;
				jyLow = objs[j].y;
				t1 = ixHigh >= jxLow;
				t2 = iyHigh >= jyLow;
				t3 = jxHigh >= ixLow;
				t4 = jyHigh >= iyLow;
				if (t1 && t2 && t3 && t4) {
					// this is a collision because the x and y directions overlap
					
					// create copies of each object so each collision handler can see the colliding state of the other object
					obj1 = $.extend({}, objs[i]);
					obj2 = $.extend({}, objs[j]);
					
					// do the collisions
					objs[i].collidedWith(obj2);
					objs[j].collidedWith(obj1);
				} else {
					
				}
			}
		}
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