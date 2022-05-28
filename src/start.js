function start() {
    data.rect('player', 30, 30, 30, 30, 'blue')
        .speed(5)
        .moviment('press', 'w', 'd', 's', 'a')
        .save()
}