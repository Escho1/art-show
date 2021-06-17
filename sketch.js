var man;
let img, img2, img3, img4;
let enemies = [];
let music;

function preload() {
  soundFormats("mp3");
  music = loadSound("cavenoises.mp3");
}

function setup() {
  createCanvas(400, 400);
  fill(0, 0);
  img = loadImage("Man.png");
  img2 = loadImage("Baddie.png");
  img3 = loadImage("Background.png");
  img4 = loadImage("Victory.png");

  man = new Person(img);

  for (let i = 0; i < 10; i++) {
    enemies[i] = new Enemy(img2, random(10));
  }
}

var x;
x = -100;

function keyPressed() {
  if (key == " ") {
    let force = createVector(0, -16);
    man.applyForce(force);
  }
}

function draw() {
  if ((man.pos.x < 1000, man.score < 4)) {
    game();
  } else {
    gameOver();
  }
}

function gameOver() {
  background(img4);
  textSize(20);
}
function game() {
  background(img3);

  //point of view around "man"
  translate(-man.pos.x + 50, 0);

  let gravity = createVector(0, 1);
  man.applyForce(gravity);

  man.update();
  man.display();
  man.edges();

  for (let i = 0; i < 10; i++) {
    enemies[i].update();
    enemies[i].display();
    enemies[i].edges();
    man.hits(enemies[i]);
  }
}
