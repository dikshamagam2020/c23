class Box1{ 
constructor(x,y,width,height)
{
 var box_option={ 
'restitution': .8, } 
this.body= Bodies.rectangle(x,y,width,height,box_option); 
this.width=width;
 this.height=height; 
 World.add(world,this.body);
  console.log(this.body);
 }
  display(){
 var pos=this.body.position;
 // var angle=this.body.angle;
  // push();
  //  translate(pos.x,pos.y);
    // angleMode(RADIANS) rotate(angle); 
    rectMode(CENTER);
     fill(255);
      rect(pos.x,pos.y,this.width,this.height); 
   //   pop();
     }
     };
