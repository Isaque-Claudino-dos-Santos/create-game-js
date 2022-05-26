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
    data.addProp('player', { pontos: 0, dead: false, deadCount: 0 })

    data.rect('inimigo', WIDTH - 40, 40, 16, 16, 'red')
    data.speed('inimigo', 3)


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
            d.rect(null, 0, HEIGHT - borderSize, WIDTH, borderSize, borderColor),
            //center
            d.rect(null, WIDTH / 2, HEIGHT / 2, 10, 200, borderColor)
        ]
    })

    data.rect('fruta', WIDTH / 2, HEIGHT / 2, 12, 12, 'green')
    data.text('pontos', WIDTH / 20, 7, 20)
    data.text('deadCount', WIDTH / 4, 7, 20)

    screen.create('jogo', ['player', 'inimigo', 'paredes', 'fruta', 'pontos', 'deadCount'])

    key.keyboard('Enter', (keydatas) => {
        screen.visibleOffAll('jogo')
        vector.moviment('player', 'w', 'd', 's', 'a')
        let player = data.find('player')
        player.x = 30
        player.y = 30
        player.dead = false
        player.pontos = 0


        key.mouse('fruta', () => {
            console.log('Não clique na fruta :) mesmo que bug rsrsrsrs')
        })
    })

    //Tela Game Over

    data.group('gameOver', (d) => {
        return [
            d.rect(null, 0, 0, WIDTH, HEIGHT, 'black', true),
            d.text(null, (WIDTH / 2) - 170, (HEIGHT / 2) - 40, 70, 'GAME OVER', 'white', 'Consolas'),
            d.text(null, (WIDTH / 2) - (30 * 2), (HEIGHT / 2) + 30, 20, 'Press Enter', 'white', 'Consolas')
        ]
    })

    screen.create('gameOver', 'gameOver')

}