function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230, 245, 230);
  
  // display all flowers
  for (let f of flowers) {
    f.display();
  }
}

function mousePressed() {
  flowers.push(new Flower(mouseX, mouseY));
}

// Flower class
class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 0; // for animation
  }

  display() {
    this.size += 0.5; // simple bloom animation
    fill(255, 150, 200, 200); // pink petals
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}

let vines = [];

function mouseDragged() {
  vines.push(new Vine(mouseX, mouseY));
}

function draw() {
  background(230, 245, 230);

  // display flowers
  for (let f of flowers) f.display();
  
  // display vines
  for (let v of vines) v.display();
}

// Vine class
class Vine {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    stroke(34,139,34,150); // green vine
    strokeWeight(3);
    point(this.x, this.y);
  }
}


