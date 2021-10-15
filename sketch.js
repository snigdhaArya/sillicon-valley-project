const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, bg2img, bg3img, bg1img, shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9,
	shop10, shop11, shop12, shop1img, shop2img, shop3img, shop4img,
	shop5img, shop6img, shop7img, shop8img, shop9img, shop10img, shop11img, shop12img;
var coin1, coin2, coin3, coin4, coin5, coin1img, coin2img, coin3img, coin4img, coin5img;
var playb, playbimg, pauseb, pausebimg;
var girl, girlimg, girlstand, yn, ynimg;
var rock, rockimg;
var planet1, planet2, planet3, planet4, planet1img, planet2img, planet3img, planet4img;
var thought, thoughtimg;
var rock1, rock2, rock3, pauseb1, pauseb2, reset, next, resetimg, nextimg;
var bubble, bubbleimg;
var message, messageimg ,messsages,football,footballimg,
Abwelcome, frog,frogimg,fruit,fruitimg,instrustion,instrustionimg,rules,rulesimg, hello,helloimg;
var cross,crossimg,amongus, amoungusimg,carR,carRimg,pacman,pacmanimg,bg1r,bgimg;
var pony,ponyImg, bunny,bunnyimg;


var state = 1;


function preload() {

	//shop images
	shop1img = loadImage("images/1.png");
	shop2img = loadImage("images/2.png");
	shop3img = loadImage("images/3.png");
	shop4img = loadImage("images/4.png");
	shop5img = loadImage("images/5.png");
	shop6img = loadImage("images/6.png");
	shop7img = loadImage("images/7.png");
	shop8img = loadImage("images/8.png");
	shop9img = loadImage("images/9.png");
	shop10img = loadImage("images/10.png");
	shop11img = loadImage("images/11.png");
	shop12img = loadImage("images/12.png");

	//background of town of game
	bg1img = loadImage("images/b.jpg");
	bg = loadImage("images/bg.jpg");

	// coin images
	coin1img = loadImage("images/c1.png");
	coin2img = loadImage("images/c2.png");
	coin3img = loadImage("images/c3.png");
	coin4img = loadImage("images/c4.png");
	coin5img = loadImage("images/c5.png");

	//girl and button images
	girlimg = loadAnimation("images/g1.png", "images/g2.png");
	girlstand = loadImage("images/g3.png");
	playbimg = loadImage("images/b1.png");
	pausebimg = loadImage("images/b2.png");
	ynimg = loadImage("images/YN.png");

	//rock and planet images
	rockimg = loadImage("images/r1.png");
	planet1img = loadImage("images/p2.png");
	planet2img = loadImage("images/p3.png");
	planet3img = loadImage("images/p4.png");
	planet4img = loadImage("images/p1.png");

	//images
	thoughtimg = loadImage("images/t1.png");
	resetimg = loadImage("images/reset1.png");
	nextimg = loadImage("images/next1.png");
	bubbleimg = loadImage("images/67.png");
	bg2img = loadImage("images/f.jpg");
	bg3img = loadImage("images/gmt.jpg");
	message = loadImage("images/abwelcome.jpg");
    messageimg = loadImage("images/m1.png");
	footballimg = loadImage("images/football.png");
	frogimg = loadImage("images/frog.jpg");
	fruitimg = loadImage("images/fruit.jpg");
    instrustionimg= loadImage("images/instrustion.png");
    rulesimg=loadImage("images/rules.jpg");
	helloimg=loadImage("images/hello.png");
	crossimg=loadImage("images/cross1.png");
	amoungusimg=loadImage("images/capsule.jpg");
    pacmanimg=loadImage("images/pacman.png");
	carRimg=loadImage("images/capsule2.jpg");
	bgimg=loadImage("images/b1!.jpg");
	ponyImg=loadImage("images/pony.jpg");
    bunnyimg=loadImage("images/bunnyland.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
     
	

	//crateing girl
	yn = createSprite(1200, 200, 10, 10);
	yn.addImage(ynimg);
	yn.scale = 1;

	// girl = createSprite(750, 100, 10, 10);
	// girl.addAnimation("jk", girlimg);
	// girl.scale = 1;

	//creating rock
	rock = createSprite(150, 400, 20, 20);
	rock.addImage(rockimg);
	rock.scale = 4;

	rock1 = createSprite(450, 500, 20, 20);
	rock1.addImage(rockimg);
	rock1.scale = 3;

	rock2 = createSprite(650, 300, 20, 20);
	rock2.addImage(rockimg);
	rock2.scale = 2;

	rock3 = createSprite(1000, 550, 20, 20);
	rock3.addImage(rockimg);
	rock3.scale = 4;

	//creating planets
	planet1 = createSprite(180, 220, 50, 50);
	planet1.addImage(planet1img);
	planet1.scale = 2.5;

	planet2 = createSprite(1000, 380, 50, 50);
	planet2.addImage(planet2img);
	planet2.scale = 2;

	planet3 = createSprite(450, 380, 50, 50);
	planet3.addImage(planet3img);
	planet3.scale = 1.5;

	planet4 = createSprite(650, 240, 50, 50);
	planet4.addImage(planet4img);
	planet4.scale = 0.3;

	//creating button
	playb = createSprite(160, 400, 1, 1);
	playb.addImage(playbimg);
	playb.scale = 0.4;

	pauseb = createSprite(460, 500, 1, 1);
	pauseb.addImage(pausebimg);
	pauseb.scale = 0.5;

	pauseb1 = createSprite(660, 300, 1, 1);
	pauseb1.addImage(pausebimg);
	pauseb1.scale = 0.3;

	pauseb2 = createSprite(1000, 550, 1, 1);
	pauseb2.addImage(pausebimg);
	pauseb2.scale = 0.5;

	instrustion=createSprite(50,50,1,1);
	instrustion.addImage(instrustionimg);
	instrustion.scale=0.5
	
    hello=createSprite(700,300,1,1);
	hello.addImage(helloimg);
	hello.scale=1;
	hello.lifetime=300;

	

	rules=createSprite(300,300,1,1)
		rules.addImage(rulesimg);
		rules.scale=0.5;
		rules.visible=false;

		cross=createSprite(530,70,1,1);
		cross.addImage(crossimg);
		cross.scale=0.5;
		cross.visible=false;


	// textSize(30)
	// fill(0)
	// text("Click here to play!", 800, 100);

	// message= createSprite(870, 100, 1, 1);
	// message.addImage(messageimg);
	// message.sacle = 0.8;



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(bg);

	textSize(100);
	textFont("algerian");
    fill("Red")
	text("S's SPACE CITY",300,100);
	
	if(mousePressedOver(instrustion)){
		rules.visible=true;
		cross.visible=true;
	
	}

	if(mousePressedOver(cross)){
		rules.visible=false;
		cross.visible=false;
	}

	if (mousePressedOver(next)) {
		
		bg1r=createSprite(700,700);
		bg1r.addImage(bgimg);
		bg1img.scale=3;
		// bg1r.visible=false;
		//    reset = createSprite(1320, 70, 1, 1);
		//    reset.addImage(resetimg);
		//    reset.scale = 0.3;
   
	  }

	//   if(mousePressedOver(reset)){
	// 	bg1r.visible=false;
	
		
	// }
	

	if (state === 1) {


	
	if (mousePressedOver(playb)) {
		bg = bg1img

		//making object invisible
		planet1.visible = false;
		planet2.visible = false;
		planet3.visible = false;
		planet4.visible = false;
		pauseb.visible = false;
		pauseb1.visible = false;
		pauseb2.visible = false;
		rock.visible = false;
		rock1.visible = false;
		rock2.visible = false;
		rock3.visible = false;
		playb.visible = false;
		instrustion.visible=false;
		// yn.visible = false;

		next = createSprite(1320, 30, 1, 1);
		next.addImage(nextimg);
		next.scale = 0.3;

		bubble = createSprite(390, 440, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.7;

		bubble = createSprite(60, 260, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.7;

		bubble = createSprite(180, 450, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.7;

		bubble = createSprite(565, 370, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.7;

		bubble = createSprite(420, 270, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 1;

		bubble = createSprite(270, 340, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.6;

		bubble = createSprite(780, 530, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 1;

		bubble = createSprite(320, 515, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.6;

		bubble = createSprite(1130, 480, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 1;

		bubble = createSprite(900, 280, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.7;

		bubble = createSprite(940, 430, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.8;

		bubble = createSprite(740, 340, 1, 1);
		bubble.addImage(bubbleimg);
		bubble.scale = 0.9;


		pauseb = createSprite(740, 340, 1, 1);
		pauseb.addImage(pausebimg);
		pauseb.scale = 0.5;

		thought = createSprite(870, 100, 1, 1);
		thought.addImage(thoughtimg);
		thought.sacle = 0.8;
		thought.lifetime=100;	


	}

	if (mousePressedOver(bubble)) {


		//creating shops
		shop1 = createSprite(390, 440, 50, 50);
		shop1.addImage(shop1img);
		shop1.scale = 1;


		shop2 = createSprite(60, 260, 50, 50);
		shop2.addImage(shop2img);
		shop2.scale = 1;

		shop3 = createSprite(180, 450, 50, 50);
		shop3.addImage(shop3img);
		shop3.scale = 1;

		shop4 = createSprite(565, 370, 50, 50);
		shop4.addImage(shop4img);
		shop4.scale = 1;

		shop5 = createSprite(420, 270, 50, 50);
		shop5.addImage(shop5img);
		shop5.scale = 1;

		shop6 = createSprite(270, 340, 50, 50);
		shop6.addImage(shop6img);
		shop6.scale = 1;

		shop7 = createSprite(780, 530, 50, 50);
		shop7.addImage(shop7img);
		shop7.scale = 1;

		shop8 = createSprite(320, 515, 50, 50);
		shop8.addImage(shop8img);
		shop8.scale = 1;

		shop9 = createSprite(1130, 480, 50, 50);
		shop9.addImage(shop9img);
		shop9.scale = 1;

		shop10 = createSprite(900, 280, 50, 50);
		shop10.addImage(shop10img);
		shop10.scale = 1;

		shop11 = createSprite(940, 430, 50, 50);
		shop11.addImage(shop11img);
		shop11.scale = 1;

		shop12 = createSprite(740, 340, 50, 50);
		shop12.addImage(shop12img);
		shop12.scale = 1;


	}

	

    // if(mousePressedOver(shop1)){
    //     shop1.visible=false;
	// 	let a;
	// //	textSize(25)
	// //	fill("white");
	// //	text("welcome to this mini angry bird game you can press on button to play the game",400,400);

	// 	ABwelcome=createSprite(390,440,20,20);
	// 	a=createA('https://snigdhaarya.github.io/angry-bird/', "angry bird");
	// 	a.position(390,440)
	// 	ABwelcome.addImage(message);
	// 	ABwelcome.lifetime=200;
		
	// 	// messsages=createSprite(450,100);
	// 	// messsages.addImage(messageimg);


	// }

	if(mousePressedOver(shop2)){
        shop2.visible=false;
		// ABwelcome.visible=false;
		// football.visible=true;
    
		let a;

		amongus=createSprite(300,260,20,20);
		a=createA('https://studio.code.org/projects/spritelab/9gH2sbp-Fg4c6SC_c9I7Sx-dLhgJ2Qh3iIRauGHAdko', "amongus");
		a.position(300,360)
		amongus.addImage(amoungusimg);
		amongus.scale=1;
		amongus.lifetime=200;
	}

	
	if(mousePressedOver(shop3)){
        shop3.visible=false;
		// football.visible=false;
    
		let a;

		pacman=createSprite(380, 450 ,20,20);
		a=createA('https://studio.code.org/projects/gamelab/q2L283xDXYNHAQVghluMuae8Zf84xgKFnb8bxFia8kg', "pacman");
		a.position(180,550)
		pacman.addImage(pacmanimg);
		 pacman.scale=2;
		 pacman.lifetime=200;
	}

	
	if(mousePressedOver(shop7)){
        shop7.visible=false;
		// fruit.visible=false;
    
		let a;

		carR=createSprite(780, 330,20,20);
		a=createA('https://studio.code.org/projects/gamelab/bAtdGDz4VDMubh_MHvl6Nej2diOUCDLtOIFe44p4nmM',"car racing");
		a.position(680, 430)
		carR.addImage(carRimg);
		carR.scale=0.5;
		carR.lifetime=200;
	}
     
	if(mousePressedOver(shop11)){
        shop11.visible=false;
		// fruit.visible=false;
    
		let a;

		pony=createSprite(780, 330,20,20);
		a=createA('https://snigdhaarya.github.io/candyRun/', "candy shop");
		a.position(780, 430)
		pony.addImage(ponyImg);
		pony.scale=0.3	;
		pony.lifetime=200;
	}
     
	// if(mousePressedOver(shop9)){
    //     shop9.visible=false;
	// 	// fruit.visible=false;
    
	// 	let a;

	// 	frog=createSprite(1100, 330,20,20);
	// 	a=createA('https://snigdhaarya.github.io/candyRun/', "cut the rope");
	// 	a.position(1150, 430)
	// 	frog.addImage(frogimg);
	// 	frog.scale=0.4	;
	// 	frog.lifetime=200;
	// }

	if(mousePressedOver(shop5)){
        shop5.visible=false;
		// fruit.visible=false;
    
		let a;

		bunny=createSprite(500, 330,20,20);
		a=createA('https://jyoti-shelke.github.io/Coding-Challange_Feed-the-bunny/', "bunny land");
		a.position(550, 430)
		bunny.addImage(bunnyimg);
		bunny.scale=0.3	;
		bunny.lifetime=200;
	}


	drawSprites();

}

}



