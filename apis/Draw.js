class Draw {
    render(type, nameData) {
        let datas = data.find(nameData)
        let typeMethod = type === datas.type
        if (typeMethod) {
            switch (type) {
                case 'rect':
                    this.rect(datas)
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

    clearCANVAS() {
        CONTEXT.clearRect(0, 0, WIDTH, HEIGHT)
    }
}