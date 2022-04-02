start()

function loop() {
    new Element(null).clearAll()
    render()
    update()
    requestAnimationFrame(loop,new Element(null).cnv)
}

loop()



