data.rect('player', 10, 10, 20, 20, 'red')
data.update('player', data.speed(5))

function start() {
    vector.moviment('player', 'w', 'd', 's', 'a')
}