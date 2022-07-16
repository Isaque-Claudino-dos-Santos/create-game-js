class Animation {
    excute(nameDataObj, time) {
        let dataObj = data.find(nameDataObj)
        let frames = dataObj.image.sprite.frames
        dataObj.image = { ...dataObj.image, animetionActive: true }

        let i = 0
        setInterval(() => {
            if (dataObj.image.animetionActive)
                data.alterFrame(nameDataObj, i)
            i++
            if (i === frames.length)
                i = 0
        }, time)
    }

}