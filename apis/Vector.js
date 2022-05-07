class Vector {
    moviment(nameData, TOP_CONTROLLER, RIGHT_CONTROLLER, DOWN_CONTROLLER, LEFT_CONTROLLER) {
        let datas = data.find(nameData)
        key.keyboard('press.' + TOP_CONTROLLER, () => {
            datas.y -= datas.speedY
        })

        key.keyboard('press.' + RIGHT_CONTROLLER, () => {
            datas.x += datas.speedX
        })

        key.keyboard('press.' + DOWN_CONTROLLER, () => {
            datas.y += datas.speedY
        })

        key.keyboard('press.' + LEFT_CONTROLLER, () => {
            datas.x -= datas.speedX
        })
    }

}