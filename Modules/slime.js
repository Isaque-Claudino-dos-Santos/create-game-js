export default {
    imageName: 'slime.png',
    typeElement: 'image',
    name: 'slime',

    load() {
        sprite.frames(this.name, (f) => {
            return {
                left: f.create(0, 0, 16, 16),
                right: f.create(16, 0, 16, 16),
                stop: f.create(0, 16, 16, 16),
                jump: f.create(16, 16, 16, 16)
            }
        })


        data.image(this.name, 30, 30, 50, 50, this.imageName)
            .frames('slime')
            .source('stop')
            .speed(5)
            .moviment('press', 'w', 'd', 's', 'a')
            .save()
    },

    movimentActions() {
        moviment.actionByKey(this.name, (mv) => {
            mv.keydown.left = () => { sprite.alter(this.name, 'left') }
            mv.keydown.right = () => { sprite.alter(this.name, 'right') }
            mv.keyup.left = () => { sprite.alter(this.name, 'stop') }
            mv.keyup.right = () => { sprite.alter(this.name, 'stop') }
        })
    },

    render() {
        draw.render(this.typeElement, this.name)
    }

}
