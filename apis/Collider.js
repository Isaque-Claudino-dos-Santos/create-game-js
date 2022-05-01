class Collider {
    createMeasurementsForCollirder(r1, r2) {
        return {
            catX: r1.centerX - r2.centerX,
            catY: r1.centerY - r2.centerY,
            sumHalfWidth: r1.halfWidth + r2.halfWidth,
            sumHalfHeight: r1.halfHeight + r2.halfHeight,
            overlapX: () => {
                return this.sumHalfWidth - Math.abs(this.catX)
            },
            overlapY: () => {
                return this.sumHalfHeight - Math.abs(this.catY)
            }
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

    set(type, collider, blocker, callback) {
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
        }
    }

    solid(collider, blocker, measure) {
        if (Math.abs(measure.catX) < measure.sumHalfWidth &&
            Math.abs(measure.catY) < measure.sumHalfHeight) {
            if (measure.overlapX() >= measure.overlapY()) {
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