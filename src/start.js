function start() {

    //Tela de start
    data.group('start', (d) => {
        return [
            d.rect(null, 0, 0, WIDTH, HEIGHT, 'black', true),
            d.text(null, (WIDTH / 2) - 90, (HEIGHT / 2) - 40, 70, 'START', 'white', 'Consolas'),
            d.text(null, (WIDTH / 2) - (30 * 2), (HEIGHT / 2) + 30, 20, 'Press Enter', 'white', 'Consolas')
        ]
    })

    screen.create('start', 'start')
    screen.visible('start', true)

    //Tela de jogo
    data.rect('player', 40, 40, 16, 16, 'blue')
    data.speed('player', 5)
    data.addProp('player', { pontos: 0 })

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
    screen.create('jogo', ['player', 'paredes', 'fruta', 'pontos'])

    key.keyboard('Enter', (keydatas) => {
        keydatas.constant = false
        screen.visibleOffAll('jogo')
        vector.moviment('player', 'w', 'd', 's', 'a')
    })
}