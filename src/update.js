function update() {
    collider.set('solid', 'player', 'bloco')

    collider.set('hover', 'player', 'fruta', (p, f) => {
        f.visible = false
        console.log('fruta boa')
    })
}