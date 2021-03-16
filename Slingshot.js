class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 300
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
  attach(body){
      this.sling.bodyA = body;
  }
  

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("black");
            if(pointA.x < 200) {
                
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x , pointB.y);               

            }
            else{
                
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                                
            }
           
            
            pop();
        }

        
    }

}