function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx1.drawImage(Background_2lv, 0, 0, canvas.width, canvas.height)
    runner.draw();
    runner.update();
    handleObstacles()
    ctx4.drawImage(toplvl, 0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
}

animate();

//even listeners

window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        runner.run();
    }
})

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode]
    runner.moving = false
})

function scored() {
    score++;
    gameSpeed += 0.1
    runner.x = canvas.width/2 - runner.width/2
    runner.y = canvas.height - runner.height - 20;
}