function update() {
    collider.set('solid', player1, parede)
    collider.set('hover', player1, fruta,(c,b) => {
        b.color = 'brown'
    })

}