function update() {
    collider.set('solid', 'player', 'paredes')

    collider.set('hover', 'player', 'fruta', (p, f) => {
        if (f.visible) {
            p.pontos += 1

            f.visible = false
            setTimeout(() => {
                f.x = rnValue(WIDTH)
                f.y = rnValue(HEIGHT)
                f.visible = true
            }, 350)
        }
    })

    data.update('pontos', (text) => {
        let player = data.find('player')
        text.text = 'Pontos: ' + player.pontos
        text.fontFamily = 'Consolas'
        text.color = 'white'
    })
}