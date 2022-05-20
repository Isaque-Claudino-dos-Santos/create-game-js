function start() {
    data.rect('player', WIDTH / 2, HEIGHT / 2, 16, 16, 'black')
    data.speed('player', 8)
    vector.moviment('player', 'w', 'd', 's', 'a')

    data.group('paredes', (d) => {
        let borderSize = 10
        let borderColor = 'grey'
        return [
            //top
            d.rect(null, 0, 0, WIDTH, borderSize, borderColor),
            //left
            d.rect(null, 0, borderSize, borderSize, HEIGHT, borderColor),
            //right
            d.rect(null, WIDTH - borderSize, borderSize, borderSize, HEIGHT, borderColor),
            //bottom
            d.rect(null, 0, HEIGHT - borderSize, WIDTH, borderSize, borderColor)
        ]
    })

}