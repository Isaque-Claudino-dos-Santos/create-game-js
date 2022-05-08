class Data {
    constructor() {
        this.datas = new Map()
    }

    find(name) {
        let data = this.datas.get(name)
        if (data == undefined) {
            throw "This name -> " + name + " <- not existent for find datas"
        } else {
            return data
        }
    }

    update(name, newData) {
        let currentData = this.find(name)
        this.datas.set(name, { ...currentData, ...newData })
    }

    speed(x, y) {
        y = y == undefined ? x : y
        return { speedX: x, speedY: y }
    }

    rect(name, x, y, width, height, color = 'black', fill = true) {
        this.datas.set(name, { x, y, width, height, color, fill, visible: true, type: 'rect' })
    }

    image(name, x, y, width, height, src) {
        let path = './resources/images/'
        let image = new Image()
        image.src = path + src
        this.datas.set(name, { x, y, width, height, src: image, visible: true, type: 'image' })
    }

    text(name, x, y, fontSize, text, color = 'black', fontFamile = 'Arial', fill = true) {
        this.datas.set(name, { x, y, color, font: fontSize + 'px ' + fontFamile, text, type: 'text', visible: true, fill })
    }

}