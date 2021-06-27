class Player {
    constructor(){
        this.width = 50;
        this.height = 50;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 35;
        this.moving = false;
        this.frameX = 1;
        this.frameY = 0;
        
    }

    update() {
        if (status === 'wounded') {
            if (keys[38]) {
                if (this.moving === false){
                    this.y -= grid/2;
                    this.moving = true;
                    this.frameX = 0;
                    this.frameY = 0;
                }
            }
            if (keys[40]) {
                if (this.y < canvas.height - this.height * 2 && this.moving === false){
                    this.y += grid/2;
                    this.moving = true;
                    this.frameX = 2;
                    this.frameY = 2;
                }
            }
            if (keys[37]) {
                if (this.x > this.width +40 && this.moving === false){
                    this.x -= grid/2;
                    this.moving = true;
                    this.frameX = 0;
                    this.frameY = 3;
                }
            }
            if (keys[39]) {
                if (this.x < canvas.width - this.width * 2.2 && this.moving === false){
                    this.x += grid/2;
                    this.moving = true;
                    this.frameX = 2;
                    this.frameY = 1;
                }
            }
    
        } else {
            if (keys[38]) {
                if (this.moving === false){
                    this.y -= grid;
                    this.moving = true;
                    this.frameX = 0;
                    this.frameY = 0;
                }
            }
            if (keys[40]) {
                if (this.y < canvas.height - this.height * 2 && this.moving === false){
                    this.y += grid;
                    this.moving = true;
                    this.frameX = 2;
                    this.frameY = 2;
                }
            }
            if (keys[37]) {
                if (this.x > this.width +40 && this.moving === false){
                    this.x -= grid;
                    this.moving = true;
                    this.frameX = 0;
                    this.frameY = 3;
                }
            }
            if (keys[39]) {
                if (this.x < canvas.width - this.width * 2.2 && this.moving === false){
                    this.x += grid;
                    this.moving = true;
                    this.frameX = 2;
                    this.frameY = 1;
                }
            }
        }
        

        if (this.y < 0) scored();
        
    }
    draw(){
        // ctx3.fillStyle = 'green';
        // ctx3.fillRect(this.x, this.y, this.width, this.height)
        ctx3.drawImage(player, this.frameX * 90, this.frameY * 126, 90, 126, this.x - 8, this.y - 10, this.width * 1.5,this.height * 1.5 )
    }

    run() {
        if (this.moving === false) {
            this.frameX = 0
        } else if (this.frameX === 0) {
            this.frameX = 1
        }
    }

    crowned() {
        if (score >= 10){
            ctx4.drawImage(crown, runner.x+16, runner.y-18, 25, 25)       
            
        }
    }

}

const runner = new Player()