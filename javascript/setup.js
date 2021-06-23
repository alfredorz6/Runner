const canvas = document.getElementById('canvas1')
const ctx1 = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const canvas3 = document.getElementById('canvas3')
const ctx3 = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const canvas4 = document.getElementById('canvas4')
const ctx4 = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const canvas5 = document.getElementById('canvas5')
const ctx5 = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

//G variables
const grid = 80
let keys= [];
let score = 0
let collisionsCount = 0;
let frame = 0
let gameSpeed = 1

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