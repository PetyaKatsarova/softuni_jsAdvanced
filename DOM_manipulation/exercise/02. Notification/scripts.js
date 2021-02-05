function notify(msg) {
    const note = document.querySelector('#notification')//hidden
    const btn = document.querySelector('button')
    note.textContent = msg
    note.style.display = 'block'
    setTimeout(()=>{
        note.style.display = 'none'
    },2000)
}