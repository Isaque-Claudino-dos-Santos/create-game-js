import fruit from "../Modules/fruit.js";
import hud from "../Modules/hud.js";
import player from "../Modules/player.js";

export default function start() {
    player.load()
    fruit.load()
    hud.load()


    let i = 0
    setInterval(() => {
        i++
        sprite.alter('player', i)
        if (i == 10)
            i = 0
    }, 50)


}

