export default {
    name: 'player',
    props: {
        x: 10,
        y: 10,
        width: 30,
        height: 30,
        color: 'blue',
        speed: { x: 5, y: 5 },
    },

    load() {
        object.create(this.name, this.props)
        collider.add(this.name)
    },

    moviment() {
        let obj = object.find(this.name)

        if (key.checkDown('w')) {
            obj.y -= obj.speed.y
        }

        if (key.checkDown('d')) {
            obj.x += obj.speed.x
        }

        if (key.checkDown('s')) {
            obj.y += obj.speed.y
        }

        if (key.checkDown('a')) {
            obj.x -= obj.speed.x
        }
    }
}