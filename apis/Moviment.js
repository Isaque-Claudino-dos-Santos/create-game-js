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

    #click() {
        let moviment = {
            keydown: false,

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

        for (const nameController in this.#getController()) {
            let constroller = this.#getControllerByName(nameController)
            let movimentKeys = constroller.movimentKeys

            key.create('moviment_click')
                .keydown((event) => {
                    if (!moviment.keydown) {
                        for (const nameMethod in movimentKeys) {
                            if (event.key === movimentKeys[nameMethod]) {
                                moviment[nameMethod](constroller)
                            }
                        }
                        moviment.keydown = true
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
            key.create('moviment_press')
                .keydown((event) => { })
                .keyup((event) => { })
                .save()
        }
    }

    set(datas) {
        this.#setControllersByName(datas.name, datas)
        this.#callMethodByName(datas.typeMoviment)
    }

}