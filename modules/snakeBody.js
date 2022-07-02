export default {
    name: 'snakeBody',
    type: 'rect',
    bodyParts: [],

    load() {
        data.group(this.name, () => {
            return this.bodyParts
        })
    },

    createBody() {
        let s = data.find('snake')
        this.bodyParts.push(data.rect('body_' + s.score, s.x, s.y, 25, 25, 'purple').return())
    },

    removeEndBodypart() {
        this.bodyParts.shift()
    },


    moviment() {
        this.removeEndBodypart()
        if (data.find('snake').score >= 1)
            this.createBody()
    }
}