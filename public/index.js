start()

function loop() {
    update()
    moviment.verificationMovimentStateToApplyMoviment()
    CONTEXT.save()
    draw.clearCANVAS()
    cam.movimentCam()
    render()
    CONTEXT.restore()
    requestAnimationFrame(loop, CANVAS)
}

loop()



