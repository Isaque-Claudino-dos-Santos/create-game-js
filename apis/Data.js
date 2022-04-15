class Data {
    static allDatas = []

    constructor(name) {
        this.name = name;
        this.isGroup = false
    }

    group(callback) {
        this.isGroup = true
        Data.allDatas[this.name] = callback(this)
    }

    rect(x, y, width, height, color) {
        let datas = {
            x: x,
            y: y,
            width: width,
            height: height,
            speedX: 1,
            speedY: 1,
            color: color,
            type: 'rect',
            visible: true
        }

        return this.checkIsGroupDatas(datas)
    }

    image(src, x, y, width, height) {
        let image = new Image()
        image.src = src
        let datas = {
            src: image, x, y, width, height, type: 'image',visible: true,
        }

        return this.checkIsGroupDatas(datas)
    }

    checkIsGroupDatas(datas) {
        if (!this.isGroup) {
            Data.allDatas[this.name] = datas
            return this
        } else {
            return datas;
        }
    }

    speed(x, y) {
        Data.update(this.name, (datas) => {
            datas.speedX = x
            datas.speedY = y
        })
    }

    static find(name) {
        let data = Data.allDatas[name]
        if (data === undefined) {
            throw 'this name passed -> ' + name + ' <- not existent'
        }
        return data
    }

    static update(name, callback) {
        let datas = Data.find(name)
        callback(datas)
    }
}