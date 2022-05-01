class Data {
    set(datas, newDatas) {
        return { ...datas, ...newDatas }
    }

    speed(x, y) {
        if (y === undefined) {
            y = x
        }
        return { speedX: x, speedY: y }
    }

    rect(x, y, width, height, color, fill = true) {
        return { x, y, width, height, color, fill, type: 'rect' }
    }
}