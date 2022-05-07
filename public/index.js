start()

function loop() {
    key.callFunctionOfKey()
    update()
    CONTEXT.save()
    draw.clearCANVAS()
    render()
    cam.movimentCam()
    CONTEXT.restore()
    requestAnimationFrame(loop, CANVAS)
}

loop()



