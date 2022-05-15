class Cam {
    constructor() {
        this.datasCam = {
            x: 0,
            y: 0,
            width: WIDTH,
            height: HEIGHT,
            percentageBorder: 0,
            topPercentage: () => {
                return 1 - (1 - this.datasCam.percentageBorder)
            },
            bottomPercentage: () => {
                return (1 - this.datasCam.percentageBorder)
            },
            leftPercentage: () => {
                return 1 - (1 - this.datasCam.percentageBorder)
            },
            rightPercentage: () => {
                return (1 - this.datasCam.percentageBorder)
            },

            borderTop: () => {
                return this.datasCam.y + (this.datasCam.height * this.datasCam.topPercentage())
            },
            borderBottom: () => {
                return this.datasCam.y + (this.datasCam.height * this.datasCam.bottomPercentage())
            },
            borderLeft: () => {
                return this.datasCam.x + (this.datasCam.width * this.datasCam.leftPercentage())
            },
            borderRight: () => {
                return this.datasCam.x + (this.datasCam.width * this.datasCam.rightPercentage())
            },
        }


        this.percentageBorder
        this.player
        this.datasCamOn = false


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
        this.datasCamOn = true
    }



    movimentCam() {
        CONTEXT.translate(-this.datasCam.x, -this.datasCam.y)
        if (this.datasCamOn) {
            this.datasCam.percentageBorder = this.percentageBorder
            let player = this.player
            let cam = this.datasCam

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
        }
    }
}