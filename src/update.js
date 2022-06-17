import hud from "../Modules/hud.js";
import player from "../Modules/player.js";

export default function update() {
    player.collect('fruit')
    hud.collider('player')
}