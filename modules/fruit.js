import rules from "./rules.js"

export default {
    name: 'fruit',
    type: 'rect',

    getRandoBordCase() {
        return rules.size * rnValue(20)
    },

    alterRandonPosition() {
        let fruit = data.find(this.name)
        fruit.x = this.getRandoBordCase()
        fruit.y = this.getRandoBordCase()
    },

    load() {
        data.rect(this.name, this.getRandoBordCase(), this.getRandoBordCase(), rules.size, rules.size, rules.fruitColor)
            .save()
    }
}