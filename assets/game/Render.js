export class Render {



    draw(c, grid, config) {

        let rows = config.rows;
        let cols = config.cols;
        let width = config.width;
        let height = config.height;

        //clear canvas
        // c.clearRect(0, 0, width, height);
        
        //prints frame on screen
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++){
                let currentParticle = grid[i][j]

                let x = i * currentParticle.size
                let y = j * currentParticle.size
    
                c.strokeStyle = 'gray'
                c.strokeRect(x, y, cols, rows)
                if (grid[i][j] === 1) {
                    c.fillStyle =  currentParticle.color
                    c.fillRect(x, y, cols, rows);   
                }
                
            }
        }
    }






}