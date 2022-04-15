class Element {
    constructor(name) {
        if(name !== null) {
            this.datas = Data.find(name)
        }
    }

    rect() {
        let datas = this.datas;
        if(datas.visible) {
            let ctx = this.ctx
            ctx.fillStyle = datas.color
            ctx.fillRect(datas.x, datas.y, datas.width, datas.height)
            ctx.fill()
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
        let ctx = this.ctx
        let cnv = this.cnv
        ctx.clearRect(0,0,cnv.width,cnv.height)
    }
}