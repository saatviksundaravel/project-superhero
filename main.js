var canvas = new fabric.Canvas("myCanvas");
var playerX = 10;
var playerY = 10;
var blockImageWidth = 40;
var blockImageHeight = 40;
var playerImg = null;
var newImg = null;
var playerObject=null;

player_update()

function player_update() {
    fabric.Image.fromURL("player.png", function initPlayer(img) {
        playerObject = img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });

}

function uploadImage(newImg) {
    fabric.Image.fromURL(newImg, function initBlock(img) {
        var newObject = img;
        newObject.scaleToWidth(blockImageWidth);
        newObject.scaleToHeight(blockImageHeight);
        newObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(newObject);
    });
}

window.addEventListener("keydown", onKeydown);

function onKeydown(e) {

    var keyPressed = e.keyCode;

    if (e.shiftKey = true && keyPressed == 80) {

        blockImageHeight = blockImageHeight + 10;
        blockImageWidth = blockImageWidth + 10;
        refreshBlockSize();
        console.log("Shift+p detected")
    }

    if (e.shiftKey == true && keyPressed == 77) {
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        refreshBlockSize();
    }

    if (keyPressed == 38) {
        up();
        console.log("up");
    }

    if (keyPressed == 40) {
        down()
        console.log("down");
    }

    if (keyPressed == 37) {
        left();
        console.log("left");
    }

    if (keyPressed == 39) {
        right();
        console.log("right");
    }

    if (keyPressed == 72) {
        uploadImage('captain_america_left_hand.png')
        console.log("h");
    }

    if (keyPressed == 76) {
        uploadImage('hulk_legs.png');
        console.log("l");
    }

    if (keyPressed == 70) {
        uploadImage('ironman_face.png');
        console.log("f");
    }


    if (keyPressed == 66) {
        uploadImage('spiderman_body.png');
        console.log("b");
    }

    if (keyPressed == 82) {
        uploadImage('thor_right_hand.png');
        console.log("r");
    }
}

function up() {
    if (playerY > 0) {
        playerY = playerY - blockImageHeight;
        console.log("block image height = " + blockImageHeight);
        console.log("when up arrow key is pressed ,X = " + playerX + " , Y =" + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function down() {
    if (playerY < canvas.height-150) {
        playerY = playerY + blockImageHeight;
        console.log("block image height = " + blockImageHeight);
        console.log("when down arrow key is pressed ,X = " + playerX + " , Y =" + playerY);
        canvas.remove(playerObject);
        player_update();

    }
}

function right() {
    if (playerX < canvas.width-150){
        playerX = playerX + blockImageWidth;
        console.log("block image width = " + blockImageWidth);
        console.log("when right arrow key is pressed ,X = " + playerX + " , Y =" + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function left() {
    if (playerX > 0){
        playerX = playerX -blockImageWidth;
        console.log("block image width = " + blockImageWidth);
        console.log("when left arrow key is pressed ,X = " + playerX + " , Y =" + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function refreshBlockSize() {
    document.getElementById("current_height").innerHTML = blockImageHeight;
    document.getElementById("current_width").innerHTML = blockImageWidth;
}
