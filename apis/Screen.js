class Screen {

    #screens = {}

    #getScreens() {
        return this.#screens[name]
    }

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
        this.#setCurrentScreen(undefined)
    }

    /**
     * Return current screen
     * - Use ever that finished passing properties to current screen
     */

    return() {
        let currentScreen = this.#getCurrentScreen()
        return currentScreen
    }

    /**
     * Find screen by name
     * @param {string} screenName 
     * @returns 
     */

    find(screenName) {
        let screenData = this.#getScreensbyName(screenName)
        if (isUndefined(screenData)) {
            throw "This name -> " + screenName + " <- not existent for find screen"
        } else {
            return screenData
        }
    }

    /**
     * Define screen is visible
     * @param {boolean} isVisible 
     * @param {string} screenName 
     * @returns 
     */

    visible(isVisible, screenName = undefined) {
        if (isUndefined(this.#currentScreen) && isUndefined(screenName)) {
            throw 'The metodo visible don`t have reference for use, pass screen name how param'
        }
        if (isBool(isVisible)) {
            let screen = isUndefined(screenName) ? this.#getCurrentScreen() : this.find(screenName)
            screen.visible = isVisible
        }
        return this
    }

    /**
     * pass visible off for all screnn any the of param
     * @param {string} anyScreenName 
     */

    visibleOff(anyScreenName) {
        let screens = this.#getScreens()
        for (const screenName in screens) {
            if (screenName !== anyScreenName) {
                let screen = screens[screenName]
                screen.visible = false
            }
        }
    }
}