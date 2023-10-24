let proyec = [];
let obs = [];
let xo = [];
let yo = [];

let xpp = [];
let ypp = [];
let x1 = false;
let x2 = false;

let pro;
let hombre;
let yh=200;
let xh=100;
let y1= false;
let y2= false;
let yp=-10;
let xp=100;
let p=false;
let u = -1;
let nroP = -1;

function preload() {
  for (let i = 0; i < 5; i++) {
    proyec[i] = loadImage('pro.jpg');
    obs[i] = loadImage('pro.jpg');
  }
  
  pro = loadImage('pro.jpg');
  hombre = loadImage('hom.jpg');
}

function setup() {
  createCanvas(600, 400);
  
  for (let i = 0; i < 5; i++) {
    xpp[i] = -10;
    ypp[i] = -10;
  }
}

function draw() {
  background(150);
  image(hombre,xh,yh,50,70);
  image(pro,xp,yp,10,5);
  
  for (let i = 0; i < 5; i++) {
  image(proyec[i],xpp[i],ypp[i],10,5);
  image(obs[i],xo[i],yo[i],40,40);
  
  if(xpp[i] > 0 && xpp[i] < 600){
      xpp[i] = xpp[i] +10;
    }
  }
   
  if (y1 == true){
    yh = yh - 5;
  }
  if (y2 == true){
    yh = yh + 5;
  }
  
  if (x1 == true){
    xh = xh - 5;
  }
  if (x2 == true){
    xh = xh + 5;
  }
  
  if (p == true){
     xp= xp + 5;
  }
  
  
}

function keyPressed(){
  if (key == 'w'){
    y1 = true;
  }
  
  if (key == 's'){
    y2 =true;
  }
   if (key == 'a'){
    x1 = true;
  }
  
  if (key == 'd'){
    x2 =true;
  }
  if (key == 'p'){
    p =true;
    yp = yh + 40;
    xp = xh + 50;
  }
  
  if (key == 'u'){
    u++;
    xpp[u] = xh+50;
    ypp[u] = yh+40;
    if(u == 4){
      u = -1;
    }
  }
}

function keyReleased(){
  if (key == 'w'){
    y1 = false;
  }
  
  if (key == 's'){
    y2 =false;
  }
  if (key == 'a'){
    x1 = false;
  }
  
  if (key == 'd'){
    x2 =false;
  }
  
}
