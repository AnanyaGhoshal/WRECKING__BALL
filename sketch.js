const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var vox = [];
//var vox2 = [];
//var vox3 = [];

var ball, string;
  

function setup(){

  createCanvas(3000,800);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,600,1220,10);

for(var i = 0; i<5; i++ ){

  vox.push(new Box(700,100));
 
}

for(var i=0; i<7; i++){

  vox.push(new Box(800,100));

}

for(var i=0; i<8; i++){

  vox.push(new Box(900,100));

}

ball = new Ball(450,400);
string = new Slingshot(ball.body,{x:450, y:100});


}

function draw() {

  background(48,22,7);

  Engine.update(engine);


  ground.display();

 for(var j=0; j<vox.length; j++){

    vox[j].display();

  }

 /* for (var i=0; i<7; i++){

    vox2[i].display();

  }

  for(var i=0; i<8; i++){

    vox3[i].display();

  }*/

  ball.display();
  string.display();

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});

}
