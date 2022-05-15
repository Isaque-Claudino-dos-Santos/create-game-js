class Draw {
    renderGroup(type,datasName) {
        if(typeof datasName === 'object') {
            datasName.forEach(name => {
                let datas = data.find(name)
                this.callMethodByName(type,datas)        
            });
        }
    }

    render(type, dataName) {
        let datas = data.find(dataName)

        if (datas.visible)
                this.callMethodByName(type,datas)
          
        return { relative: this.relative }
    }

    relative(dataName, newX, newY) {
        let datas = data.find(dataName)
        let dataCam = cam.datasCam

        datas.x = dataCam.x + newX
        datas.y = dataCam.y + newY
    }

    callMethodByName(name,datas) {
        this.checkDataTypeValidForTheMethod(name,datas.type)
            switch (name) {
                case 'rect':
                    this.rect(datas)
                    break
                case 'image':
                    this.image(datas)
                    break
                case 'text':
                    this.text(datas)
                    break
            }
    }

    checkDataTypeValidForTheMethod(methodRequired,dataTypeMethod) {
        if(methodRequired !== dataTypeMethod) {
            throw "method ->"+methodRequired+"<- incompatible with ->"+dataTypeMethod+"<- datatype"
        }
    }


    rect(datas) {
        if (datas.fill) {
            CONTEXT.fillStyle = datas.color
            CONTEXT.fillRect(datas.x, datas.y, datas.width, datas.height)
            CONTEXT.fill()
        } else {
            CONTEXT.strokeStyle = datas.color
            CONTEXT.strokeRect(datas.x, datas.y, datas.width, datas.height)
            CONTEXT.stroke()
        }
    }

    image(datas) {
        CONTEXT.drawImage(datas.src, datas.x, datas.y, datas.width, datas.height)
    }

    text(datas) {
        CONTEXT.font = datas.font
        CONTEXT.textBaseline = 'top'
        if (datas.fill) {
            CONTEXT.fillStyle = datas.color
            CONTEXT.fillText(datas.text, datas.x, datas.y)
            CONTEXT.fill()
        } else {
            CONTEXT.strokeStyle = datas.color
            CONTEXT.strokeText(datas.text, datas.x, datas.y)
            CONTEXT.stroke()
        }
    }

    clearCANVAS() {
        CONTEXT.clearRect(0, 0, WIDTH, HEIGHT)
    }
}