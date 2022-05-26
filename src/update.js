function update() {
    collider.set('solid', 'player', 'paredes')
    collider.set('solid', 'inimigo', 'paredes')

    collider.set('hover', 'inimigo', 'player', (i, p) => {
        p.dead = true
        p.deadCount += 1
        i.x = WIDTH - 40
        i.y = 30
        screen.visibleOffAll('gameOver')
    })

    data.update('inimigo', (i) => {
        let p = data.find('player')

        if (!p.dead) {
            if (i.x > p.x + p.width) {
                i.x -= i.speedX
            }

            if (i.x < p.x) {
                i.x += i.speedX
            }

            if (i.y > p.y + p.height) {
                i.y -= i.speedY
            }

            if (i.y < p.y) {
                i.y += i.speedY
            }
        }
    })

    collider.set('hover', 'player', 'fruta', (p, f) => {
        if (f.visible) {
            p.pontos += 1

            f.visible = false
            setTimeout(() => {
                f.x = rnValue(WIDTH - 40)
                f.y = rnValue(HEIGHT - 60)
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

    data.update('deadCount', (text) => {
        let player = data.find('player')
        text.color = 'white'
        text.text = 'Mortes: ' + player.deadCount
    })
}