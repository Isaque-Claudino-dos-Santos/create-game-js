import hud from './hud.js'
import rules from './rules.js'

export default {
    name: 'player',
    type: 'image',

    frames() {
        sprite.frames('stop-right', (frame) => {
            let frames = []
            for (let i = 0; i < 11; i++) {
                frames.push(frame.create(32 * i, 0, 32, 32))
            }
            return frames
        }, 'player/stop-right.png')

        sprite.frames('stop-left', (frame) => {
            let frames = []
            for (let i = 0; i < 11; i++) {
                frames.push(frame.create(32 * i, 0, 32, 32))
            }
            return frames
        }, 'player/stop-left.png')

        sprite.frames('run-left', (frame) => {
            let frames = []
            for (let i = 0; i < 11; i++) {
                frames.push(frame.create(32 * i, 0, 32, 32))
            }
            return frames
        }, 'player/run-left.png')

        sprite.frames('run-right', (frame) => {
            let frames = []
            for (let i = 0; i < 11; i++) {
                frames.push(frame.create(32 * i, 0, 32, 32))
            }
            return frames
        }, 'player/run-right.png')
    },

    load() {
        this.frames()
        data.image(this.name, 40, 40, 32, 32, 'player/stop-right.png')
            .frames('stop-right')
            .initalFrame(0)
            .speed(3)
            .props({ score: 0 })
            .moviment('press', 'w', 'd', 's', 'a')
            .save()

    },

    _addScore() {
        let player = data.find(this.name)
        player.score += 1

    },

    collider(what) {
        collider.set('solid', this.name, what)
    },

    collect(what) {
        collider.set('hover', this.name, what, (player, fruit) => {
            if (fruit.visible) {
                this._addScore()
                hud.addScoreInText()
                fruit.visible = false
                rules.randonPosition('fruit')
                console.log(player.score)
                setTimeout(() => { fruit.visible = true }, 500)
            }
        })
    },

    movimentAction() {
        moviment.actionByKey(this.name, (method) => {
            method.keydown.right = () => { data.alterSprite(this.name, 'run-right') }
            method.keyup.right = () => { data.alterSprite(this.name, 'stop-right') }
            method.keydown.left = () => { data.alterSprite(this.name, 'run-left') }
            method.keyup.left = () => { data.alterSprite(this.name, 'stop-left') }
        })
    }


}