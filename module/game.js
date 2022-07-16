function game() {
    const comands = {
        all: 'all'
    }

    this.ALL = comands.all

    this.CANVAS = document.querySelector('#canvas-main')
    this.CONTEXT = CANVAS.getContext('2d')
    this.WIDTH = CANVAS.width
    this.HEIGHT = CANVAS.height

    this.objects = {}
    this.eventsKeyboard = {}

    // Object functions
    this.object = {
        current: {},

        create(name, props = {}) {
            this.current[name] = { name, ...props }
            this.store()
        },

        store() {
            objects = { ...objects, ...this.current }
            this.current = {}
        },

        find(name) {
            let obj = objects[name]
            if (!obj)
                throw 'Object with name ' + name + ' not exit'

            return obj
        },

        update(name, props) {
            let obj = this.find(name)
            obj = { ...obj, ...props }
            objects[name] = obj
        }
    }

    this.draw = {
        rect_fill: (objName) => {
            let obj = object.find(objName)
            CONTEXT.fillStyle = obj.color
            CONTEXT.fillRect(obj.x, obj.y, obj.width, obj.height)
            CONTEXT.fill()
        },

        rect_stroke: (objName) => {
            let obj = object.find(objName)
            CONTEXT.strokeStyle = obj.color
            CONTEXT.strokeRect(obj.x, obj.y, obj.width, obj.height)
            CONTEXT.stroke()
        },

        render(methodToDraw, objNames) {
            switch (objNames) {
                case 'all':
                    objNames = []
                    for (const name in objects) {
                        objNames.push(name)
                    }
                    break
                default:
            }
            if (Array.isArray(objNames)) {
                objNames.forEach(name => {
                    draw[methodToDraw](name)
                });
            }
        }
    }

    this.key = {
        click(key) {
            let objKey = eventsKeyboard[key]

            if (objKey.keydown.on) {
                objKey.keydown.enable = false
                objKey.keydown.on = false
                return true
            } else if (objKey.keyup.on) {
                objKey.keydown.enable = true
                return false
            }

        },

        checkDown(key) {
            let objKey = eventsKeyboard[key]
            if (objKey.keydown.on) {
                return true
            } else {
                return false
            }
        },

        checkUp(key) {
            let objKey = eventsKeyboard[key]
            if (objKey.keyup.on) {
                return true
            } else {
                return false
            }
        },

        uses(keys) {
            keys.forEach(key => {
                properties = {
                    key: key,
                    keyup: { on: true, enable: true },
                    keydown: { on: false, enable: true }
                }
                eventsKeyboard = { ...eventsKeyboard, [key]: properties }
            })
        }
    }

    this.collider = {
        add(objName) {
            let { x, y, width, height } = object.find(objName)
            let sensor = { x, y, width, height }

            let collider = { sensor }

            object.update(objName, {
                collider
            })
        },

        solid: (r1, r2) => {

        }
    }

    this.update = () => { }
    this.render = () => { }


    this.loop = () => {
        update()
        render()
        requestAnimationFrame(loop, CANVAS)
    }


    // Global functions 

    this.dd = (txt, die = true) => {
        console.log(txt)
        if (die) throw 'dd stop ON'
    }

    this.ddJson = (txt, die = true) => {
        document.querySelector('#ddView').innerHTML = `<pre>${JSON.stringify(txt, null, '\t')}</pre>`
        if (die) throw 'ddJson stop ON'
    }

    return {
        callEventListeners() {
            addEventListener('keydown', (event) => {
                let key = event.key
                let ev = eventsKeyboard[key]

                if (ev !== undefined) {
                    if (!ev.keydown.on && ev.keydown.enable) {
                        ev.keyup.on = false
                        ev.keydown.on = true
                    }
                }
            })

            addEventListener('keyup', (event) => {
                let key = event.key
                let ev = eventsKeyboard[key]

                if (ev !== undefined) {
                    if (!ev.keyup.on && ev.keyup.enable) {
                        ev.keydown.on = false
                        ev.keyup.on = true
                    }
                }
            })
        },

        boot() {
            this.callEventListeners()
        },
    }
}

game()
    .boot()










