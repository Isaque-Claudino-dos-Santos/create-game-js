class Collider {
    createMeasurementsForCollirder(r1, r2) {
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
    }

    createMeasurementsOfElement(datas) {
        return {
            halfWidth: datas.width / 2,
            halfHeight: datas.height / 2,
            centerX: datas.x + (datas.width / 2),
            centerY: datas.y + (datas.height / 2)
        }
    }

    set(type, nameCollider, nameBlocker, callback) {
        let collider = data.find(nameCollider)
        let blocker = data.find(nameBlocker)
        let colliderMeasure = this.createMeasurementsOfElement(collider)
        let blockerMeasure = this.createMeasurementsOfElement(blocker)
        let measurements = this.createMeasurementsForCollirder(colliderMeasure, blockerMeasure)

        switch (type) {
            case 'solid':
                this.solid(collider, blocker, measurements)
                break
            case 'hover':
                this.hover(collider, blocker, measurements, callback)
                break
            default:
                throw 'The type' + type + ' of collider not exist'
        }
    }

    solid(collider, blocker, measure) {
        if (Math.abs(measure.catX) < measure.sumHalfWidth &&
            Math.abs(measure.catY) < measure.sumHalfHeight) {
            if (measure.overlapX >= measure.overlapY) {
                if (measure.catY > 0) {
                    collider.y += collider.speedY
                } else {
                    collider.y -= collider.speedY
                }
            } else {
                if (measure.catX > 0) {
                    collider.x += collider.speedX
                } else {
                    collider.x -= collider.speedX
                }
            }
        }
    }

    hover(collider, blocker, measure, callback) {
        if (Math.abs(measure.catX) < measure.sumHalfWidth &&
            Math.abs(measure.catY) < measure.sumHalfHeight) {
            if (measure.overlapX() >= measure.overlapY()) {
                if (measure.catY > 0) {
                    if (typeof callback === 'function') {
                        callback(collider, blocker)
                    }
                } else {
                    if (typeof callback === 'function') {
                        callback(collider, blocker)
                    }
                }
            } else {
                if (measure.catX > 0) {
                    if (typeof callback === 'function') {
                        callback(collider, blocker)
                    }
                } else {
                    if (typeof callback === 'function') {
                        callback(collider, blocker)
                    }
                }
            }
        }
    }
}