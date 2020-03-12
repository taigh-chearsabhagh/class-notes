// STEP 1
// run the code below in the browser w dev tools open to see
// setup is called one and draw is called constantly
//
// function setup(){
//   console.log('setup')
// }
//
// function draw(){
//   console.log('draw')
// }


// STEP2

// function setup(){
//   createCanvas(window.innerWidth, window.innerHeight);
// }
//
// function draw(){
//
//   fill(0);
//   circle(150, 150, 80);
// }


// STEP 3

//
// function setup(){
//   createCanvas(window.innerWidth, window.innerHeight);
// }
//
// function draw(){
//
//   if(mouseIsPressed){
//     console.log(mouseX, mouseY);
//   }
//   fill(0);
//   circle(150, 150, 80);
// }


// STEP 4



// function setup(){
//   createCanvas(window.innerWidth, window.innerHeight);
// }
//
// function draw(){
//
//   if(mouseIsPressed){
//     fill(0);
//   } else {
//     fill(100);
//   }
//   circle(mouseX, mouseY, 80);
// }


// STEP 5

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  console.log(random(100));
}

function draw(){

}

class Particle{
  constructor() {
    // Position
    this.pos = createVector(x, y);

  }
}

// run the above to see the random cooords appearing in dev tools


STEP 6

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  console.log(width);
}

function draw(){

}

class Particle{
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // size
    this.size = 10;
  }
  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)')';
    circle(this.pos.x, this.pos.y, this.size);
  }
}


// STEP 7

let p;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Particle();
  // once it's working add another one to demonstrate objecthood
  //p2 = new Particle();

}

function draw(){
  p.draw();
  //p2.draw();
}

class Particle{
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // size
    this.size = 10;
  }
  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }
}



STEP 8 Adding Movement

let p;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Particle();

}

function draw(){
  // add background to stop it making a line
  //background(55, 100, 144);
  p.draw();
  p.update();

}

class Particle{
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // size
    this.size = 10;
  }

  update(){
    this.pos.add(this.vel);
  }

  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }
}


// STEP 9 Detect edges

let p;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Particle();

}

function draw(){
  // add background to stop it making a line
  background(55, 100, 144);
  p.draw();
  p.update();

}

class Particle{
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // size
    this.size = 10;
  }
// update movement by adding velocity
  update(){
    this.pos.add(this.vel);
    // call edges within update
    this.edges();
  }
// draw single particle
  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }

  // detect edges
  edges(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
    }
  }

}



// STEP 10 Create multiple particles.

const particles = [];

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  // NEW
  const particlesLength = Math.floor(window.innerWidth / 10);
  // console.log(particlesLength);  //resize window to show number changing
  for(let i = 0; i < particlesLength; i++){
    particles.push(new Particle());
  }
}

function draw(){
  // add background to stop it making a line
  background(55, 100, 144);
  particles.forEach((p, index) => {
    p.update()
    p.draw()
  })
}

class Particle{
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // size
    this.size = 10;
  }
// update movement by adding velocity
  update(){
    this.pos.add(this.vel);
    // call edges within update
    this.edges();
  }
// draw single particle
  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }

  // detect edges
  edges(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
    }
  }
}


// STEP 11 Joining up the particles

const particles = [];

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  // NEW
  const particlesLength = Math.floor(window.innerWidth / 10);
  // console.log(particlesLength);  //resize window to show number changing
  for(let i = 0; i < particlesLength; i++){
    particles.push(new Particle());
  }
}

function draw(){
  // add background to stop it making a line
  background(55, 100, 144);
  particles.forEach((p, index) => {
    p.update()
    p.draw()
    p.checkParticles(particles.slice(index))
  })
}

class Particle{
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // size
    this.size = 10;
  }
// update movement by adding velocity
  update(){
    this.pos.add(this.vel);
    // call edges within update
    this.edges();
  }
// draw single particle
  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }

  // detect edges
  edges(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
    }
  }

  // connect particles
  checkParticles(paticles){
    particles.forEach(particle =>{
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y); // built in distance function from p5.js
      if(d < 120){
        stroke('rgba(255, 255, 255, 0.1)');
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    })
  }
}


// STEP 12

// STEP 13
