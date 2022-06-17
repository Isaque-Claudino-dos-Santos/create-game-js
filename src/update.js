import player from "../Modules/player.js";

export default function update() {
    player.collect('fruit')
    player.collider('hud')
}