import { Logic } from "./assets/game/Logic.js";
import { Render } from "./assets/game/Render.js";
import { Config } from "./assets/game/config.js";

import { Water } from "./assets/particles/Water.js";
import { Sand } from "./assets/particles/Sand.js"

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const config = new Config()
const logic = new Logic()
const render = new Render()

canvas.height = config.height
canvas.width = config.width
canvas.style.background = 'Black'

config.cols = config.height/config.particleSize
config.rows = config.height/config.particleSize


let grid = logic.make2DArray(config.cols, config.rows);
console.log(grid)
function gameLoop() {

    //frame generation
    grid = logic.setup(grid, config, selectedElement)
    //frame render
    render.draw(c, grid, config);
}

// Simulation loop
setInterval(gameLoop, 1000 / config.GAME_SPEED);

console.log('Begin game Loop')


let selectedElement = new Sand()
// adiciona uma particula
window.addEventListener('mousemove', (mouse) => {

    let mouseX = mouse.clientX - (window.innerWidth/2)+(config.width/2)
    let mouseY = mouse.clientY - (window.innerHeight/2)+(config.height/2)
    let roundedMouseX = Math.ceil(mouseX/config.particleSize) - 1
    let roundedMouseY = Math.ceil(mouseY/config.particleSize) - 1
    // console.log("Position clicked: " + mouseX, mouseY)
    // console.log("Position Rounded: " + roundedMouseX, roundedMouseY)
    selectedElement.positionX = roundedMouseX
    selectedElement.positionY = roundedMouseY
    grid[roundedMouseX][roundedMouseY] = selectedElement

    
    
});

window.addEventListener('keypress', (event) => {

    console.log("SELECTED: " + event.key)
    switch (event.key) {
        case "s":
            selectedElement = new Sand(0,0)
            break;
    
        case "w":
            selectedElement = new Water(0,0)
            break;

        default:
            break;
    }
    console.log(selectedElement.name)
    console.log(selectedElement.color)
console.log(grid)
});

