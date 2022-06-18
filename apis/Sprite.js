class Sprite {

    #sprites = {}

    #getSprites() {
        return this.#sprites
    }

    #setSprites(datas, keyName = null) {
        if (isNull(keyName)) {
            this.#sprites = datas
        } else {
            this.#sprites[keyName] = datas
        }
    }

    find(name) {
        return this.#sprites[name]
    }

    create(srcX, srcY, srcWith, srcHeight) {
        return { x: srcX, y: srcY, width: srcWith, height: srcHeight }
    }

    frames(name, callback, src) {
        //set frames objects
        let frames = {}
        if (isFunc(callback) && isString(name)) {
            frames = callback({ create: this.create })
            this.#setSprites({ frames, src }, name)
        }
    }


}