function update() {
    collider.set('solid', 'player', 'paredes')

    collider.set('hover', 'player', 'fruta', (p, f) => {
        if (f.visible) {
            console.log('fruta boa')
            f.visible = false
            setTimeout(() => {
                f.visible = true
            }, 1000)
        }
    })
}