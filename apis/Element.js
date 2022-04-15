class Element {
    constructor(name) {
        if (name !== null) {
            this.datas = Data.find(name)
        }
    }

    rect() {
        let datas = this.datas;
        if (datas.visible) {
            CONTEXT.fillStyle = datas.color
            CONTEXT.fillRect(datas.x, datas.y, datas.width, datas.height)
            CONTEXT.fill()
        }
    }

    image() {
        let datas = this.datas
        if (datas.visible) {
            CONTEXT.drawImage(datas.src, datas.x, datas.y, datas.width, datas.height)
        }
    }

    text() {
        let datas = this.datas
        if (datas.visible) {
            CONTEXT.fillStyle = datas.color
            CONTEXT.font = datas.font
            CONTEXT.fillText(datas.text, datas.x, datas.y)
            return this
        }
    }

    group() {
        let datasArray = this.datas
        datasArray.forEach(data => {
            this.datas = data
            this.callMethodByType(data.type)
        });
    }

    callMethodByType(type) {
        switch (type) {
            case 'rect':
                this.rect()
                break
        }
    }

    relative(x,y) {
        let cam = Cam.cam
        let datas = this.datas
        datas.x = cam.x + x
        datas.y = cam.y + y
    }

    clearAll() {
        CONTEXT.clearRect(0, 0, WIDTH, HEIGHT)
    }
}