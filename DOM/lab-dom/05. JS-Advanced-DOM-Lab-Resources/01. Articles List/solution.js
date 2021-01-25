function createArticle() {
	let articles = document.querySelector('#articles');
	let title = document.getElementById('createTitle');
	//title.setAttribute('placeholder', 'Title')// it works on click :)
	let content = document.querySelector('#createContent');
	content.setAttribute('placeholder', 'kuku');
	content.removeAttribute('placeholder');

	let h3 = document.createElement('h3');
	h3.innerHTML = title.value;

	let text = document.createElement('p');
	text.innerHTML = content.value;

	if(text.innerHTML && h3.innerHTML){
        const article = document.createElement('article')
	    article.appendChild(h3);
	    article.appendChild(text);
	    articles.appendChild(article);
	}
	title.value = '';
	content.value = '';
}