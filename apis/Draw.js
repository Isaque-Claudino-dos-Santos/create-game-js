class Draw {
    render(type, datas) {
        switch (type) {
            case 'rect':
                this.rect(datas)
                break
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