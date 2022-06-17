import fruit from "../Modules/fruit.js";
import hud from "../Modules/hud.js";
import player from "../Modules/player.js";

export default function start() {
    player.load()
    fruit.load()
    hud.load()
}