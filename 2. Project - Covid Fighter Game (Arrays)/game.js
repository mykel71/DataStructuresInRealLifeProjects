function Load_Images(){
    // Player, Virus, Gem
    enemy_image = new Image;
    enemy_image.src ="Assets/v1.png";

    player_image = new Image;
    player_image.src = "Assets/superhero.png";

    gem_image = new Image;
    gem_image.src = "Assets/gemm.png";
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

    e1 = {
        x : 150,
        y : 50,
        w : 60,
        h : 60,
        speed: 20,
    };
    e2 = {
        x : 300,
        y : 150,
        w : 60,
        h : 60,
        speed: 30,
    };
    e3 = {
        x : 450,
        y : 50,
        w : 60,
        h : 60,
        speed: 40,
    };
    
    enemy = [e1,e2,e3];

    player = {
        x : 20,
        y : H/2,
        w : 60,
        h : 60,
        speed : 20,
    //    moving : "false",
    };
    gem = {
        x : W-100,
        y : H/2,
        w : 60,
        h : 60,
    };

}

function Draw(){

    // clear the canvas area of the old frame
    pen.clearRect(0,0,W,H);


    pen.fillStyle = "red";
   // pen.fillRect(box.x, box.y, box.w, box.h);
    //pen.drawImage(enemy_image,box.x, box.y, box.w, box.h);

    // Draw the player


    // draw the gem
    pen.drawImage(player_image, player.x, player.y, player.h, player.w);
    pen.drawImage(gem_image, gem.x, gem.y, gem.h, gem.w);


    for(let i=0; i<enemy.length; i++){
        pen.drawImage(enemy_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);

    }
}

function Update(){
    // movement to the box
    // update each enemy by the same logic
    for(let i = 0; i<enemy.length; i++){
         enemy[i].y += enemy[i].speed;
         if(enemy[i].y>H-enemy[i].h || enemy[i].y < 0){
            enemy[i].speed *= -1;
         }
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