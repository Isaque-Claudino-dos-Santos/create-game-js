function start() {
    data.rect('player', 30, 30, 30, 30, 'blue')
        .speed(20)
        .moviment('click', 'w', 'd', 's', 'a')
        .save()


    data.group('paredes', (data) => {
        let size = 20
        let color = 'black'
        return [
            data.rect('top', 0, 0, WIDTH, size, color).return(),
            data.rect('right', WIDTH - size, 0, size, HEIGHT, color).return(),
            data.rect('left', 0, size, size, HEIGHT, color).return(),
            data.rect('botton', 0, HEIGHT - size, WIDTH, size, color).return()
        ]
    })

    screen.create('jogo', ['player', 'paredes'])
        .visible(true)
        .save()
}