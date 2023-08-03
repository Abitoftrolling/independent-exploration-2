let xPos = 250;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
let ballSize = 30;
let score = 0;

function setup() {
    createCanvas(500, 500);

    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(222);

    // draw goal
    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    // draw ball
    fill(255, 0, 255);
    rect(xPos, yPos, ballSize, ballSize);

    // draw score
    fill(18);
    textSize(20);
    text("Score: " + score, 10, 30);

    // check if in goal
    if (xPos + ballSize / 2 >= 220 && xPos - ballSize / 2 <= 280 && yPos + ballSize / 2 >= 480) {
        score++;
        // reset position and speed
        xPos = random(ballSize / 2, width - ballSize / 2);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(0, 10);
    }

    // move forward
    xPos += xSpeed;
    yPos += ySpeed;

    // wrap around if boundary exceeded
    if (xPos < 0 - ballSize / 2) {
        xPos = width + ballSize / 2;
    }
    if (xPos > width + ballSize / 2) {
        xPos = 0 - ballSize / 2;
    }
    if (yPos > height + ballSize / 2) {
        yPos = 0 - ballSize / 2;
        score--;
    }
}

function mouseClicked() {
    xSpeed = random(-5, 5);
    ySpeed = random(0, 5);
}
