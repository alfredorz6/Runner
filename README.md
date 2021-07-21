# Runner

### [Runner](https://alfredorz6.github.io/Runner/)

![](https://open-uri.s3.us-west-1.amazonaws.com/Screenshot+(60).png)

## Overview
Runner is a game based on the frogger game where you had to cross a street avoiding obstacle to reach the finish line, 
the runner can move in any direction to avoid obstacles in movement, every time it reaches the end the runner will be 
reset to its start position and the speed of obstacles will increase, the target is to see what is the max record you can achieve.

## Deployment
Hosted on [Github](Github.com)

## Aditional features
- [ ] 1. sounds effect on impact with objects
- [ ] 2. added status effects on player when hit such as wounded or burned giving it restrictions
- [ ] 3. add 3 lives as basic stat and a function that after 10 points character gets a crown in its sprite

## Technologies
* JavaScript
* HTML5 Canvas
* CSS
* HTML audio

## Aditional Resources
Please refer to our [Wiki](https://github.com/alfredorz6/Runner/wiki)

## Code Samples
the following code snipet shows how the player is able to drift away on top of the floating debris on the lava river:
```Javascript
    for(let i = 0; i < debris.length; i++) {
        debris[i].update();
        debris[i].draw();
        
    }

    if (runner.y < 200 && runner.y > 70 ) {
        safe = false
        for(let i = 0; i < debris.length; i++) {
            if (collision(runner, debris[i])){
                runner.x += (debris[i].speed * gameSpeed);
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
```
as you can see in the code snipet the player (runner) X position will be altered based on the debri speed multiplied by the current gameSpeed.

## Credits
Sound effects obtained from https://www.opengameart.org
