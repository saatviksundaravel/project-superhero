var canvas=new fabric.Canvas("myCanvas");
var playerX=10;
var playerY=10;
var newImgWidth=40;
var newImgheight=40;
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

function new_image(newImg){
    fabric.Image.fromURL(newImg,function initBlock(img){
        var newObject=img;
        newObject.scaleToWidth(newImgWidth);
        newObject.scaleToHeight(newImgheight);
        newObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(newObject);
    });
}
