class Block{
  constructor(x,y,width,heigth){
      var options = {
          restitution : 1,
          friction : 0.3,
          density : 1

      };
      this.body = Bodies.rectangle(x,y,width,heigth,options);
      World.add(world,this.body);
      this.width = width;
      this.heigth = heigth;
  }
display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  strokeWeight(2);
  stroke("black");
  fill("red");
  rectMode(CENTER);
  rect(0,0,this.width,this.heigth);
  pop(); 
}

}