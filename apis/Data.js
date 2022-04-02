class Data {
    static allDatas = []

    constructor(name) {
        this.name = name;
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

        Data.allDatas[this.name] = datas
        return this
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