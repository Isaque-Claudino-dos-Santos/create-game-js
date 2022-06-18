import fruit from "../Modules/fruit.js";
import hud from "../Modules/hud.js";
import player from "../Modules/player.js";

export default function start() {
    player.load()
    player.movimentAction()
    fruit.load()
    hud.load()

    animation.excute('player', 50)
}

