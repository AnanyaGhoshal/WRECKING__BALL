class Ball{

    constructor(x,y){

        var options={
   
            restitution:0.2,
            frictionAir:0.001,
            density:1

        }

        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("brown");
        circle(0,0,this.radius*2, this.radius*2);
        pop();

    }





}