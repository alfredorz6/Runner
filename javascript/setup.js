const canvas = document.getElementById('canv1')
const ctx1 = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const canvas2 = document.getElementById('canv2')
const ctx2 = canvas2.getContext('2d');
canvas2.width = 800;
canvas2.height = 800;

const canvas3 = document.getElementById('canv3')
const ctx3 = canvas3.getContext('2d');
canvas3.width = 800;
canvas3.height = 800;

const canvas4 = document.getElementById('canv4')
const ctx4 = canvas4.getContext('2d');
canvas4.width = 800;
canvas4.height = 800;

const canvas5 = document.getElementById('canv5')
const ctx5 = canvas5.getContext('2d');
canvas5.width = 800;
canvas5.height = 800;

const canvas6 = document.getElementById('canv6')
const ctx6 = canvas6.getContext('2d');
canvas6.width = 800;
canvas6.height = 800;

//G variables
const grid = 80
let keys= [];
let score = 0
let collisionsCount = 0;
let frame = 0
let safe = false
let rockFrame = 0
let gameSpeed = 1
let status = 'normal'
let lives = 3

const particles= []
const maxParticles = 300
const splash = []
const rocks = [];
const arrows = [];
const debris = [];
const fire = [];

//images
const Background_2lv = new Image();
Background_2lv.src = './assets/floor.png'

const toplvl = new Image();
toplvl.src = './assets/toplayer.png'

const collisions = new Image();
collisions.src = './assets/collision.png'

const flame = new Image();
flame.src = './assets/y8.gif'

const arrowPic = new Image();
arrowPic.src = './assets/arrows_right.png'

const arrowPicL = new Image();
arrowPicL.src = './assets/arrows_left.png'

const boulder = new Image();
boulder.src = './assets/boulder.png'

const firethrow = new Image();
firethrow.src = './assets/flames.png'

const steps = new Image();
steps.src = './assets/stepping_stone.png'

const player = new Image();
player.src = './assets/sprite.png'

const wall = new Image();
wall.src = './assets/wall.jpg'

const crown = new Image();
crown.src = './assets/crown.png'

//audio
const myPlay = document.getElementById("play");
const BGM = new Audio();
BGM.loop = true
BGM.volume = 0.75
BGM.autoplay = true
BGM.src = './assets/BGM/bgm.ogg'

myPlay.addEventListener('click', function() {
    BGM.paused ? BGM.play() : BGM.pause()
})

const burn = new Audio();
burn.src = './assets/BGM/lava.flac'

const hurt = new Audio();
hurt.src = './assets/BGM/deathh.wav'
//modal
var modal = document.getElementById("instruction");
var btn = document.getElementById("start-game");

btn.onclick = function() {
  modal.style.display = "none";
  BGM.play()
}

// favicon
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = './../favicon.ico';

//gameover modal
var reset = document.getElementById('restart-game')
var modal2 = document.getElementById('game-over')


reset.onclick = function() {
  modal2.style.display = "none";
  resetGame();
 
}

