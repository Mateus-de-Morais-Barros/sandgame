import { Particle } from './Particle.js'

export class Water extends Particle {

    constructor(positionX, positionY){
        super("Water", "blue", positionX, positionY, "Solid")
    }

}