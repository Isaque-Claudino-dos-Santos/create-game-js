function game() {
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
            if (Array.isArray(objNames)) {
                objNames.forEach(name => {
                    draw[methodToDraw](name)
                });
            }
        }
    }

    this.key = {
        nameObj: '',

        boot(nameobj) {
            this.nameObj = nameobj
            object.update(nameobj, { keyboard: {} })
            return this
        },

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

        add(keys) {
            keys.forEach(key => {
                properties = {
                    nameObject: this.nameObj,
                    key: key,
                    keyup: { on: true, enable: true },
                    keydown: { on: false, enable: true }
                }
                object.find(this.nameObj).keyboard = { ...object.find(this.nameObj).keyboard, [key]: properties }
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
        boot() {
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
        }
    }
}

game()
    .boot()

object.create('player', { x: 60, y: 10, width: 30, height: 30, color: 'black' })
object.create('melancia', { x: 10, y: 10, width: 30, height: 30, color: 'green' })


key.boot('player').add(['w', 'd', 's', 'a'])


function update() {

}



function render() {
    draw.render('rect_fill', ['player'])
    ddJson(object.find('player'), 0)
}

function loop() {
    update()
    render()
    requestAnimationFrame(loop, CANVAS)
}

loop()











