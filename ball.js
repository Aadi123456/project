class Ball{
constructor(x,y,radius)
{
var options={
'restitution':1,
'friction':0.4,
'density':1


}
this.body=Bodies.circle(x,y,radius,options);
this.image=loadImage("basketball.png");
this.radius=radius;
World.add(world,this.body);
}
display(){
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
}
}