const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 3;
let gameFrame = 0;

const bgLayer1 = new Image();
bgLayer1.src = './img/layer-1.png'
const bgLayer2 = new Image();
bgLayer2.src = './img/layer-2.png'
const bgLayer3 = new Image();
bgLayer3.src = './img/layer-3.png'
const bgLayer4 = new Image();
bgLayer4.src = './img/layer-4.png'
const bgLayer5 = new Image();
bgLayer5.src = './img/layer-5.png'

window.addEventListener('load', function () {
    // not much happening here
})

const slider = document.getElementById('slider');
slider.value = gameSpeed;
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function (e) {
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = e.target.value;
})

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        this.x = gameFrame * this.speed % this.width;
    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(bgLayer1, 0.2);
const layer2 = new Layer(bgLayer2, 0.4);
const layer3 = new Layer(bgLayer3, 0.6);
const layer4 = new Layer(bgLayer4, 0.8);
const layer5 = new Layer(bgLayer5, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    })
    gameFrame--;
    requestAnimationFrame(animate);
}
animate()

// console.log(bgLayer1)