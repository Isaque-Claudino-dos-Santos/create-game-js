function start() {
    // PLAYER
    data.rect('player', 10, 10, 20, 20, 'red')
    data.update('player', data.speed(6))
    // BLOCO
    data.rect('bloco', 400, 100, 10, 100)
    //FRUTA
    data.image('fruta', 100, 100, 16, 16, 'cogumelo.png')

    cam.activeCam('player', 0.25)

    vector.moviment('player', 'w', 'd', 's', 'a')

    key.keyboard('Enter', (k) => {
        k.constant = false
        console.log('start')
    })
}