/** render()
 * - Executa em varias atualizações 
 * - Para renderizaçãoes visuais na tela 
 */

function render() {
    new Cam('player',0.25)
    new Element('paredes').group()
    new Element('fruta').rect()
    new Element('player').rect()
    
}