import rules from "./rules.js";

export default {


    bgProps: {
        name: 'background',
        width: WIDTH,
        height: HEIGHT,
        x: 0,
        y: 0,
        color: rules.backgroundColor
    },

    load_background() {
        data.rect(this.bgProps.name, this.bgProps.x, this.bgProps.y, this.bgProps.width, this.bgProps.height, this.bgProps.color)
            .save()
    }
}