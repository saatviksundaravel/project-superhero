var canvas=new fabric.Canvas("myCanvas");
var playerX=10;
var playerY=10;
var blockImageWidth=40;
var blockImageHeight=40;
var playerImg=null;
var newImg=null;


function player_update(){
    fabric.Image.fromURL("player.png",function initPlayer(img){
        var playerObject=img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });

}

function uploadImage(newImg){
    fabric.Image.fromURL(newImg,function initBlock(img){
        var newObject=img;
        newObject.scaleToWidth(blockImageWidth);
        newObject.scaleToHeight(blockImageHeight);
        newObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(newObject);
    });
}

window.addEventListener("keydown",onKeydown);

function onKeydown(e){

    var keyPressed=e.keyCode;

    if(e.shiftKey=true && keyPressed==80){

        blockImageHeight=blockImageHeight+10;
        blockImageWidth=blockImageWidth+10;
        refreshBlockSize();
        console.log("Shift+p detected")
    }

    if(e.shiftKey==true && keyPressed==77){
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        refreshBlockSize();
    }

    if(keyPressed==38){
        up();
        console.log("up");
    }

    if(keyPressed==40){
        down()
        console.log("down");
    }

    if(keyPressed==37){
        left();
        console.log("left");
    }

    if(keyPressed==39){
        right();
        console.log("right");
    }

    if(keyPressed==72){
        uploadImage('captain_america_left_hand.png')
        console.log("h");
    }

    if(keyPressed==76){
        uploadImage('hulk_legs.png');
        console.log("l");
    }

    if(keyPressed==70){
        uploadImage('ironman_face.png');
        console.log("f");
    }


    if(keyPressed==66){
        uploadImage('spiderman_body.png');
        console.log("b");
    }

    if(keyPressed==82){
        uploadImage('thor_right_hand.png');
        console.log("r");
    }
} 

function up(){

}

function down(){

}

function right(){

}

function left(){

}

function refreshBlockSize(){
    document.getElementById("current_height").innerHTML=blockImageHeight;
    document.getElementById("current_width").innerHTML=blockImageWidth;
}

