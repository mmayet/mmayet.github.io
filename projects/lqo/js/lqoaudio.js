if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

function playSound(selectedWord, audioToPlay) {
	var word = document.getElementById(selectedWord);
	var audio = document.getElementById(audioToPlay);
	$(function() {
		$(audio)[0].play();
	});
}

$(".arabic-text").mouseenter(function() {
	$(this).css("background-color", "lightgrey");
}).mouseleave(function() {
	$(this).css("background-color", "#edeaea");
});

/*
$(".arabic-text").click(function() {
	$(this).css("text-shadow", "5px 5px 25px #7abcff").delay(800).css("text-shadow","0 0 0 black");
});
*/

/*
$(".arabic-text").click(function() {
	if (!$(this).is(':animated'))
    	$(this).glowEffect(0,40,500);
});

$.fn.glowEffect = function(start, end, duration) {
    var $this = this;
    return this.css("a", start).animate({
        a: end
    }, {
        duration: duration,
        step: function(now) {
            $this.css("text-shadow","0px 0px "+now+"px #7abcff");
        }
    });
};
*/

$(".arabic-text").click(function() {
	$(this).fadeOut(50);
	$(this).fadeIn(50);
});
