class Obstacle {
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    }

    draw() {
        let angle = 0
        // angleMode(DEGREES)
        angle = angle + 1
        ctx5.fillStyle = 'brown'
        ctx5.fillRect(this.x, this.y, this.width, this.height);
        // ctx5.translate(5, 5)
        // ctx5.rotate(angle)
        
        // ctx2.rectMode(CENTER)
        // ctx2.rect(0, 0, 100, 50)
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
        rocks.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid , grid, 1.2, 'rock'))
    }
    for(let i = 0; i < 6; i++){
        let x = i * 225
        rocks.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid , grid, -2, 'rock'))
    }
    // arrowLanes
    for(let i = 0; i < 2; i++){
        let x = i * 500
        arrows.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, 2.5, 'arrow'))
    }
    for(let i = 0; i < 4; i++){
        let x = i * 275
        arrows.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, -1.3, 'arrow'))
    }
    //fire
    for(let i = 0; i < 2; i++){
        let x = i * 275
        fire.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid * 5, grid, 3, 'fire'))
    }
    //steps
    for(let i = 0; i < 3; i++){
        let x = i * 350
        debris.push(new Obstacle(x, canvas.height - grid * 8 - 20, grid, grid, 1.7, 'debris'))
    }
    for(let i = 0; i < 3; i++){
        let x = i * 280
        debris.push(new Obstacle(x, canvas.height - grid * 9 - 20, grid, grid, 0, 'debris'))
    }

}

initObstacles()

function handleObstacles(){
    for(let i = 0; i < rocks.length; i++) {
        rocks[i].update();
        rocks[i].draw();
    }
    for(let i = 0; i < arrows.length; i++) {
        arrows[i].update();
        arrows[i].draw();
    }
    for(let i = 0; i < fire.length; i++) {
        fire[i].update();
        fire[i].draw();
    }
    for(let i = 0; i < debris.length; i++) {
        debris[i].update();
        debris[i].draw();
    }
    
}