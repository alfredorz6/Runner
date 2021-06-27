function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    ctx6.clearRect(0, 0, canvas.width, canvas.height);
    handleRipples();
    ctx2.drawImage(Background_2lv, 0, 0, canvas2.width, canvas2.height)
    handleParticles()
    runner.draw();
    runner.update();
    runner.crowned();
    handleObstacles();
    ctx5.drawImage(toplvl, 0, 0, canvas.width, canvas.height)
    handleScoreBoard()
    frame++
    rockFrame += 8
    requestAnimationFrame(animate)
}

animate();

// even listeners

window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        runner.run();
    }
})

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode]
    runner.moving = false;
    runner.frameX = 1;
})

function scored() {
    score++;
    gameSpeed += 0.1
    status = 'normal'
    runner.x = canvas.width/2 - runner.width/2
    runner.y = canvas.height - runner.height - 20;
}

function handleScoreBoard() {
    ctx5.fillStyle = 'white';
    ctx5.strokeStyle = 'white'
    ctx5.font = '15px Arial';
    ctx5.strokeText('Score', 365, 15)
    ctx5.font = '60px Arial';
    ctx5.fillText(score, 365, 65);
    ctx5.font = '15px Arial'
    ctx5.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 45, 195)
    ctx5.strokeText('Lives Remaining: ' + lives.toFixed(1), 45, 207)
}

//collisin 
function collision(first, second) {
    return !(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height || 
        first.y + first.height < second.y);
}

function resetGame(){
    runner.x = canvas.width/2 - runner.width/2
    runner.y = canvas.height - runner.height - 35
    score = 0
    gameSpeed = 1
    lives = 3
    status = 'normal'
}

function resetPlayer(){
    if (lives === 0) {
        gameOver()
    } else if (status === 'burned'){
        runner.x = canvas.width/2 - runner.width/2
        runner.y = canvas.height - runner.height - 35
        lives -= 2
    } else {
        runner.x = canvas.width/2 - runner.width/2
        runner.y = canvas.height - runner.height - 35
        lives -- 
    }
}


function gameOver(){
    modal2.style.display = "block";

}