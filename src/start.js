/** start()
 * - Executa uma unica vez no inicio da aplicação
 * - usado para definir dados.
 */

function start() {
    new Data('player')
        .rect(10, 10, 30, 30, 'blue')
        .speed(10, 10)

    new Data('parede')
        .rect(230, 130, 20, 80, 'black')
}