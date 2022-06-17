import fruit from "../Modules/fruit.js";

export default function update() {
    collider.set('hover', 'fruit', 'slime', () => {
        fruit.randonPosition()
    })
}