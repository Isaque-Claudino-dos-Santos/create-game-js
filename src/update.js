/** update()
 * - Executa em varias atualizações 
 * - Para atualizações do conteudo da tela 
 * - Elemento que fica por cima é utima a ser escrita!
 */

function update() {
    new Moviment('player').controllers(['w', 'd', 's', 'a'])

    Data.find('paredes').forEach(parede => {
        new Collider('player', parede).solid()
    });

    new Collider('player', 'fruta').hover((player, fruta) => {
        if(fruta.visible) {
            player.color = 'red'
            fruta.visible = 0
            console.log('Que fruta Boa')
        }
    }) 
}