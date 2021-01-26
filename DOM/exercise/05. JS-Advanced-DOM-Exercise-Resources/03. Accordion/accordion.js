function toggle() {
    let btn = document.querySelector('.button')
    let divExtra = document.querySelector('#extra')
    console.log(btn.textContent)
    if(btn.textContent == 'More'){
        btn.textContent = 'Less'
        divExtra.style.display = 'block'
    }else{
        btn.textContent = 'More'
        divExtra.style.display = 'none'
    }
}