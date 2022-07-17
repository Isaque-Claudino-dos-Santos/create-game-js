function game() {
    const comands = {
        all: 'all',
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
            objects[name] = { ...objects[name], ...props }
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

        clearAllCanvas: () => {
            CONTEXT.clearRect(0, 0, WIDTH, HEIGHT)
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
        objMeasurements(datas) {
            let halfWidth = datas.width / 2
            let halfHeight = datas.height / 2
            let centerX = datas.x + halfWidth
            let centerY = datas.y + halfHeight
            return { halfWidth, halfHeight, centerX, centerY }
        },

        colliderMeasurements: (r1, r2) => {
            r1 = r1.collider.measurements
            r2 = r2.collider.measurements
            let sumHalfWidth = r1.halfWidth + r2.halfWidth
            let sumHalfHeight = r1.halfHeight + r2.halfHeight
            let catX = r1.centerX - r2.centerX
            let catY = r1.centerY - r2.centerY
            return {
                catX,
                catY,
                sumHalfWidth,
                sumHalfHeight,
                overlapX: sumHalfWidth - Math.abs(catX),
                overlapY: sumHalfHeight - Math.abs(catY)

            }
        },

        add(objName) {
            let obj = object.find(objName)
            let med = this.objMeasurements(obj)
            let collider = {
                measurements: med,
                sensors: {
                    left: false,
                    top: false,
                    down: false,
                    right: false,
                    any: false
                }
            }
            object.update(objName, { collider })
        },

        call(elementCollider, objName1, objName2) {
            let obj1 = object.find(objName1)
            let obj2 = object.find(objName2)
            let measurements = this.colliderMeasurements(obj1, obj2)

            this[elementCollider](measurements, obj1, obj2)
        },

        rect: (measure, r1, r2) => {
            if (Math.abs(measure.catX) < measure.sumHalfWidth &&
                Math.abs(measure.catY) < measure.sumHalfHeight) {
                if (measure.overlapX >= measure.overlapY) {
                    if (measure.catY > 0) {
                        r1.collider.sensors.down = true
                        r1.collider.sensors.any = true
                        r2.collider.sensors.down = true
                        r2.collider.sensors.any = true
                    } else {
                        r1.collider.sensors.top = true
                        r1.collider.sensors.any = true
                        r2.collider.sensors.top = true
                        r2.collider.sensors.any = true
                    }
                } else {
                    if (measure.catX > 0) {
                        r1.collider.sensors.right = true
                        r1.collider.sensors.any = true
                        r2.collider.sensors.right = true
                        r2.collider.sensors.any = true
                    } else {
                        r1.collider.sensors.left = true
                        r1.collider.sensors.any = true
                        r2.collider.sensors.left = true
                        r2.collider.sensors.any = true
                    }
                }
            }
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












