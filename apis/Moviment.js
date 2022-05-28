class Moviment {
    #controllers = {}

    #getController() {
        return this.#controllers
    }

    #getControllerByName(name) {
        return this.#controllers[name]
    }

    #setControllersByName(name, datas) {
        this.#controllers[name] = datas
    }

    /**
     * call method of class by name 
     * @param {string} methodName 
     * @param {string} datasName 
     */

    #callMethodByName(methodName, datasName) {
        eval('this.#' + methodName + '(datasName)')
    }

    #propertiesMoviments() {
        return {
            keydown: false,

            movimentState: {
                top: false,
                left: false,
                down: false,
                right: false
            },

            movimentActio: {
                top: (datas) => {
                    datas.y -= datas.speedY
                },
                left: (datas) => {
                    datas.x -= datas.speedX
                },
                down: (datas) => {
                    datas.y += datas.speedY
                },
                right: (datas) => {
                    datas.x += datas.speedX
                },
            }
        }
    }

    #click() {
        for (const nameController in this.#getController()) {
            let datas = this.#getControllerByName(nameController)
            let moviment = datas.moviment
            key.create('moviment_click')
                .keydown((event) => {
                    for (const keyName in moviment.movimentKeys) {
                        let key = moviment.movimentKeys[keyName]
                        if (event.key === key && !moviment.keydown) {
                            moviment.movimentActio[keyName](datas)
                            moviment.keydown = true
                        }
                    }
                })
                .keyup(() => {
                    moviment.keydown = false
                })
                .save()
        }
    }

    #press() {
        for (const nameController in this.#getController()) {
            let constroller = this.#getControllerByName(nameController)
            let movimentKeys = constroller.movimentKeys
            key.create('moviment_press')
                .keydown((event) => {
                    for (const nameMethod in movimentKeys) {
                        if (event.key === movimentKeys[nameMethod]) {
                            moviment.movimentState[nameMethod] = true
                        }
                    }
                })
                .keyup((event) => {
                    for (const nameMethod in movimentKeys) {
                        if (event.key === movimentKeys[nameMethod]) {
                            moviment.movimentState[nameMethod] = false
                        }
                    }
                })
                .save()
        }
    }

    set(datas) {
        datas.moviment = { ...datas.moviment, ...this.#propertiesMoviments() }
        this.#setControllersByName(datas.name, datas)
        this.#callMethodByName(datas.moviment.typeMoviment)
    }

}