class constraint{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            'stiffness':1,
            'length':10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyA.position
   
    strokeWeight(4)
    stroke("black")
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}