var noiseScale=0.5;
var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);

function setup() {
createCanvas(500, 500);
colorMode(RGB, 255, 255, 255, 100);
}

function draw() {
noFill();
colorMode(RGB, 255, 255, 255, 1);
background(255);

for (var x=0; x < width; x++) {
strokeWeight(2);
stroke(noiseVal*255);
fill(28,46,167);
ellipse(mouseX, mouseY, 40, 40);
fill(192,19,34);
rect((mouseX+x), random(450), 40, 40);
fill(255,234,1);
line((mouseX+x), random(200), 40, 40);

  }
}
