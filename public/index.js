start()

function loop() {
    update()
    CONTEXT.save()
    new Element(null).clearAll()
    render()
    CONTEXT.restore()
    requestAnimationFrame(loop,CANVAS)
}

loop()



