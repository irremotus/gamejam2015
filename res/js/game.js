// JavaScript Document
$(document).ready(function(e) {
    document.game = new Game();
	document.game.init();
});

function Game() {
	this.interval = 1000;
	
	this.objects = [];
	
	this.init = function() {
		// init here
		
		this.loadContent();
	};
	
	this.loadContent = function() {
		// load initial content
		
		var self = this;
		
		// set up canvas
		var canvas = document.getElementById('canvas');
		this.context = canvas.getContext('2d');
		
		// enable keyboard events
		$(document).bind('keyup', function(e) {
			self.keyEvent(e);
		});
		
		// enable mouse events
		$('#canvas').click(function(e) {
            self.mouseEvent(e);
        });
		
		this.gameLoop = setInterval(function(){self.runGameLoop();}, this.interval);
	};
	
	this.runGameLoop = function() {
		this.update();
		this.draw();
	};
	
	this.update = function() {
		// react to user interaction here
		
		this.objects.forEach(function(obj) {
			obj.update();
		});
	};
	
	this.draw = function() {
		// draw the contents in the canvas here
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
		this.objects.push(obj);
	};
	
}