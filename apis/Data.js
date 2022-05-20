class Data {
    constructor() {
        this.datas = []
    }

    setDatas(name, datas) {
        this.datas[name] = datas
    }

    concatDatas(name, newData) {
        let currentData = this.find(name)
        let datas = { ...newData, ...currentData }
        this.datas[name] = datas
    }

    group(name, callback) {
        if (isFunc(callback)) {
            let datasArray = callback(this)
            this.setDatas(name, datasArray)
        }
    }

    find(name) {
        let data = this.datas[name]
        if (isUndefined(data)) {
            throw "This name -> " + name + " <- not existent for find datas"
        } else {
            return data
        }
    }

    update(name, callback) {
        let datas = this.find(name)
        if (isFunc(callback)) {
            callback(datas)
        }
    }

    speed(name, x, y) {
        y = isUndefined(y) ? x : y
        let speeds = { speedX: x, speedY: y }
        this.concatDatas(name, speeds)
    }

    rect(name, x, y, width, height, color = 'black', fill = true) {
        let datas = { name, x, y, width, height, color, fill, visible: true, type: 'rect' }
        if (isString(name)) {
            this.setDatas(name, datas)
        } else {
            return datas
        }
    }

    image(name, x, y, width, height, src) {
        let path = './resources/images/'
        let image = new Image()
        image.src = path + src
        let datas = { name, x, y, width, height, src: image, visible: true, type: 'image' }

        if (isString(name)) {
            this.setDatas(name, datas)
        } else {
            return datas
        }
    }

    text(name, x, y, fontSize, text, color = 'black', fontFamile = 'Arial', fill = true) {
        let datas = { name, x, y, color, font: fontSize + 'px ' + fontFamile, text, type: 'text', visible: true, fill }

        if (isString(name)) {
            this.setDatas(name, datas)
        } else {
            return datas
        }
    }

}