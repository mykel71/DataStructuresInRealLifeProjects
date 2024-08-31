function Load_Images(){
    // Player, Virus, Gem
}

function Init(){
    // define the object we have in the game
    canvas = document.getElementById("mycanvas");
    console.log(canvas);
    W = 700;
    H = 400;

    canvas.width = W;
    canvas.height = H;

    // Context object
    pen = canvas.getContext('2d');
    console.log(pen);

    box = {
        x : 150,
        y : 50,
        w : 60,
        h : 60,
        speed: 20,
    };
}

function Draw(){

    // clear the canvas area of the old frame
    pen.clearRect(0,0,W,H);


    pen.fillStyle = "red";
    pen.fillRect(box.x, box.y, box.w, box.h);
}

function Update(){
    // movement to the box
    box.y += box.speed;

    if(box.y >= H - box.h || box.y < 0){
        box.speed *= -1;
    }
}

function GameLoop(){
    Draw();
    Update();
    console.log("In Game Loop");

}

Load_Images();
Init();
var f = setInterval(GameLoop,100);