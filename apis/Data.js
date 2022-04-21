class Data {
    static allDatas = new Map()
    /**
     * 
     * @param {String} name 
     */
    constructor(name) {
        this.name = name;
        this.isGroup = false
        this.dataGroup = new Map()
    }

    /**
     * 
     * @param {Function} callback 
     */

    group(callback) {
        this.isGroup = true
        callback(this.dataGroup, this)
        Data.allDatas.set(this.name, this.dataGroup)
    }

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
     * @param {String} color 
     * @returns array || this
     */

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

    /**
     * 
     * @param {String} src 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
     * @returns array || this
     */

    image(src, x, y, width, height) {
        let image = new Image()
        image.src = src
        let datas = {
            src: image, x, y, width, height, type: 'image', visible: true, speedX: 1,
            speedY: 1,
        }

        return this.checkIsGroupDatas(datas)
    }

    /**
     * 
     * @param {String} text 
     * @param {Number} size 
     * @param {String} fontType 
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} color 
     * @returns array || this
     */

    text(text, size, fontType, x, y, color = 'black') {
        let datas = {
            x, y,
            text,
            font: size + 'px ' + fontType,
            type: 'text',
            visible: true,
            color
        }

        return this.checkIsGroupDatas(datas)
    }

    checkIsGroupDatas(datas) {
        if (!this.isGroup) {
            Data.allDatas.set(this.name, datas)
            return this
        } else {
            return datas;
        }
    }

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     */

    speed(x, y) {
        Data.update(this.name, (datas) => {
            datas.speedX = x
            datas.speedY = y
        })
    }

    /**
     * 
     * @param {String} name 
     * @returns Object
     */

    static find(name) {
        return Data.allDatas.get(name)
    }

    /**
     * 
     * @param {String} name 
     * @param {Function} callback 
     */

    static update(name, callback) {
        let datas = Data.find(name)
        callback(datas)
    }
}