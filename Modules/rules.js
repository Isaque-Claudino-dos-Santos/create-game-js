export default {
    randonPosition(what) {
        let fruit = data.find(what)
        let rnX = rnValue(WIDTH)
        let rnY = rnValue(HEIGHT)
        fruit.x = rnX
        fruit.y = rnY
    }
}