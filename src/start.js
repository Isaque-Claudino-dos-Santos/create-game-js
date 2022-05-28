function start() {
    data.rect('player', 30, 30, 30, 40, 'blue')
        .speed(5)
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

    key.create('mover')
        .keydown((event) => {
            console.log('keyDown ' + event.key)
        })
        .keyup((event) => {
            console.log('keyUp ' + event.key)
        })
        .save()
}