canvas = document.getElementById("myCanvas");
ctx  = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;
var background_image="racing.jpg";
var rover_image= "car1.png";
var rover_x= 10;
var rover_y= 10;

var rover_image= "car.png";
var rover_width2 = 100;
var rover_height2 = 90;
var rover_x2= 10;
var rover_y2= 10;

function add()
{
     background_image_tag= new Image();
     background_image_tag.onload= uploadbackground();
     background_image_tag.src= background_image;

     rover_image_tag= new Image();
     rover_image_tag.onload= uploadrover();
     rover_image_tag.src= rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width, canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width, rover_height);

}


window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
     keypressed= e.keyCode;
     console.log(keypressed);


    
     if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }


    }



    function up(){

        if(rover_y>=10)
        {
           rover_y= rover_y-10;
           console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
    }


    function down(){

        if(rover_y<=500)
        {
           rover_y= rover_y+10;
           console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
    }


    function right(){

        if(rover_x<=700)
        {
           rover_x= rover_x+10;
           console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
    }


    function left(){

        if(rover_x>=0)
        {
           rover_x= rover_x-10;
           console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
    }

    function add2()
{
     background_image_ta2g= new Image();
     background_image_tag2.onload= uploadbackground();
     background_image_tag2.src= background_image;

     rover_image_tag2= new Image();
     rover_image_tag2.onload= uploadrover();
     rover_image_tag2.src= rover_image;
}

function uploadbackground2(){
    ctx.drawImage(background_image_tag2,0,0,canvas.width, canvas.height);

}
function uploadrover2(){
    ctx.drawImage(rover_image_tag2,rover_x2,rover_y2,rover_width2, rover_height2);

}


window.addEventListener("keydown" , mykeydown2);

function mykeydown2(e){
     keypressed= e.keyCode;
     console.log(keypressed);


    
     if (keypressed == '87') {
        up();
        console.log("w");
    }
    if (keypressed == '83') {
        down();
        console.log("s");
    }
    if (keypressed == '68') {
        right();
        console.log("d");
    }
    if (keypressed == '65') {
        left();
        console.log("a");
    }


    }



    function up2(){

        if(rover_y2>=10)
        {
           rover_y2= rover_y2-10;
           console.log("When up arrow is pressed, x = " + rover_x2 + " | y = " +rover_y2);
           uploadbackground2();
           uploadrover2();

        }
        
    }


    function down2(){

        if(rover_y<=500)
        {
           rover_y2= rover_y2+10;
           console.log("When down arrow is pressed, x = " + rover_x2 + " | y = " +rover_y2);
           uploadbackground2();
           uploadrover2();

        }
        
    }


    function right2(){

        if(rover_x2<=700)
        {
           rover_x2= rover_x2+10;
           console.log("When right arrow is pressed, x = " + rover_x2 + " | y = " +rover_y2);
           uploadbackground2();
           uploadrover2();

        }
        
    }


    function left2(){

        if(rover_x2>=0)
        {
           rover_x2= rover_x2-10;
           console.log("When left arrow is pressed, x = " + rover_x2 + " | y = " +rover_y2);
           uploadbackground2();
           uploadrover2();

        }
        
    }


