import fruit from "../modules/fruit.js";
import snake from "../modules/snake.js";
import snakeBody from "../modules/snakeBody.js";

export default function update() {
    snake.moviment()
    snakeBody.moviment()
  
    snake.collect('fruit', (s, f) => {
        if (f.visible) {
            f.visible = false
            fruit.alterRandonPosition()
            s.score += 1
            snakeBody.createBody()  
            setTimeout(() => {
                f.visible = true
            }, 1000)
        }
    })

    
}