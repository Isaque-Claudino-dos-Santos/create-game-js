class Element {
    constructor(name) {
        this.cnv = document.querySelector('#canvas-main')
        this.ctx = this.cnv.getContext('2d')

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

    clearAll() {
        let ctx = this.ctx
        let cnv = this.cnv
        ctx.clearRect(0,0,cnv.width,cnv.height)
    }
}