start()

function loop() {
    let ctx = new Element(null).ctx
    update()
    ctx.save()
    new Element(null).clearAll()
    render()
    ctx.restore()
    requestAnimationFrame(loop,new Element(null).cnv)
}

loop()



