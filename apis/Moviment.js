class Moviment {
    static controllers = {}
    static stateControllers = {
        TOP: false,
        RIGHT: false,
        DOWN: false,
        LEFT: false,
    }

    controllers(controllers) {
        Moviment.controllers = {
            TOP: controllers[0],
            RIGHT: controllers[1],
            DOWN: controllers[2],
            LEFT: controllers[3],
        }
    }

    constructor(name) {
        this.player = Data.find(name)

        this.checkEvents()
        this.executeMoviment()
    }

    movimentOn(event) {
        let controllers = Moviment.controllers
        let stateControllers = Moviment.stateControllers
        switch (event.key) {
            case controllers.TOP:
                stateControllers.TOP = true
                break;
            case controllers.RIGHT:
                stateControllers.RIGHT = true
                break;
            case controllers.DOWN:
                stateControllers.DOWN = true
                break;
            case controllers.LEFT:
                stateControllers.LEFT = true
                break;
        }
    }

    movimentOff(event) {
        let controllers = Moviment.controllers
        let stateControllers = Moviment.stateControllers
        switch (event.key) {
            case controllers.TOP:
                stateControllers.TOP = false
                break;
            case controllers.RIGHT:
                stateControllers.RIGHT = false
                break;
            case controllers.DOWN:
                stateControllers.DOWN = false
                break;
            case controllers.LEFT:
                stateControllers.LEFT = false
                break;
        }
    }

    checkEvents() {
        addEventListener('keydown', this.movimentOn)
        addEventListener('keyup', this.movimentOff)
    }

    executeMoviment() {
        let stateControllers = Moviment.stateControllers
        let player = this.player

        if (stateControllers.TOP) {
            player.y -= player.speedY
        }

        if (stateControllers.RIGHT) {
            player.x += player.speedX
        }

        if (stateControllers.DOWN) {
            player.y += player.speedY
        }

        if (stateControllers.LEFT) {
            player.x -= player.speedX
        }
    }
}