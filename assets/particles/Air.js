import { Particle } from '../particles/Particle.js'

export class Air extends Particle {

    constructor(positionX, positionY){
        super("Air", "black", positionX, positionY, "Gas")
    }

}