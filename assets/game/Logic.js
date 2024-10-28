// import { Sand } from "../particles/Sand";
// import { Air } from "../particles/Air";

export class Logic {


    make2DArray(cols, rows) {
        let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
            for (let j = 0; j < arr.length; j++) {
                arr[i][j] = new Air(i,j);
            }
        }
    
        return arr;
    }


    setup(grid, config) {
        
        let rows = config.rows;
        let cols = config.cols;

        //First grid
        if(!grid) {
            let grid = this.make2DArray(cols, rows)
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++){
                    if (i===j) {
                        grid[i][j] = new Sand(i, j);
                    } else {
                        grid[i][j] = new Air(i, j);
                    }
                }
            }
            return grid
        } 
    
        //Grid logic
        let nextGrid = this.make2DArray(cols, rows)
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++){
                
                let currentParticle = grid[i][j]
                if (currentParticle.name !== "Air") {
                    let below = grid[i][j+1]
                    
                    
                    if (below.name == "Air" && j+1 < rows) {
                        nextGrid[i][j+1] = new Sand()
                    } else if (below.name !== "Air" && grid[i-1][j+1].name == "Air") {//bottom left
                        nextGrid[i-1][j+1] = new Sand()
                    } else if (below.name !== "Air" && grid[i+1][j+1].name == "Air") {//bottom right
                        nextGrid[i+1][j+1] = new Sand()
                    } else {
                        nextGrid[i][j] = new Sand()
                    }
                }
            }
        }
    
        grid = nextGrid
        return grid
    }


}

class Particle {

    constructor(name, color, positionX, positionY){
        this.name = name
        this.color = color
        this.positionX = positionX
        this.positionY = positionY
        this.size = 1
    }
    
}

class Air extends Particle {

    constructor(positionX, positionY){
        super("Air", "black", positionX, positionY)
    }

}

class Sand extends Particle {

    constructor(positionX, positionY){
        super("Sand", "wheat", positionX, positionY)
    }

}