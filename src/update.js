import fruit from "../Modules/fruit.js";

export default function update() {
    collider.set('hover', 'slime', 'fruit', () => {
        fruit.randonPosition()
    })
}