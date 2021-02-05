function focus() {
    const par = document.querySelector('body div')
    for(let i=0; i<par.children.length; i++){
        par.children[i].children[1].addEventListener('focus',()=>{
            par.children[i].classList.add('focused')
        })
        par.children[i].children[1].addEventListener('blur',()=>{
            par.children[i].classList.remove('focused')
        })
    }
}