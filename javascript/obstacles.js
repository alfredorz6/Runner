class Obstacle {
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomise = Math.floor(Math.random() * 1 + 9);
    }

    draw() {
        if (this.type === 'arrow') {
            // ctx2.fillRect(this.x, this.y, this.width, this.height)
            ctx2.drawImage(arrowPic, this.x, this.y, this.width, this.height)

        } else if( this.type === 'arrowL') {
            // ctx2.fillRect(this.x, this.y, this.width, this.height)
            ctx2.drawImage(arrowPicL, this.x, this.y, this.width, this.height)
        } else if (this.type === 'rock') {
            if (rockFrame % this.randomise === 0) {
                if (this.frameX >= 3) {
                    this.frameX = 0;
                } else {
                    this.frameX++;
                }
            }
            
            ctx2.drawImage(boulder, this.frameX * 394, this.frameY * 394, 394, 394, this.x, this.y, this.width, this.height)
        } else if (this.type === 'rockL') {
            if (rockFrame % this.randomise === 0) {
                if (this.frameX <= 0) {
                    this.frameX = 3;
                } else {
                    this.frameX--;
                }
            }
            
            ctx2.drawImage(boulder, this.frameX * 394, this.frameY * 394, 394, 394, this.x, this.y, this.width, this.height)
        } else if (this.type === 'fire') {
                        
            ctx2.drawImage(firethrow, this.x, this.y, this.width, this.height)
        } else {
                        
            ctx2.drawImage(steps, this.x, this.y, this.width, this.height)
        }
        // ctx2.fillStyle = 'brown'
        // ctx2.fillRect(this.x, this.y, this.width, this.height);
       
    }

    update(){
        this.x += this.speed * gameSpeed
        if(this.speed > 0){
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width
            }
        } else {
            if (this.x < 0 - this.width) {
                this.x = canvas.width + this.width
            }
        }
    }
}

function initObstacles(){
    //boulders
    for(let i = 0; i < 4; i++){
        let x = i * 225
        rocks.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid , grid, 1, 'rock'))
    }
    for(let i = 0; i < 3; i++){
        let x = i * 355
        rocks.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid , grid, -2, 'rockL'))
    }
    // arrowLanes
    for(let i = 0; i < 3; i++){
        let x = i * 300
        arrows.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, 1, 'arrow'))
    }
    for(let i = 0; i < 3; i++){
        let x = i * 415
        arrows.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, -1.3, 'arrowL'))
    }
    //fire
    for(let i = 0; i < 2; i++){
        let x = i * 275
        fire.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid * 5, grid, 8, 'fire'))
    }
    //steps
    for(let i = 0; i < 3; i++){
        let x = i * 350
        debris.push(new Obstacle(x, canvas.height - grid * 8 - 20, grid, grid, 1.7, 'debris'))
    }
    for(let i = 0; i < 3; i++){
        i === 0 ? x = 45 : x = i * 345
        debris.push(new Obstacle(x, canvas.height - grid * 9 - 20, grid, grid, -0.5, 'debris'))
    }

}

initObstacles()

function handleObstacles(){
    for(let i = 0; i < rocks.length; i++) {
        rocks[i].update();
        rocks[i].draw();
    }
    for(let i = 0; i < rocks.length; i++) {
        if (collision(runner, rocks[i])){
            ctx4.drawImage(collisions, runner.x, runner.y, 50, 50)
            hurt.play()
            resetPlayer()
            status = 'wounded'
        }
    }

    for(let i = 0; i < arrows.length; i++) {
        arrows[i].update();
        arrows[i].draw();
    }
    for(let i = 0; i < arrows.length; i++) {
        if (collision(runner, arrows[i])){
            ctx4.drawImage(collisions, runner.x, runner.y, 50, 50)
            hurt.play()
            resetPlayer()
            status = 'wounded'

        }
    }

    for(let i = 0; i < fire.length; i++) {
        fire[i].update();
        fire[i].draw();
    }
    for(let i = 0; i < fire.length; i++) {
        if (collision(runner, fire[i])){
            ctx4.drawImage(flame, runner.x, runner.y, 50, 50)
            burn.play()
            resetPlayer()
            status = 'burned'
        }
    }

    for(let i = 0; i < debris.length; i++) {
        debris[i].update();
        debris[i].draw();
        
    }

    if (runner.y < 200 && runner.y > 80 ) {
        safe = false
        for(let i = 0; i < debris.length; i++) {
            if (collision(runner, debris[i])){
                runner.x += debris[i].speed;
                safe = true
            }
        }
        if (!safe){
            for(let i = 0; i < 30; i++){
                splash.unshift(new Ripple(runner.x, runner.y))
            }
            burn.play()
            resetPlayer()
            status = 'burned'
        }
    }
    
}

