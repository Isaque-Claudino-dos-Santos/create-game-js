import parede from "./app/objects/parede.js"
import player from "./app/objects/player.js"

key.uses(['a', 'w', 'd', 's'])

player.load()
parede.load()

update = () => {
    player.moviment()


    collider.call('rect', 'player', 'parede')
}


render = () => {
    draw.clearAllCanvas()
    draw.render('rect_fill', ['player', 'parede'])
}

loop()