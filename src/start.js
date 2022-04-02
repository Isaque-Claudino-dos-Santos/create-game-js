/** start()
 * - Executa uma unica vez no inicio da aplicação
 * - usado para definir dados.
 */

function start() {
    new Data('player')
        .rect(10, 10, 20, 20, 'blue')
        .speed(6, 6)

    new Data('parede')
        .rect(230, 130, 10, 100, 'black')

    new Data('fruta')
        .rect(60,220,25,25,'green')
}