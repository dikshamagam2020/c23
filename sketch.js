

const Engine= Matter.Engine
 const World=Matter.World 
 const Bodies=Matter.Bodies
  var engine,world;
   var ground; 
  var  box1,box2;

  function setup() {
     createCanvas(800,400);
     engine=Engine.create(); 
     world=engine.world;
      var option={
         isStatic:true 
        }
       ground=Bodies.rectangle(400,390,800,20,option)
        World.add(world,ground)
box1=new Box1(200,50,50,50);
 box2=new Box1(100,50,50,100);     

       } 
        function draw() {
           background(0); 
          Engine.update(engine); 
          rectMode(CENTER)
           rect(ground.position.x,ground.position.y,800,20)
box1.display();
 box2.display()          
           }




























