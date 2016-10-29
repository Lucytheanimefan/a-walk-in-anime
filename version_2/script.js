console.log("scroll top: " + $("#totoro").scrollTop());

$("#totoro").scroll(function() {
    $('body').append("<img src='../images/totoro2.gif'>");
});


var RIGHT = 39;
var LEFT = 37;

var sceneChangeCount = 0;

var backgroundImages = ["../images/fall.png", "../images/snow.jpg", "../images/spring.jpg", "../images/summer.jpg"];

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
    $(divElement).css({ left: new_x })
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
        "background-size": "cover"
    });

}
