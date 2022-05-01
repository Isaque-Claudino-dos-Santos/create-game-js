var player1 = data.rect(10, 10, 20, 20, 'red')
player1 = data.set(player1, data.speed(4))

var player2 = data.rect(300, 10, 20, 20, 'blue')
player2 = data.set(player2, data.speed(4))

var parede = data.rect(200, 100, 10, 100)
var fruta = data.rect(200, 30, 15, 15, 'green')

function start() {
    vector.moviment(player1, 'w', 'd', 's', 'a')
    vector.moviment(player2, 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft')
}