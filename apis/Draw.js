class Draw {
    render(type, nameData) {
        let datas = data.find(nameData)
        let typeMethod = type === datas.type

        if (datas.visible)
            if (typeMethod) {
                switch (type) {
                    case 'rect':
                        this.rect(datas)
                        break
                    case 'image':
                        this.image(datas)
                        break
                    case 'text':
                        this.text(datas)
                        break
                }
            } else {
                throw "The type data ->" + datas.type + "<- not corrensponds to the method ->" + type + "<- required"
            }
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