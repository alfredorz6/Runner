class Ripple {
    constructor(x, y){
        this.x = x+25;
        this.y = y+25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 0.8;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    draw(){
        ctx1.strokeStyle =  'rgba(100,0,0,' + this.opacity + ')';
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx1.stroke();
        ctx1.closePath();
    }

    splash(){
        if(this.radius < 50){
            this.radius += 0.7;
            this.x -= 0.03;
            this.y -= 0.03;
        }
        if(this.opacity > 0){
            this.opacity -= 0.02;
        }
    }
    
}

function handleRipples() {
    for (let i = 0; i < splash.length; i++) {
        splash[i].splash();
        splash[i].draw();
    }

    if (splash.length > maxParticles){
        for(let i = 0; i < 30; i++){
            splash.pop();
        }
    }
    
    if(((keys[37] || keys[38] || keys[39] || keys[40])) && runner.y < 200 && runner.y > 80 && splash.length < maxParticles + 10) {
        for (let i = 0; i < 20; i++) {
            splash.unshift(new Ripple(runner.x, runner.y))
        }
    }
}