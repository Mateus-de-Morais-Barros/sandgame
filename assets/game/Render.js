export class Render {



    draw(c, grid, config) {

        let rows = config.rows;
        let cols = config.cols;
        let width = config.width;
        let height = config.height;

        // clear canvas
        c.clearRect(0, 0, width, height);
        
        //prints frame on screen
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++){
                let currentParticle = grid[i][j]

                let x = i * config.particleSize
                let y = j * config.particleSize
    
                c.strokeStyle = 'gray'
                c.strokeRect(x, y, cols*2, rows*2)
                
                c.fillStyle =  currentParticle.color
                c.fillRect(x, y, cols*2, rows*2);   
                
                
            }
        }
    }






}