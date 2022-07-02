import start from '../src/start.js';
import update from '../src/update.js';
import render from '../src/render.js';
start()

function loop() {
    update()
    moviment.verificationMovimentStateToApplyMoviment()
    CONTEXT.save()
    draw.clearCANVAS()
    cam.movimentCam()
    render()
    CONTEXT.restore()
    //requestAnimationFrame(loop, CANVAS)
}

let ms = 100

setInterval(loop, ms)



