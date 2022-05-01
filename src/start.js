var player1 = data.rect(10, 10, 30, 30, 'red')
player1 = data.set(player1, data.speed(4))

var player2 = data.rect(300, 10, 30, 30, 'blue')
player2 = data.set(player2, data.speed(4))



function start() {
    vector.moviment(player1, 'w', 'd', 's', 'a')
    vector.moviment(player2, 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft')
}