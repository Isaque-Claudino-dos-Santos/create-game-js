/** update()
 * - Executa em varias atualizações 
 * - Para atualizações do conteudo da tela 
 */

function update() {
    new Moviment('player').controllers(['w', 'd', 's', 'a'])
    new Collider('player','parede').solid()
}