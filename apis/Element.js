class Element {
    constructor(name) {
        if(name !== null) {
            this.datas = Data.find(name)
        }
    }

    rect() {
        let datas = this.datas;
        if(datas.visible) {
            CONTEXT.fillStyle = datas.color
            CONTEXT.fillRect(datas.x, datas.y, datas.width, datas.height)
            CONTEXT.fill()
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
        switch(type) {
            case 'rect':
                this.rect()
            break
        }
    }

    clearAll() {
        CONTEXT.clearRect(0,0,WIDTH,HEIGHT)
    }
}