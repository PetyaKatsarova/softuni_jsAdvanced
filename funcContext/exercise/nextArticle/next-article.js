function getArticleGenerator(articles) {
    const content = document.getElementById('content')
    
    function showArt(){
        let art = articles.shift()
        if(art){
            let article = document.createElement('article')
            article.textContent = art
            content.appendChild(article)
        }
    }
    return showArt;
}

