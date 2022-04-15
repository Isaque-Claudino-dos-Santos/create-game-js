class Cam {
    static cam = {
        x: 0,
        y: 0,
        width: 450,
        height: 300,
        percentageBorder: 0,
        topPercentage: () => {
            return 1 - (1 - Cam.cam.percentageBorder)
        },
        bottomPercentage: () => {
            return (1 - Cam.cam.percentageBorder)
        },
        leftPercentage: () => {
            return 1 - (1 - Cam.cam.percentageBorder)
        },
        rightPercentage: () => {
            return (1 - Cam.cam.percentageBorder)
        },

        borderTop: () => {
            return Cam.cam.y + (Cam.cam.height * Cam.cam.topPercentage())
        },
        borderBottom: () => {
            return Cam.cam.y + (Cam.cam.height * Cam.cam.bottomPercentage())
        },
        borderLeft: () => {
            return Cam.cam.x + (Cam.cam.width * Cam.cam.leftPercentage())
        },
        borderRight: () => {
            return Cam.cam.x + (Cam.cam.width * Cam.cam.rightPercentage())
        },
    }

    constructor(player, percentageBorder) {
        Cam.cam.percentageBorder = percentageBorder
        this.player = Data.find(player)

        this.ctx = new Element(null).ctx
        this.ctx.translate(-Cam.cam.x, -Cam.cam.y)
        this.movimentCam()
    }

    movimentCam() {
        let player = this.player
        let cam = Cam.cam
        if (player.x + player.width > cam.borderRight()) {
            cam.x = player.x + player.width - (cam.width * cam.rightPercentage())
        }
        if (player.x  < cam.borderLeft()) {
            cam.x = player.x - (cam.width * cam.leftPercentage())
        }
        if (player.y < cam.borderTop()) {
            cam.y = player.y  - (cam.height * cam.topPercentage())
        }
        if (player.y + player.height > cam.borderBottom()) {
            cam.y = player.y + player.height - (cam.height * cam.bottomPercentage())
        }
    }
}