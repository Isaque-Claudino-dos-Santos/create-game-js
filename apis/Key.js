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

    mouse(dataName, callback) {
        let datas = data.find(dataName)
        if (isFunc(callback)) {
            CANVAS.addEventListener('click', (event) => {
                let mouse = { x: event.offsetX, y: event.offsetY }

                if (mouse.x > datas.x &&
                    mouse.x < datas.x + datas.width &&
                    mouse.y > datas.y &&
                    datas.y < datas.y + datas.height) {
                    callback(datas, event)
                }
            })
        }
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