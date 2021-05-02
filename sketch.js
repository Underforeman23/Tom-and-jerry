var garden,mouse,cat
function preload() {
    //load the images here
    garden = loadImage("images/garden.png") ;
        C1 = loadAnimation ("images/cat1.png")
        M1 = loadAnimation ("images/mouse2.png")
        M2 = loadAnimation ("images/mouse3.png","images/mouse1.png" )
      C2 = loadAnimation ("images/cat2.png", "images/cat3.png")
      C3 = loadAnimation ("images/cat4.png")
   
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite (500,700,50,50)
cat.addAnimation ("tom standing",C1)
cat.addAnimation ("tom walking",C2)
cat.addAnimation ("tom end",C3)
cat.scale = 0.2
mouse = createSprite (100,700,50,50)
mouse.addAnimation("jerry standing", M1)
mouse.addAnimation("teasing", M2)
mouse.scale = 0.2
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if(cat.x -mouse.x <(cat.width-mouse.width)/2){
    cat.velocityX = 0;
    cat.changeAnimation ("tom end",C3)
    mouse.changeAnimation("jerry standing", M1)
}
    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    mouse.changeAnimation("teasing", M2)
    cat.velocityX= -3;
    cat.changeAnimation ("tom walking",C2)
  //For moving and changing animation write code here

}
}
