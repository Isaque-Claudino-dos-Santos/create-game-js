function render() {
    draw.renderGroup('rect',['player','bloco'])
    draw.render('text', 'score')
        .relative('score',0,0)
    draw.render('image', 'fruta')
}