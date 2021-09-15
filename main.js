  
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}
if(keyPressed == '82')
{
    new_image('https://i.pinimg.com/originals/b9/2d/87/b92d876ab13590add10114a4e4123df6.gif'); 
    console.log("r");
}
if(keyPressed == '89')
{
    new_image('https://i.pinimg.com/originals/b1/6a/8d/b16a8ddf49dcf4e2f40166ece3da2648.gif'); 
    console.log("y");
}
if(keyPressed == '71')
{
    new_image('https://i.pinimg.com/originals/8a/38/7b/8a387b4505e849dcd9b2270cff2820c3.gif'); 
    console.log("g");
}
if(keyPressed == '80')
{
    new_image('https://i.pinimg.com/originals/07/e4/85/07e485440b44864d4202e8c7b9a28597.gif'); 
    console.log("p");
}
if(keyPressed == '66')
{
    new_image('https://th.bing.com/th/id/R.5645697cb948f650be31b6f10ea9f066?rik=eWe1IxilElYi6Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-kziOQcpbRw0%2fTklL4kHb98I%2fAAAAAAAADhw%2fw7oeNtndZUA%2fs1600%2fPower-Rangers-Blue-Ranger.gif&ehk=BeaF%2bQRd6lsTM8KXnAt%2fI01RyLA%2fjTd5IYqf4FRotrA%3d&risl=&pid=ImgRaw&r=0'); 
    console.log("b");
}
	
	

}

