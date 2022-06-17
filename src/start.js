import fruit from '../Modules/fruit.js'
import slime from '../Modules/slime.js'


export default function start() {
    slime.load()
    slime.movimentActions()
    
    fruit.load()
}