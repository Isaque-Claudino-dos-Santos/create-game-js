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
                }
            } else {
                throw "The type data ->" + datas.type + "<- not corrensponds to the method ->" + type + "<- required"
            }
    }

    rect(datas) {
        CONTEXT.fillStyle = datas.color
        if (datas.fill) {
            CONTEXT.fillRect(datas.x, datas.y, datas.width, datas.height)
            CONTEXT.fill()
        } else {
            CONTEXT.strokeRect(datas.x, datas.y, datas.width, datas.height)
            CONTEXT.stroke()
        }
    }

    image(datas) {
        CONTEXT.drawImage(datas.src, datas.x, datas.y, datas.width, datas.height)
    }

    clearCANVAS() {
        CONTEXT.clearRect(0, 0, WIDTH, HEIGHT)
    }
}