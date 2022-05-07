var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var fly = new Audio();
var score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score_audio.mp3";
var score = 0;
var xPos = 10;
var yPos = 150;
var grav = 1.5;
var gap = 90;
document.addEventListener("keydown", moveUp);
function moveUp() {
yPos = yPos - 25;
fly.play();
}

var pipe = [];
pipe [0] = {
	x: cvs.width,
	y: 0
}
function draw(){
	ctx.drawImage(bg, 0 , 0);
	for (var i = 0; i < pipe.length; i++){
		ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
	    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
		pipe[i].x--;
		
		if (pipe[i].x == 125){
			pipe.push({
				x: cvs.width,
				y: Math.round(Math.random() * pipeUp.height) - pipeUp.height
			});
		}
	}
	ctx.drawImage(bird, xPos , yPos);
	ctx.drawImage(fg, 0, bg.height - fg.height);
	yPos = yPos + grav;
	requestAnimationFrame(draw);

}

pipeBottom.onload = draw;
