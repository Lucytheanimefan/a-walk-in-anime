console.log("scroll top: " + $("#totoro").scrollTop());

$("#totoro").scroll(function() {
    $('body').append("<img src='../images/totoro2.gif'>");
});


var RIGHT = 39;
var LEFT = 37;


$(document).keydown(function(e) {
    if (e.keyCode == RIGHT) {
    	flipTotoro(-1);
        moveHorizontal("#totoro", 20);
    } else if (e.keyCode == LEFT) {
    	flipTotoro();
        moveHorizontal("#totoro", -20);
    }
    console.log(e.keyCode);
});

function moveHorizontal(divElement, x_diff) {
    var pos = $(divElement).position();
    var new_x = pos.left + x_diff;
    console.log("new x: " + new_x)
    $(divElement).css({ left: new_x })
}

function flipTotoro(isLeft=1) {
	var direction = isLeft.toString(); 
    $("#totoro").css({
        "-moz-transform": "scaleX("+isLeft+")",
        "-webkit-transform": "scaleX("+isLeft+")",
        "-o-transform": "scaleX("+isLeft+")",
        "transform": "scaleX("+isLeft+")"
    });


}
