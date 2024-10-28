import { Sand } from "../particles/Sand.js";
import { Air } from "../particles/Air.js";

export class Logic {


    make2DArray(cols, rows) {
        let grid = new Array(cols);
        for (let i = 0; i < grid.length; i++) {
            grid[i] = new Array(rows);
            for (let j = 0; j < grid.length; j++) {
                grid[i][j] = new Air(i, j);
            }
        }
    
        return grid;
    }


    setup(grid, config) {
        
        let rows = config.rows;
        let cols = config.cols;

        //First grid
        if(!grid) {
            return this.make2DArray(cols, rows)
        } 
    
        //Grid logic
        let nextGrid = this.make2DArray(cols, rows)
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++){
                
                let currentParticle = grid[i][j]
                if ((currentParticle instanceof Air) == false) {
                    let below = grid[i][j+1]
                    let bottomLeft, bottomRight

                    if (i > 0 && i < cols - 1) {
                        bottomLeft = grid[i-1][j+1]
                        bottomRight = grid[i+1][j+1]
                        
                        
                    }

                    if (below instanceof Air && j+1 < rows) {
                        nextGrid[i][j+1] = new Sand()
                    } else if (bottomLeft instanceof Air && i-1 > -1) {//bottom left
                        nextGrid[i-1][j+1] = new Sand()
                    } else if (bottomRight instanceof Air && i+1 < cols) {//bottom right
                        nextGrid[i+1][j+1] = new Sand()
                    } else {
                        nextGrid[i][j] = new Sand()
                    }
                }
            }
        }
    
        return nextGrid
    }


}