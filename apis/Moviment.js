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

    /**
     * properties default of moviment
     * @returns 
     */

    #propertiesMoviments() {
        return {
            keydown: false,

            movimentState: {
                top: false,
                left: false,
                down: false,
                right: false
            },

            movimentCallback: {
                keyup: {
                    top: () => { },
                    left: () => { },
                    down: () => { },
                    right: () => { }
                },
                keydown: {
                    top: () => { },
                    left: () => { },
                    down: () => { },
                    right: () => { }
                }
            },

            movimentActio: {
                top: (datas) => {
                    datas.y -= datas.moviment.speedY
                },
                left: (datas) => {
                    datas.x -= datas.moviment.speedX
                },
                down: (datas) => {
                    datas.y += datas.moviment.speedY
                },
                right: (datas) => {
                    datas.x += datas.moviment.speedX
                },
            }
        }
    }

    //actionByKey
    actionByKey(nameData, callback) {
        let objCallback = data.find(nameData).moviment.movimentCallback
        let newData = callback(objCallback)
        objCallback = newData
    }

    /**
     * apply moviment for click
     */

    #click() {
        for (const nameController in this.#getController()) {
            let datas = this.#getControllerByName(nameController)
            let moviment = datas.moviment
            if (moviment.typeMoviment === 'click') {
                key.create('moviment_click')
                    .keydown((event) => {
                        for (const keyName in moviment.movimentKeys) {
                            let key = moviment.movimentKeys[keyName]
                            if (event.key === key && !moviment.keydown) {
                                moviment.movimentCallback['keydown'][keyName]()
                                moviment.movimentActio[keyName](datas)
                                moviment.keydown = true
                            }
                        }
                    })
                    .keyup((event) => {
                        for (const keyName in moviment.movimentKeys) {
                            let key = moviment.movimentKeys[keyName]
                            if (event.key === key)
                                moviment.movimentCallback['keyup'][keyName]()
                        }
                        moviment.keydown = false
                    })
                    .save()
            }
        }
    }

    /**
     * Apply moviment while press
     */

    #press() {
        for (const nameController in this.#getController()) {
            let datas = this.#getControllerByName(nameController)
            let moviment = datas.moviment
            if (moviment.typeMoviment === 'press') {
                key.create('moviment_press')
                    .keydown((event) => {
                        for (const stateKey in moviment.movimentState) {
                            if (event.key === moviment.movimentKeys[stateKey]) {
                                moviment.movimentCallback['keydown'][stateKey]()
                                moviment.movimentState[stateKey] = true
                            }
                        }
                    })
                    .keyup((event) => {
                        for (const stateKey in moviment.movimentState) {
                            if (event.key === moviment.movimentKeys[stateKey]) {
                                moviment.movimentCallback['keyup'][stateKey]()
                                moviment.movimentState[stateKey] = false
                            }
                        }
                    })
                    .save()
            }
        }
    }

    /**
     * stay looped verification state of moviment
     */

    verificationMovimentStateToApplyMoviment() {
        let constrollers = this.#getController()
        if (!isUndefined(constrollers)) {
            for (const nameController in constrollers) {
                let datas = this.#getControllerByName(nameController)
                let moviment = datas.moviment
                for (const stateKey in moviment.movimentState) {
                    let state = moviment.movimentState[stateKey]
                    if (state) {
                        moviment.movimentActio[stateKey](datas)
                    }
                }
            }
        }
    }

    /**
     * set new moviment of the data
     * @param {object} datas 
     */

    set(datas) {
        datas.moviment = { ...datas.moviment, ...this.#propertiesMoviments() }
        this.#setControllersByName(datas.name, datas)
        this.#callMethodByName(datas.moviment.typeMoviment)
    }

}