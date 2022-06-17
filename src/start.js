function start() {
    sprite.frames('slime', (f) => {
        return {
            left: f.create(0, 0, 16, 16),
            right: f.create(16, 0, 16, 16),
            stop: f.create(0, 16, 16, 16),
            jump: f.create(16, 16, 16, 16)
        }
    })


    data.image('player', 30, 30, 50, 50, 'slime.png')
        .frames('slime')
        .source('stop')
        .speed(5)
        .moviment('press', 'w', 'd', 's', 'a')
        .save()

    moviment.actionByKey('player', (mv) => {
        mv.keydown.left = () => { sprite.alter('player', 'left') }
        mv.keydown.right = () => { sprite.alter('player', 'right') }
        mv.keyup.left = () => { sprite.alter('player', 'stop') }
        mv.keyup.right = () => { sprite.alter('player', 'stop') }
    })

    console.log(data.find('player'))
}