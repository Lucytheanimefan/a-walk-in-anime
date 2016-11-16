console.log("scroll top: " + $("#totoro").scrollTop());

$("#totoro").scroll(function() {
    $('body').append("<img src='../images/totoro2.gif'>");
});


var RIGHT = 39;
var LEFT = 37;

var sceneChangeCount = 0;

var backgroundImages = ["../images/fall.png", "../images/snow.jpg", "../images/spring.jpg", "../images/summer.jpg"];

$('#scoreButton').click();

$(document).keydown(function(e) {
    if (e.keyCode == RIGHT) {
        flipTotoro(-1);
        moveHorizontal("#totoro", 20);
        if (!$('#totoro').visible()) {
            $("#totoro").css({ left: 0 });
            sceneChangeCount++;
            changeScenes();
        }
    } else if (e.keyCode == LEFT) {
        flipTotoro();
        moveHorizontal("#totoro", -20);
        if (!$('#totoro').visible()) {
            var x = $(window).width() - 500;
            $("#totoro").css({ left: x });
            if (sceneChangeCount == 0) {
                sceneChangeCount=3;
            } else {
                sceneChangeCount--;
            }
            changeScenes();
        }
    }
});


function changeScenes() {
    console.log("change scenes: " + sceneChangeCount);
    if (sceneChangeCount > 3) {
        sceneChangeCount = 0;
    }
    changeScene(backgroundImages[sceneChangeCount]);
}


function moveHorizontal(divElement, x_diff) {
    var pos = $(divElement).position();
    var new_x = pos.left + x_diff;
    console.log("new x: " + new_x)
    $(divElement).css({ left: new_x });
    var perc = getXPercentage(pos);
    console.log("percent: "+perc);
    if (sceneChangeCount==0){
    	firstPage(perc);
        snowStorm.freeze();
    }else if (sceneChangeCount==1){
    	secondPage(perc);
        snow();
    }else if (sceneChangeCount==2){
    	spring();
    }else if (sceneChangeCount==3){
    	//summer
    }

}

function getXPercentage(pos){
	var percent = pos.left/($(window).width() - 500);
	return percent;
}

function flipTotoro(isLeft = 1) {
    var direction = isLeft.toString();
    $("#totoro").css({
        "-moz-transform": "scaleX(" + isLeft + ")",
        "-webkit-transform": "scaleX(" + isLeft + ")",
        "-o-transform": "scaleX(" + isLeft + ")",
        "transform": "scaleX(" + isLeft + ")"
    });
}


function changeScene(imagePath) {
    $("body").css({
        "background-image": "url(" + imagePath + ")",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        "background-size": "cover",
        "background-repeat": "no-repeat"
    });

}

function firstPage(perc){ //fall
	if (perc<0.02){
		$('#text').append("<h1 class='tlt'>Welcome to Totoro's Adventure</h1>");
		$('.tlt').textillate();
	}
}

function secondPage(perc){ //winter
	$("#text").empty();
}

function snow(){
    snowStorm.resume();
    //snowStorm.followMouse = true;

}

function spring(){
    snowStorm.freeze();
}









