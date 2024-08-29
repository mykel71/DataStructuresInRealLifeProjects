
function init(){
    console.log("In Init");
    canvas = document.getElementById('mycanvas');
    W = canvas.width = 1000;
    H = canvas.height = 1000;
    // W = H = canvas.width = canvas.height = 1000;
    pen = canvas.getContext('2d');
    cs = 65;


    snake = {
        init_len:5,
        color:"blue",
        cells:[],
        direction:"right",
        

        createSnake:function(){
            for(var i = this.init_len;i>=0;i--){
                this.cells.push({x:i,y:0});
            }
        },
        drawSnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2);
            }
        }
    };

    snake.createSnake();

    
    game_over = false;
    

    rect = {
        x:20,
        y:20,
        w:40,
        h:40,
        speed:20,
    };
}

function draw(){
    //console.log("In Draw");
    snake.drawSnake();


    /*pen.clearRect(0,0,W,H);
    pen.fillRect(rect.x, rect.y,rect.w,rect.h);
    pen.fillStyle = "red"; */
}
function update(){
    //console.log("In Update");
    rect.x += rect.speed;
    if(rect.x>W-rect.w || rect.x < 0){
        rect.speed *= -1;
    }
}
function gameloop(){
    
    if(game_over==true){
        clearInterval(f);
    }
    draw();
    update();
}

init();
var f = setInterval(gameloop,100);