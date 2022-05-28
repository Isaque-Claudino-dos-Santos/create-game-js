class Key {
    #keys = {}

    #getKeys() {
        return this.#keys
    }

    #setKeysByName(name, datas) {
        this.#keys[name] = datas
    }

    #currentKey = {}

    #getCurrentKey() {
        return this.#currentKey
    }

    #setCurrentKey(datas) {
        this.#currentKey = datas
    }

    #concat(currentDatas, newDatas) {
        return { ...currentDatas, ...newDatas }
    }

    #callMethodEventListener() {
        for (const keyName in this.#getKeys()) {
            let key = this.#getKeys()[keyName]
            if (key.activeKey) {
                addEventListener('keydown', (event) => {
                    if (key.keydown)
                        key.keydown(event)
                })

                addEventListener('keyup', (event) => {
                    if (key.keyup)
                        key.keyup(event)
                })
            }

        }
    }

    create(name) {
        this.#setCurrentKey({ name, activeKey: true })
        return this
    }

    keydown(callback) {
        let currentKey = this.#getCurrentKey()
        this.#setCurrentKey(this.#concat(currentKey, { keydown: callback }))
        return this
    }

    keyup(callback) {
        let currentKey = this.#getCurrentKey()
        this.#setCurrentKey(this.#concat(currentKey, { keyup: callback }))
        return this
    }

    save() {
        let currentKey = this.#getCurrentKey()
        this.#setKeysByName(currentKey.name, currentKey)
        this.#callMethodEventListener()
    }
}