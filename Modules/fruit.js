export default {
    name: 'fruit',
    type: 'image',

    load() {
        data.image(this.name, 100, 100, 16, 20, 'gold-apple.png')
            .save()
    },

}