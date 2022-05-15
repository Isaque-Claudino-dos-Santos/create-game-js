function render() {
    draw.render('rect',['player','paredes'])
    draw.render('text', 'score')
        .relative('score',0,0)
    draw.render('image', 'fruta')
}