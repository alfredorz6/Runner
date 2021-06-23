class Player {
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteWidth/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height -20;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }

    update() {
        if (keys[38]) {
            if (this.moving === false){
                this.y -= grid;
                this.moving = true;
            }
        }
        if (keys[40]) {
            if (this.y < canvas.height - this.height * 2 && this.moving === false){
                this.y += grid;
                this.moving = true;
            }
        }
        if (keys[37]) {
            if (this.x > this.width +40 && this.moving === false){
                this.x -= grid;
                this.moving = true;
            }
        }
        if (keys[39]) {
            if (this.x < canvas.width - this.width * 2.2 && this.moving === false){
                this.x += grid;
                this.moving = true;
            }
        }

        if (this.y < 0) scored();
        
    }
    draw(){
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x, this.y, this.width, this.height)
    }

    run() {
        console.log('run')
    }

}

const runner = new Player()