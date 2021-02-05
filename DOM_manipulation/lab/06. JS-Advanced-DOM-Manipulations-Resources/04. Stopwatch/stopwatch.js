function stopwatch(){
    const startBtn = document.querySelector('#startBtn')
    const stopBtn = document.querySelector('#stopBtn')
    let displayTime = document.querySelector
    ('#time')
    let intervalId;
    let counterSec=0
        let counterMin = 0
    startBtn.addEventListener('click',()=>{
        startBtn.setAttribute('disabled',true)
        stopBtn.removeAttribute('disabled')
        intervalId = window.setInterval(()=>{
            ++counterSec
            if(counterSec == 60){
                ++counterMin
                counterSec = 0
            }
            if(counterMin<10){
                displayTime.innerHTML = `0${counterMin}:${counterSec}`;
            }else{
                displayTime.innerHTML = `${counterMin}:${counterSec}`;
            }
        },1000)
    })
    stopBtn.addEventListener('click',()=>{
        clearInterval(intervalId)
        // displayTime.innerHTML = '00:00'
        window.setInterval(displayT,1000)
        startBtn.removeAttribute('disabled')
        stopBtn.setAttribute('disabled', true)
    })
    function displayT(){
        displayTime.innerHTML = '00:00'
    }
}