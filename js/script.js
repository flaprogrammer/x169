$(window).load(function() {
	resize();
});

$(window).resize(function() {
	resize();
});

function resize() {
	var background = $('.background');
	var wrapper = $('.background__wrapper');
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;

	var ratio = w/h;


	if (ratio <= 4 / 3) {
		var bw = h * 16 / 9;
		var ww = h * 4/3;
		background.css('width', bw);
		wrapper.css('width', ww);

		background.css('left', (ww-bw)/2);
	}
	else {
		background.css('width', '100%');
		wrapper.css('width', "100%");
		background.css('left', 0);
	}

	if (ratio > 16 / 8) {
		//ww = 
		background.css('height', w * 9 / 16);
		wrapper.css('height', w * 8 / 16);
		wrapper.css('width', "100%");
	}
	else {
		background.css('height', '100%');
	}
}