class Cam {
    static cam = {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
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

    constructor() {
        this.percentageBorder
        this.player
        this.camOn = false
    }

    setPlayer(name) {
        this.player = data.find(name)
    }

    setBorder(border) {
        this.percentageBorder = border
    }

    activeCam(name, border) {
        this.setPlayer(name)
        this.setBorder(border)
        this.camOn = true
    }

    movimentCam() {
        if (this.camOn) {
            Cam.cam.percentageBorder = this.percentageBorder
            let player = this.player
            let cam = Cam.cam

            if (player.x + player.width > cam.borderRight()) {
                cam.x = player.x + player.width - (cam.width * cam.rightPercentage())
            }
            if (player.x < cam.borderLeft()) {
                cam.x = player.x - (cam.width * cam.leftPercentage())
            }
            if (player.y < cam.borderTop()) {
                cam.y = player.y - (cam.height * cam.topPercentage())
            }
            if (player.y + player.height > cam.borderBottom()) {
                cam.y = player.y + player.height - (cam.height * cam.bottomPercentage())
            }

            CONTEXT.translate(-Cam.cam.x, -Cam.cam.y)
        }
    }
}