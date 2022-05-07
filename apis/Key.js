class Key {
    constructor() {
        this.eventsKeys = new Map()

        addEventListener('keydown', (eventKeyBoard) => {
            let key = eventKeyBoard.key
            let datasOfCurrentkey = this.eventsKeys.get(key)
            if (datasOfCurrentkey !== undefined) {
                datasOfCurrentkey.keyPress = true
            }
        })

        addEventListener('keyup', (eventKeyBoard) => {
            let key = eventKeyBoard.key
            let datasOfCurrentkey = this.eventsKeys.get(key)
            if (datasOfCurrentkey !== undefined) {
                datasOfCurrentkey.keyPress = false
            }
        })
    }

    find(name) {
        return this.eventsKeys.get(name)
    }

    keyboard(key, callback) {
        let datas = { key, keyPress: false, callback, constant: true }
        this.eventsKeys.set(key, datas)
    }

    callFunctionOfKey() {
        if (this.eventsKeys !== []) {
            this.eventsKeys.forEach((obj) => {
                if (obj.keyPress && obj.constant) {
                    obj.callback(obj)
                }
            })
        }
    }
}