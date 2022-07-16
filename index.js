import player from "./app/objects/player.js"

key.uses(['a', 'w', 'd', 's'])

player.load()


update = () => {
    player.moviment()
}


render = () => {
    draw.render('rect_stroke', ALL)
}

loop()