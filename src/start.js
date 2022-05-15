function start() {
    // PLAYER
    data.rect('player', 10, 10, 20, 20, 'red')
    data.update('player', data.speed(6))
    // PARADES
    data.group('paredes', (d) => {
        return [
            d.rect(null, 100, 10, 30, 300),
            d.rect(null, 0, 300, 100, 30)
        ]
    })
    //FRUTA
    data.image('fruta', 30, 100, 16, 16, 'cogumelo.png')
    //score
    data.text('score', 0, 0, 20, 'SCORE: ')

    cam.activeCam('player', .25)

    vector.moviment('player', 'w', 'd', 's', 'a')

    key.keyboard('Enter', (dataKey) => {
        dataKey.constant = false
        console.log('start')
    })
}