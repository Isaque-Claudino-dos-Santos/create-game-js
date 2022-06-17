export default {
    name: 'hud',
    type: 'screen',

    header() {
        data.group(this.name, (d) => {
            let hudSize = 30
            return [
                d.rect('top', 0, 0, WIDTH, hudSize).return(),
                d.text('score', 10, 5, 20, 'SCORE: 0', 'white').return(),
            ]
        })
    },

    addScore() {
        data.update(this.name, (datas) => {
            let playerScore = data.find('player').score
            datas[1].text = 'SCORE: ' + playerScore
        })
    },

    

    load() {
        this.header()
        screen.create(this.name, this.name).save()
        screen.visible(true, 'hud')
    }


}