

var player = data.rect(10, 10, 30, 30, 'blue')
player = data.set(player, data.speed(4))

var paredes = data.rect(150, 100, 10, 90, 'red')

function start() {
    key.keyboard('press.w',() => {
        player.y -= player.speedY
    })

    key.keyboard('press.d',() => {
        player.x += player.speedX
    })
    
    key.keyboard('press.s', () => {
        player.y += player.speedY
    })

    key.keyboard('press.a',() => {
        player.x -= player.speedX
    })
}