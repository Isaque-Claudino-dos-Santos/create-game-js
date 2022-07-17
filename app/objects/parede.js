export default {
    name: 'parede',
    props: {
        x: 300,
        y: 100,
        width: 30,
        height: 140,
        color: 'black'
    },

    load() {
        object.create(this.name, this.props)
        collider.add(this.name)
    }
}