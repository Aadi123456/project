class Boy{
    constructor(x,y,width,height)
    {
    var options={
    'restitution':1,
    'friction':0.4,
    'density':1,
   // isStatic:true
    
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("boy1.png");
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
    }