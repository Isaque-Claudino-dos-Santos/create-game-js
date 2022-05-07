start()

function loop() {
    key.callFunctionOfKey()
    update()
    CONTEXT.save()
    draw.clearCANVAS()
    cam.movimentCam()
    render()
    CONTEXT.restore()
    requestAnimationFrame(loop, CANVAS)
}

loop()



