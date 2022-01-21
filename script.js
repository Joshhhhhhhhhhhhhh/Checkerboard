function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  noStroke();
  background(0, 0, 0);
  fill(225, 0, 0);
  drawBoard();
  whiteChecker();
  redChecker();
}

function drawBoard() {

  for (xCor = 0, yCor = 0; xCor < 900; xCor += 50, yCor += 50) {
    rect(xCor, yCor, 50);
    rect(xCor + 100, yCor, 50);
    rect(xCor + 200, yCor, 50);
    rect(xCor + 300, yCor, 50);
    rect(xCor, yCor + 100, 50);
    rect(xCor, yCor + 200, 50);
    rect(xCor, yCor + 300, 50);
  }
}

function whiteChecker() {
  fill(255, 255, 255);
  for (whiteCorX = 75, whiteCorY = 25; whiteCorX < 900; whiteCorX += 100) {
    ellipse(whiteCorX, whiteCorY, 25);
  }
  for (whiteCorX = 25, whiteCorY = 75; whiteCorX < 900; whiteCorX += 100) {
    ellipse(whiteCorX, whiteCorY, 25);
  }
  for (whiteCorX = 75, whiteCorY = 125; whiteCorX < 900; whiteCorX += 100) {
    ellipse(whiteCorX, whiteCorY, 25);
  }
}

function redChecker() {
  fill(225, 0, 0);
  for (redCorX = 25, redCorY = 275; redCorX < 900; redCorX += 100) {
    ellipse(redCorX, redCorY, 25);
  }
  for (redCorX = 25, redCorY = 375; redCorX < 900; redCorX += 100) {
    ellipse(redCorX, redCorY, 25);
  }
  for (redCorX = 75, redCorY = 325; redCorX < 900; redCorX += 100) {
    ellipse(redCorX, redCorY, 25);
  }
}