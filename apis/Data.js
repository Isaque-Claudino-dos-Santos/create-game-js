class Data {
    #datas = {}

    /**
     * @param {String} name 
     * @param {obj} datas 
     **/

    #setDatasWithName(name, datas) {
        if (isString(name) && isObj(datas))
            this.#datas[name] = datas
    }

    #currentDatas = {}


    #getCurrentDatas() {
        return this.#currentDatas
    }

    #setCurrentDatas(datas) {
        this.#currentDatas = datas
    }

    #setNewPropertiesInCurrentData(newData) {
        let currentDatas = this.#getCurrentDatas()
        let newCurrentDatas = this.#concat(currentDatas, newData)
        this.#setCurrentDatas(newCurrentDatas)
    }


    //Methods for manipulate the datas

    #concat(currentData, newData) {
        return { ...currentData, ...newData }
    }

    /**
     * Find a data by name 
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
     * Create datas group.
     * - Your callback must returned a array.
     * @param {string} name 
     * @param {Function} callback 
     */

    group(name, callback) {
        if (isFunc(callback)) {
            let datasArray = callback(this)
            this.#setDatasWithName(name, datasArray)
        }
    }

    /**
     * Use callback for modify a data
     * @param {String} name 
     * @param {Function} callback 
     */

    update(name, callback) {
        let datas = this.find(name)
        if (isFunc(callback)) {
            callback(datas)
        }
    }

    // Actions of Datas.

    /**
     * Save current data to the array datas from class Data
     * - Use ever that finished passing properties to current data
     */
    save() {
        let currentDatas = this.#getCurrentDatas()
        this.#setDatasWithName(currentDatas.name, currentDatas)
    }

    /**
     * Return current data
     * - Use ever that finished passing properties to current data
     */

    return() {
        let currentDatas = this.#getCurrentDatas()
        return currentDatas
    }

    //Method that set properties for the dados 

    /**
     * Add new properties in current data
     * @param {Object} newDatasInObj 
     */

    props(newDatasInObj) {
        if (isObj(newDatasInObj) && !isArray(newDatasInObj)) {
            this.#setNewPropertiesInCurrentData(newDatasInObj)
            return this
        } else {
            throw 'The param passed don`t is Object'
        }
    }

    /**
     * Add propertie speed in to currernt datas
     * @param {Number} x 
     * @param {Number} y 
     */
    speed(x, y = undefined) {
        y = y ? y : x
        let speeds = { speedX: x, speedY: y }
        this.#setNewPropertiesInCurrentData({ moviment: speeds })
        return this
    }

    moviment(typeMoviment, top, right, down, left) {
        let movimentKeys = { top, right, down, left }
        let stopped = true
        this.#setNewPropertiesInCurrentData({ moviment: { ...this.#getCurrentDatas().moviment, typeMoviment, movimentKeys } })
        moviment.set(this.#getCurrentDatas())
        return this
    }
    //add frames of the current object 
    frames(name) {
        //get sprite obj
        let frames = sprite.find(name)
        //get current obj
        let currentObj = this.#getCurrentDatas()
        //add sprite in current obj
        currentObj.image = { ...currentObj.image, isSrc: true, sprite: { name, frames: frames.frames, src: frames.src } }

        return this
    }

    initalFrame(frameName) {
        let currentObj = this.#getCurrentDatas()
        let frame = sprite.find(currentObj.image.sprite.name).frames[frameName]
        currentObj.image = { ...currentObj.image, sources: frame }
        return this
    }

    alterFrame(nameDataObj, frameKey) {
        let d = this.find(nameDataObj)
        let frame = sprite.find(d.image.sprite.name).frames[frameKey]
        d.image.sources = frame
    }

    alterSprite(dataObj, nameSprite) {
        let frames = sprite.find(nameSprite)
        let obj = this.find(dataObj)
        let newImage = new Image()
        newImage.src = '../resources/images/' + frames.src
        obj.image.img = newImage
        obj.image.sprite = { frames, name: nameSprite }
    }


    // Model datas

    /**
     * Create data type rect
     * @param {String} name 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
     * @param {String} color 
     * @param {Boolean} fill 
     * @param {Boolean} visible
     * @returns
     */

    rect(name, x, y, width, height, color = 'black', fill = true, visible = true) {
        let datas = { name, x, y, width, height, color, visible, fill, type: 'rect' }
        this.#setCurrentDatas(datas)
        return this
    }

    /**
    * Create data type image
    * @param {String} name 
    * @param {Number} x 
    * @param {Number} y 
    * @param {Number} width 
    * @param {Number} height 
    * @param {String} src 
    * @param {Boolean} visible
    * @returns
    */

    image(name, x, y, width, height, src, visible = true) {
        let path = './resources/images/'
        let img = new Image()
        img.src = path + src
        this.#setCurrentDatas({ name, x, y, width, height, visible, image: { img, isSrc: false, sources: {} } })
        return this
    }

    /**
     * Create data type text
     * @param {String} name 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} fontSize 
     * @param {String} text 
     * @param {String} color 
     * @param {String} fontFamily 
     * @param {Boolean} fill 
     * @param {Boolean} visible
     * @returns 
     */

    text(name, x, y, fontSize, text, color = 'black', fontFamily = 'Arial', fill = true, visible = true) {
        let datas = { name, x, y, color, fontSize, fontFamily, text, type: 'text', visible, fill }

        this.#setCurrentDatas(datas)
        return this
    }

}