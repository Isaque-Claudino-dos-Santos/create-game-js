export default {
    name: 'snake',
    type: 'rect',

    load() {
        data.rect(this.name, 0, 0, 25, 25, 'green')
            .props({ score: 0 })
            .speed(25)
            .moviment('press', 'w', 'd', 's', 'a')
            .save()
    },

    _resetAllKeys() {
        let movimentState = data.find(this.name).moviment.movimentState
        movimentState.right = false
        movimentState.top = false
        movimentState.left = false
        movimentState.down = false
    },


    moviment() {
        let snake = data.find(this.name)
        snake.moviment.movimentActio.on = false

        moviment.actionByKey('snake', (method) => {
            method.keydown.right = () => {
                this._resetAllKeys()
                snake.moviment.movimentState.right = true
            },
                method.keydown.top = () => {
                    this._resetAllKeys()
                    snake.moviment.movimentState.top = true
                },
                method.keydown.left = () => {
                    this._resetAllKeys()
                    snake.moviment.movimentState.left = true
                },
                method.keydown.down = () => {
                    this._resetAllKeys()
                    snake.moviment.movimentState.down = true
                }
        })
    },

    collect(who, callback) {
        collider.set('hover', this.name, who, callback)
    }
}