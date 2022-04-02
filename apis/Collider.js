class Collider {
    constructor(colliderName, blockerName) {
        this.collider = Data.find(colliderName)
        this.blocker = Data.find(blockerName)

        this.measureCollider = this.createMeasurements(this.collider)
        this.measureBlocker = this.createMeasurements(this.blocker)

        this.measure = this.measureOfColliders(this.measureCollider, this.measureBlocker)

    }

    createMeasurements(datas) {
        let halfWidth = datas.width / 2
        let halfHeight = datas.height / 2
        return {
            halfWidth: halfWidth,
            halfHeight: halfHeight,
            centerX: datas.x + halfWidth,
            centerY: datas.y + halfHeight,
        }
    }

    measureOfColliders(rectMeasure_1, rectMeasure_2) {
        let sumHalfWidth = rectMeasure_1.halfWidth + rectMeasure_2.halfWidth
        let sumHalfHeight = rectMeasure_1.halfHeight + rectMeasure_2.halfHeight
        let catX = rectMeasure_1.centerX - rectMeasure_2.centerX
        let catY = rectMeasure_1.centerY - rectMeasure_2.centerY
        return {
            overlapX: sumHalfWidth - Math.abs(catX),
            overlapY: sumHalfHeight - Math.abs(catY),
            sumHalfWidth: sumHalfWidth,
            sumHalfHeight: sumHalfHeight,
            catX: catX,
            catY: catY
        }
    }

    solid() {
        let measure = this.measure
        let collider = this.collider

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

    hover(callback) {
        let measure = this.measure

        if (Math.abs(measure.catX) < measure.sumHalfWidth &&
            Math.abs(measure.catY) < measure.sumHalfHeight) {
            if (measure.overlapX > 0 ||
                measure.overlapY > 0) {
                if (typeof callback === 'function') {
                    callback(this.collider, this.blocker)
                }
            }
        }
    }
}