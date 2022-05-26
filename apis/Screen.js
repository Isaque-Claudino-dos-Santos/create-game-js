class Screen {
    constructor() {
        this.screens = {}
    }

    setScreens(screenName, datas) {
        this.screens[screenName] = datas
    }

    create(screenName, dataName) {
        if (isString(screenName)) {
            this.setScreens(screenName, { datas: this.setDatasInScreen(dataName), screenVisible: false })
        }
    }

    setDatasInScreen(dataName) {
        if (isString(dataName)) {
            return data.find(dataName)
        }

        if (isArray(dataName)) {
            return dataName
        }
    }

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

    find(screenName) {
        let screenData = this.screens[screenName]
        if (isUndefined(screenData)) {
            throw "This name -> " + screenName + " <- not existent for find screen"
        } else {
            return screenData
        }
    }

    mod(screenName, callbakc) {
        if (isString(screenName) && isFunc(callbakc)) {
            let screen = this.screens[screenName]
            callbakc(screen)
        }
    }
}