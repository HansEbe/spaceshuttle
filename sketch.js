var bgImg;
var shuttle, iss, hasDocked;
var shuttleImg, issImg;
var gameStateState;
var idle, left, right, up;

function setup() {
  createCanvas(800,400);
  gameState = "start";
  hasDocked = false;
  shuttle = createSprite(400, 400, 50, 50);
  iss = createSprite(400, 200, 100, 100);
  issImg = loadImage("iss.png");
  bgImg = loadImage("back_img.jpg");
  shuttleImg = loadImage("spacecraft1.png");
  //shuttle.addImage(shuttleImg);
  shuttle.scale = 0.2;
  iss.addImage(issImg);
  idle = loadAnimation("spacecraft3.png", "spacecraft4.png");
  shuttle.addAnimation("idle", idle);
  left = loadAnimation("spacecraft4.png");
  shuttle.addAnimation("left_mov", left);
  right = loadAnimation("spacecraft3.png");
  shuttle.addAnimation("right_mov", right);
  up = loadAnimation("spacecraft2.png");
  shuttle.addAnimation("up_mov", up);
  down = loadAnimation("spacecraft1.png");
  shuttle.addAnimation("down_mov", down);
  iss.setCollider("rectangle", -70, 25, 30, 30);
}

function draw() {
  background(bgImg);
  iss.debug = true;

  if(gameState = "start"){

  if(keyDown("left")){
	shuttle.x = shuttle.x - 5;
	shuttle.changeAnimation("left_mov", left);
  }
  if(keyWentUp("left")){
	shuttle.changeAnimation("idle", idle);
  }

  if(keyDown("right")){
	shuttle.x = shuttle.x + 5;
	shuttle.changeAnimation("right_mov", right);
  }
  if(keyWentUp("right")){
	shuttle.changeAnimation("idle", idle);
  }

  if(keyDown("up")){
	shuttle.y = shuttle.y - 5;
	shuttle.changeAnimation("up_mov", up);
  }
  if(keyWentUp("up")){
	shuttle.changeAnimation("idle", idle);
  }

  if(keyDown("down")){
	shuttle.y = shuttle.y + 5;
	shuttle.changeAnimation("down_mov", down);
  }
  if(keyWentUp("down")){
	shuttle.changeAnimation("idle", idle);
  }


  if(shuttle.isTouching(iss)){
		fill("purple");
		textSize(30);
		gameState = "end";
  }

  }

  if(gameState === "end"){
		text("You won!", 600, 200)
  }

  drawSprites();
}

