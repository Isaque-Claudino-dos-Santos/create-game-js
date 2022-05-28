class Screen {

    #screens = {}

    #getScreensbyName(name) {
        return this.#screens[name]
    }

    #setScreensWithName(screenName, datas) {
        this.#screens[screenName] = datas
    }

    #currentScreen = {}

    #setCurrentScreen(datas) {
        this.#currentScreen = datas
    }

    #getCurrentScreen() {
        return this.#currentScreen
    }

    /**
     * make the return data for the screen
     * @param {string} dataName 
     * @returns 
     */

    #makeReturnDataToScreen(dataName) {
        if (isString(dataName)) {
            return data.find(dataName)
        }

        if (isArray(dataName)) {
            return dataName
        }
    }

    /**
     * Create screen data
     * @param {String} screenName 
     * @param {variant} dataName 
     */

    create(screenName, dataName) {
        if (isString(screenName)) {
            this.#setCurrentScreen({ name: screenName, datas: this.#makeReturnDataToScreen(dataName), visible: false })
        }

        return this
    }

    // Actions of Datas.

    /**
     * Save current screen to the array datas from class Screen
     * - Use ever that finished passing properties to current screen
     */
    save() {
        let currentScreen = this.#getCurrentScreen()
        this.#setScreensWithName(currentScreen.name, currentScreen)
    }

    /**
     * Return current screen
     * - Use ever that finished passing properties to current screen
     */

    return() {
        let currentScreen = this.#getCurrentScreen()
        return currentScreen
    }

    find(screenName) {
        let screenData = this.#getScreensbyName(screenName)
        if (isUndefined(screenData)) {
            throw "This name -> " + screenName + " <- not existent for find screen"
        } else {
            return screenData
        }
    }


    /*
    visible(screenName, isVisible) {
        if (isString(screenName) && isBool(isVisible)) {
            let screen = this.find(screenName)
            screen.screenVisible = isVisible
        }
    }

    visibleOffAll(anyName) {
        let screenNames = Object.keys(this.screens)
        screenNames.forEach((name) => {
            if (name !== anyName) {
                this.find(name).screenVisible = false
                this.find(anyName).screenVisible = true
            }
        })
    }

   

    mod(screenName, callbakc) {
        if (isString(screenName) && isFunc(callbakc)) {
            let screen = this.screens[screenName]
            callbakc(screen)
        }
    }
    */
}