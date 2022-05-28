start()

function loop() {
    update()
    CONTEXT.save()
    draw.clearCANVAS()
    cam.movimentCam()
    render()
    CONTEXT.restore()
    requestAnimationFrame(loop, CANVAS)
}

loop()



