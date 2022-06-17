class Sprite {

    #frames = {}
    #getFrames() {
        return this.#frames
    }
    #setFrame(datas, keyName = null) {
        if (isNull(keyName)) {
            this.#frames = datas
        } else {
            this.#frames[keyName] = datas
        }
    }

    find(name) {
        return this.#frames[name]
    }

    create(srcX, srcY, srcWith, srcHeight) {
        return { x: srcX, y: srcY, width: srcWith, height: srcHeight }
    }

    alter(dataObj, frameName) {
        let d = data.find(dataObj)
        d.image.sources = this.find(d.image.sprite.name)[frameName]
    }

    frames(name, callback) {
        //set frames objects
        let frames = {}
        if (isFunc(callback) && isString(name)) {
            frames = callback({ create: this.create })
            this.#setFrame(frames, name)
        }
    }


}