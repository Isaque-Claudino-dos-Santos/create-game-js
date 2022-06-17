import hud from './hud.js'
import rules from './rules.js'

export default {
    name: 'player',
    type: 'image',

    frames() {
        sprite.frames('stop', (frame) => {
            let frames = []
            for (let i = 0; i < 11; i++) {
                frames.push(frame.create(32 * i, 0, 32, 32))
            }
            return frames
        })
    },

    load() {
        this.frames()
        data.image(this.name, 40, 40, 32, 32, 'player/stop.png')
            .frames('stop')
            .initalFrame(0)
            .speed(5)
            .props({ score: 0 })
            .moviment('press', 'w', 'd', 's', 'a')
            .save()

    },

    _addScore() {
        let player = data.find(this.name)
        player.score += 1
        
    },

    collect(what) {
        collider.set('hover', this.name, what, (player, fruit) => {
            if (fruit.visible) {
                this._addScore()
                hud.addScore()
                fruit.visible = false
                rules.randonPosition('fruit')
                console.log(player.score)
                setTimeout(() => { fruit.visible = true }, 500)
            }
        })
    }
}