function start() {
    data.image('player', 30, 30, 50, 50, 'ratata.png')
        .source(0, 0, 32, 32)
        .speed(5)
        .moviment('press', 'w', 'd', 's', 'a')
        .save()

        console.log(data.find('player'))
}