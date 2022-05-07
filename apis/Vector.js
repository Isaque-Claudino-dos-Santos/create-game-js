class Vector {
    moviment(nameData, TOP_CONTROLLER, RIGHT_CONTROLLER, DOWN_CONTROLLER, LEFT_CONTROLLER) {
        let datas = data.find(nameData)
        key.keyboard(TOP_CONTROLLER, () => {
            datas.y -= datas.speedY
        })

        key.keyboard(RIGHT_CONTROLLER, () => {
            datas.x += datas.speedX
        })

        key.keyboard(DOWN_CONTROLLER, () => {
            datas.y += datas.speedY
        })

        key.keyboard(LEFT_CONTROLLER, () => {
            datas.x -= datas.speedX
        })
    }

}