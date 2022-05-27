class Data {
    #datas = {}
    #methodToTheDraw = { rect: this.rect, text: this.text, image: this.image }

    /**
     * @param {String} name 
     * @param {obj} datas 
     **/

    #setDatas(name, datas) {
        if (isString(name) && isObj(datas) && !isArray(datas))
            this.#datas[name] = datas
    }

    /**
     * @param {string} name 
     * @returns 
     **/

    find(name) {
        let currentDatas = this.#datas[name]
        if (isUndefined(currentDatas)) {
            throw "This name -> " + name + " <- not existent for find datas"
        } else {
            return currentDatas
        }
    }

    /**
     * @param {string} name 
     * @param {Function} callback 
     */

    group(name, callback) {
        if (isFunc(callback)) {
            let datasArray = callback(this.#methodToTheDraw)
            this.#setDatas(name, datasArray)
        }
    }

    update(name, callback) {
        let datas = this.find(name)
        if (isFunc(callback)) {
            callback(datas)
        }
    }

    /**
     * 
     * @param {String} name 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
     * @param {String} color 
     * @param {Boolean} fill 
     * @returns
     */

    rect(name, x, y, width, height, color = 'black', fill = true) {
        let datas = { name, x, y, width, height, color, fill, visible: true, type: 'rect' }
        if (isString(name)) {
            this.#setDatas(name, datas)
        } else if (isNull(name)) {
            return datas
        } else {
            throw 'the Value passed to the name don`t is from type String or Null'
        }
    }

    /**
    * 
    * @param {String} name 
    * @param {Number} x 
    * @param {Number} y 
    * @param {Number} width 
    * @param {Number} height 
    * @param {String} src 
    * @returns
    */

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

    /**
     * 
     * @param {String} name 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} fontSize 
     * @param {String} text 
     * @param {String} color 
     * @param {String} fontFamily 
     * @param {Boolean} fill 
     * @returns 
     */

    text(name, x, y, fontSize, text, color = 'black', fontFamily = 'Arial', fill = true) {
        let datas = { name, x, y, color, fontSize, fontFamily, text, type: 'text', visible: true, fill }

        if (isString(name)) {
            this.setDatas(name, datas)
        } else {
            return datas
        }
    }

}