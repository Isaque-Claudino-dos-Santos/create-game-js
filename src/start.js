/** start()
 * - Executa uma unica vez no inicio da aplicação
 * - usado para definir dados.
 */

function start() {
    new Data('player')
        .rect(10, 10, 20, 20, 'blue')
        .speed(6, 6)

    new Data('paredes').group((type) => {
        return [
            type.rect(230, 130, 10, 100, 'black'),
            type.rect(19, 275, 100, 20, 'black')
        ]
    })

    new Data('fruta')
        .image('images/cereja.png',140, 220, 25, 25)
}