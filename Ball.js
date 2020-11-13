class Ball {
    constructor(x,y,r){
    var options={
     'isStatic':false,
     'restitution':0.3,
     'friction':0.5,
     'density':1.2
    }
    this.r=r;
    this.x=x;
    this.y=y;
    this.body=Matter.Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.body);
    }
    display() {
    push();
    translate(this.body.position.x,this.body.position.y);
    fill("red");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }
 }