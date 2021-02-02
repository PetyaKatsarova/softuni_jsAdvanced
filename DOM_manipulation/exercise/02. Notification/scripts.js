function notify(message) {
    const divNotification = document.querySelector('#notification')
    const btn = document.querySelector('button')
    let intervalId;

    btn.addEventListener('click', ()=>{
        divNotification.textContent = message
        divNotification.style.display = 'inline-block'
let count = 0
        intervalId = setInterval(function(){
           divNotification.style.display = 'none'
           console.log(count++)
        }, 2000)
    })
    clearInterval(intervalId)
}