start()

function loop() {
    key.callFunctionOfKey()
    update()
    CONTEXT.save()
    draw.clearCANVAS()
    render()
    CONTEXT.restore()
    requestAnimationFrame(loop, CANVAS)
}

loop()



