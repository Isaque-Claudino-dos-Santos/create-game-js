function render() {
    draw.render('rect', 'player')
    draw.render('text', 'score')
        .relative('score',20,20)
    draw.render('rect', 'bloco')
    draw.render('image', 'fruta')
}