function start() {
    data.rect('player', 40, 40, 16, 16, 'blue')
    data.speed('player', 5)
    data.addProp('player', { pontos: 0 })

    vector.moviment('player', 'w', 'd', 's', 'a')

    data.group('paredes', (d) => {
        let borderSize = 10
        let borderColor = 'black'
        return [
            //top == HUD
            d.rect(null, 0, 0, WIDTH, borderSize * 3, borderColor),
            //left
            d.rect(null, 0, borderSize, borderSize, HEIGHT, borderColor),
            //right
            d.rect(null, WIDTH - borderSize, borderSize, borderSize, HEIGHT, borderColor),
            //bottom
            d.rect(null, 0, HEIGHT - borderSize, WIDTH, borderSize, borderColor)
        ]
    })

    data.rect('fruta', WIDTH / 2, HEIGHT / 2, 12, 12, 'green')
    data.text('pontos', 12, 7, 20)
}