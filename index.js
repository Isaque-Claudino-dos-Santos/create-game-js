import parede from "./app/objects/parede.js"
import player from "./app/objects/player.js"

key.uses(['a', 'w', 'd', 's'])
object.create('allcanvas', { x: 0, y: 0, width: WIDTH, height: HEIGHT })


player.load()
parede.load()


update = () => {
    player.moviment()
    collider.add('player')
    collider.call('rect', 'player', 'parede')
}


render = () => {
    draw.render('rect_clear', ['allcanvas'])
    draw.render('rect_fill', ['player', 'parede'])
}

loop()