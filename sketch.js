function setup() {
  createCanvas(500, 500);
  a = new dot();
  background(0,90);
}

function draw() {  
  a.walk();
  a.display();
}

function dot() {
  this.pos = createVector(width/2,height/2);
  this.vel = createVector(random(-.2,.2),random(-.2,.2));
  this.size = 20;
  
  
  this.walk = function() {
    this.accel = createVector(random(-.05,.05),random(-.05,.05));
    this.vel.add(this.accel);
    this.pos.add(this.vel);
    if (this.pos.x > width || this.pos.x < this.size/4) {
      //this.vel.x = this.vel.x.mult(-1);
      this.vel.x *= (-1);
      background(random(255), random(255), random(255));
    }
    if (this.pos.y > height || this.pos.y < this.size/4) {
      this.vel.y *= (-1);
      background(random(255), random(255), random(255));
    }

  }
  
  this.display = function() {
    fill(255,50);
    //noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  };
  
  
  
}