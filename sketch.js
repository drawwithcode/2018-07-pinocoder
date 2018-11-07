var video;
var button;
var snapshots = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('black');
  video = createCapture(VIDEO);
  video.size(320/2, 320/2);
  video.hide();
  button = createButton('STRIKE A POSE AND SNAP');
  button.mousePressed(takesnap);
  button.position(windowWidth/2 - 100,windowHeight/2 +300);



}

function takesnap() {
  snapshots.push(video.get());
}

function draw() {
  // put drawing code here
  var myText = 'photobooth';
  noFill();
  stroke(255, 0, 0);
  strokeWeight(0.25);
  textSize(81*2);
  textFont('Chivo');
  textAlign(CENTER);
  text(myText, windowWidth / 2, windowHeight / 2);
  var w = 80 * 3;
  var h = 60 * 3;
  var x = windowWidth/2-150;
  var y = 50;
  for (var i = 0; i < snapshots.length; i++) {
    image(snapshots[i], x, y, w, h);
    y = y + h;
    if (y > 540) {
      y = 50;
    }
  filter(GRAY);
    }
}
