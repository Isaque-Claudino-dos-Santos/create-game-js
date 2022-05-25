class Draw {
    draw(methodName, datas) {
        if (isArray(datas)) {
            this.group(methodName, datas)
        } else {
            this.callMethodByName(methodName, datas)
        }
    }

    group(methodName, datas) {
        datas.forEach(data => {
            this.callMethodByName(methodName, data)
        });
    }

    render(methodName, datasName) {
        if (isArray(datasName)) {
            let arrayOfNames = datasName.reverse()
            arrayOfNames.forEach((name) => {
                let datas = data.find(name)
                this.draw(methodName, datas)
            })
        }

        if (isString(datasName)) {
            let datas = data.find(datasName)
            this.draw(methodName, datas)
        }

        return { relative: this.relative }
    }

    relative(dataName, newX, newY) {
        let datas = data.find(dataName)
        let dataCam = cam.datasCam

        datas.x = dataCam.x + newX
        datas.y = dataCam.y + newY
    }

    callMethodByName(methodName, datas) {
        if (isString(methodName) && isObj(datas))
            eval('this.' + methodName + '(datas)')
    }

    rect(datas) {
        if (datas.fill) {
            CONTEXT.fillStyle = datas.color
            CONTEXT.fillRect(datas.x, datas.y, datas.width, datas.height)
            CONTEXT.fill()
        } else {
            CONTEXT.strokeStyle = datas.color
            CONTEXT.strokeRect(datas.x, datas.y, datas.width, datas.height)
            CONTEXT.stroke()
        }
    }

    image(datas) {
        CONTEXT.drawImage(datas.src, datas.x, datas.y, datas.width, datas.height)
    }

    text(datas) {
        CONTEXT.font = datas.font
        CONTEXT.textBaseline = 'top'
        if (datas.fill) {
            CONTEXT.fillStyle = datas.color
            CONTEXT.fillText(datas.text, datas.x, datas.y)
            CONTEXT.fill()
        } else {
            CONTEXT.strokeStyle = datas.color
            CONTEXT.strokeText(datas.text, datas.x, datas.y)
            CONTEXT.stroke()
        }
    }

    clearCANVAS() {
        CONTEXT.clearRect(0, 0, WIDTH, HEIGHT)
    }
}