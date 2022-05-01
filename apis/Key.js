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

    keyboard(eventAndKey, callback) {
        let datas = eventAndKey.split('.')
        let event = datas[0]
        let key = datas[1]
        datas = { event, key, keyPress: false, callback }
        this.eventsKeys.set(key, datas)
    }

    callFunctionOfKey() {
        if(this.eventsKeys !== []) {
            this.eventsKeys.forEach((obj) => {
                if(obj.keyPress) {
                    obj.callback()
                }
            })
        }
    }
}