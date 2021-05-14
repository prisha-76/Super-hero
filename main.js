var canvas = new fabric.Canvas("myCanvas")
player_X=10
player_Y=10
block_image_width=30
block_image_height=30
var player_object="" ;
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img) {
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_Y,
    left:player_X

})
canvas.add(player_object);
    })
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image , function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_Y,
    left:player_X

})
canvas.add(block_image_object);
    })
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode
    console.log(keyPressed)
    console.log(e)
    if (e.shiftKey==true&&keyPressed==80)
    {
        console.log("p and shift pressed together")
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    
    if (e.shiftKey==true&&keyPressed==77)
    {
        console.log("m and shift pressed together")
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        console.log(e);
    }
    
    if (keyPressed == '38')
    {
        up();
    }
    if (keyPressed == '40')
    {
       down();
    }
    if (keyPressed == '37')
    {
       left();
    }
    if (keyPressed == '39')
    {
        right();
    }
    if (keyPressed == '76')
    {
       new_image ('ironman_left_hand.png');
       console.log('l');
    }
    if (keyPressed == '82')
    {
       new_image ('thor_right_hand.png');
       console.log('r');
    }
    if (keyPressed == '70')
    {
       new_image ('spiderman_legs.png');
       console.log('f');
       
    }
    if (keyPressed == '66')
    {
       new_image ('hulkd_body.png');
       console.log('b');
    }
    if (keyPressed == '77')
    {
       new_image ('thor_face.png');
       console.log('m');
    }
} 


function up()
{
if (player_Y>=0)
{
player_Y=player_Y-block_image_height
canvas.remove(player_object)
player_update()
}
}
function down ()
{
if (player_Y<=500)
{
    player_Y=player_Y+block_image_height
    canvas.remove(player_object)
    player_update()
}
}
function left()
{
    if(player_X>=0)
    {
        player_X=player_X-block_image_width
        canvas.remove(player_object)
        player_update()
    }
}
function right()
{
    if(player_X<=900)
    {
        player_X=player_X+block_image_width
        canvas.remove(player_object)
        player_update()
    }

}