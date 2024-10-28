import { Particle } from '../particles/Particle.js'

export class Sand extends Particle {

    constructor(positionX, positionY){
        super("Sand", "wheat", positionX, positionY)
    }

}