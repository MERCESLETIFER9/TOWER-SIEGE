const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;

function setup(){

    var canvas = createCanvas(1000, 800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(437,400,330,20);
    ground2 = new Ground(747,250,200,20);

    box1 = new Block(330,370,30,40);
    box2 = new Block(380,370,30,40);
    box3 = new Block(430,370,30,40);
    box4 = new Block(480,370,30,40);
    box5 = new Block(530,370,30,40);
    box6 = new Block(670,220,30,40);
    box7 = new Block(710,220,30,40);
    box8 = new Block(750,220,30,40);
    box9 = new Block(790,220,30,40);
    box10 = new Block(830,220,30,40);
    box11 = new Block(355,330,30,40);
    box12 = new Block(405,330,30,40);
    box13 = new Block(455,330,30,40);
    box14 = new Block(505,330,30,40);
    box15 = new Block(380,290,30,40);
    box16 = new Block(430,290,30,40);
    box17 = new Block(480,290,30,40);
    box18 = new Block(405,250,30,40);
    box19 = new Block(455,250,30,40);
    box20 = new Block(430,210,30,40);
    box21 = new Block(690,180,30,40);
    box22 = new Block(730,180,30,40);
    box23 = new Block(770,180,30,40);
    box24 = new Block(810,180,30,40);
    box25 = new Block(710,140,30,40);
    box26 = new Block(750,140,30,40);
    box27 = new Block(790,140,30,40);
    box28 = new Block(770,100,30,40);
    box29 = new Block(730,100,30,40);
    box30 = new Block(750,60,30,40);

    polygon = Bodies.circle(50,20,200);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x: 100, y: 200});

    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40,40);

}

function draw(){

    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    drawSprites();
}
