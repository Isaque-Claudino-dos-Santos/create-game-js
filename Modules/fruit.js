export default {
    name: 'fruit',
    type: 'rect',

    load() {
        data.rect(this.name, 100, 100, 12, 12, 'blue')
            .save()
    },

    render() {
        draw.render(this.rect, this.name)
    },

    randonPosition() {
        let fruit = data.find(this.name)
        let rnX = rnValue(WIDTH)
        let rnY = rnValue(HEIGHT)
        fruit.x = rnX
        fruit.y = rnY
    }
}