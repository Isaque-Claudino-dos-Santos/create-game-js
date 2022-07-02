export default {
    name: 'fruit',
    type: 'rect',

    getRandoBordCase() {
        return 25 * rnValue(20)
    },

    alterRandonPosition() {
        let fruit = data.find(this.name)
        fruit.x = this.getRandoBordCase()
        fruit.y = this.getRandoBordCase()
    },

    load() {
        data.rect(this.name, this.getRandoBordCase(), this.getRandoBordCase(), 25, 25, 'orange')
            .save()
    }
}