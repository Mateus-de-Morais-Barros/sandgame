import { Logic } from "./assets/game/Logic.js";
import { Render } from "./assets/game/Render.js";
import { Config } from "./assets/game/config.js";

import { Sand } from "./assets/particles/Sand.js"

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const config = new Config()
const logic = new Logic()
const render = new Render()

canvas.height = 200
canvas.width = 200
canvas.style.background = 'Black'

config.height = canvas.height
config.width = canvas.width

let grid = logic.make2DArray(config.cols, config.rows);
console.log(grid)
function gameLoop() {

    //frame generation
    grid = logic.setup(grid, config)
    //frame render
    render.draw(c, grid, config);
}

// Simulation loop
setInterval(gameLoop, 1000 / config.GAME_SPEED);

console.log('Begin game Loop')


// adiciona uma particula
window.addEventListener('click', (mouse) => {

    let mouseX = mouse.clientX - (window.innerWidth/2)+(canvas.width/2)
    let mouseY = mouse.clientY - (window.innerHeight/2)+(canvas.height/2)
    let roundedMouseX = Math.ceil(mouseX/1) - 1
    let roundedMouseY = Math.ceil(mouseY/1) - 1
    console.log("Position clicked: " + mouseX, mouseY)
    console.log("Position Rounded: " + roundedMouseX, roundedMouseY)
    grid[roundedMouseX][roundedMouseY] = new Sand(roundedMouseX, roundedMouseY);

    // grid[roundedMouseX][roundedMouseY] = new Sand();

    // console.log('Mouse position: ' + roundedMouseX + " , " + roundedMouseY)
});

window.addEventListener('keypress', (mouse) => {
    console.log(grid)
});

