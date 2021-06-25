class Particle {
    constructor(x, y){
        this.x = x+25;
        this.y = y+25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    draw(){
        ctx2.fillStyle =  'rgba(165,122,102,' + this.opacity + ')';
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx2.fill();
        ctx2.closePath();
    }

    update() {
        this.x += this.directionX
        this.y += this.directionY
        if (this.opacity > 0.1){
            this .opacity -= 0.9
        }
        if (this.radius> 0.15) {
            this.radius -= 0.14
        }
    }

    splash(){
        if(this.radius < 50){
            this.radius += 0.5;
            this.x -= 0.1;
            this.y -= 0.1;
        }
        if(this.opacity > 0){
            this.opacity -= 0.005;
        }
    }
    
}

function handleParticles() {
    for(let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    if (particles.length > maxParticles){
        for(let i = 0; i < 30; i++){
            particles.pop()
        }
    }
    
    if(((keys[37] || keys[38] || keys[39] || keys[40])) && runner.y > 200 && particles.length < maxParticles + 10){
        for (let i = 0; i < 10; i++) {
            particles.unshift(new Particle(runner.x, runner.y))
        }
    }

    
}