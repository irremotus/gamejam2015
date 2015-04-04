$(document).ready(function(e) {
	for (i = 0; i < 10; i++) {
		var o = new Box("box");
		o.x = Math.round(Math.random() * 800);
		o.y = Math.round(Math.random() * 600);
		o.deltaX = Math.round(Math.random() * 5) + 1;
		o.deltaY = Math.round(Math.random() * 5) + 1;
		o.imageSrc = "res/img/Sinistar/Sun2.bmp";
		document.game.addObject(o);
	}
});