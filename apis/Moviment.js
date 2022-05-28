class Moviment {
    #controllers = {}

    #getControllerByName(name) {
        return this.#controllers[name]
    }

    #setControllersWithName(name, datas) {
        this.#controllers[name] = datas
    }

    /**
     * call method of class by name 
     * @param {string} methodName 
     * @param {string} datasName 
     */

    #callMethodByName(methodName, datasName) {
        eval('this.#' + methodName + '_moviment(datasName)')
    }

    /**
     * aplay moviment constant of the press key
     * @param {string} dataName 
     */

    #press_moviment(dataName) {
        let datas = this.#getControllerByName(dataName)
        let movimentKeys = datas.movimentKeys
        key.keyboard(movimentKeys.top, () => {
            datas.y -= datas.speedY
            datas.stopped = false
        })

        key.keyboard(movimentKeys.right, () => {
            datas.x += datas.speedX
            datas.stopped = false
        })

        key.keyboard(movimentKeys.down, () => {
            datas.y += datas.speedY
            datas.stopped = false
        })

        key.keyboard(movimentKeys.left, () => {
            datas.x -= datas.speedX
            datas.stopped = false
        })
    }

    /**
     * aplay moviment for click
     * @param {string} dataName 
     */

    #click_moviment(dataName) {
        let datas = this.#getControllerByName(dataName)
        let movimentKeys = datas.movimentKeys

        let moviment = {
            on: true,

            top: () => {
                datas.y -= datas.speedY
                datas.stopped = false
            },
            left: () => {
                datas.x -= datas.speedX
                datas.stopped = false
            },
            right: () => {
                datas.x += datas.speedX
                datas.stopped = false
            },
            down: () => {
                datas.y += datas.speedY
                datas.stopped = false
            }
        }

        addEventListener('keydown', (e) => {
            for (const methodName in movimentKeys) {
                let key = movimentKeys[methodName]
                if (e.key === key && !isUndefined(key)) {
                    let method = moviment[methodName]
                    if (!isUndefined(method)) {
                        if (moviment.on) {
                            method()
                            moviment.on = false
                        }
                    }
                }
            }
        })

        addEventListener('keyup', (e) => {
            moviment.on = true
        })
    }

    /**
    * Define set datas in constrollers
    * @param {object} datas 
    */

    set(datas) {
        this.#setControllersWithName(datas.name, datas)
        this.#callMethodByName(datas.typeMoviment, datas.name)
    }

    mod(constrollerName, callback) {
        if (isFunc(callback) && isString(constrollerName)) {
            callback(this.#getControllerByName(constrollerName))
        }
    }

}