function Person(img) {
  this.r = 100;
  this.x = 50;
  this.y = height - this.r;
  this.pos = createVector(10, height - 50);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.pic = img;
  this.score=0
 
  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.update = function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  };

  this.display = function () {
    stroke(255);
    textSize(25);
    text("Points: " + this.score, this.pos.x, 100); 
    fill(255, 255, 255);
    rect(this.pos.x, this.pos.y, 50, 40);
    image(this.pic, this.pos.x, this.pos.y, 50, 40);
  };

  this.edges = function () {
    if (this.pos.y > height - 50) {
      this.vel.y = 0;
      this.pos.y = height - 50;
    }

    // if (this.pos.x > width) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    // }
  };

  this.hits = function (obs) {
    if (
      obs.pos.x >= this.pos.x &&
      obs.pos.x <= this.pos.x + 40 &&
      obs.pos.y >= this.pos.y &&
      obs.pos.y <= this.pos.y + 40
    ) {
      obs.pos.y = -400;
      this.score++;
    }
  };
}
