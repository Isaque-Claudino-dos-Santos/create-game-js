import fruit from "../Modules/fruit.js";
import hud from "../Modules/hud.js";
import player from "../Modules/player.js";

export default function start() {
    player.load()
    fruit.load()
    hud.load()


    //temporario para ideia
    function animation(animationName, spriteName, size, time) {
        let i = 0
        setInterval(() => {
            i++
            sprite.alter(spriteName, i)
            if (i >= size)
                i = 0
        }, time)
    }

    animation('stop', 'player', 10, 60)



}

