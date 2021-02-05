function attachEventsListeners() {
    const daysInpt = document.getElementById('days')
    const hrsInpt = document.getElementById('hours')
    const minsInpt = document.getElementById('minutes')
    const secsInpt = document.getElementById('seconds')
    
    document.getElementById('daysBtn').addEventListener('click',()=>{convert(daysInpt.value * (24*60*60))})
    document.getElementById('hoursBtn').addEventListener('click',()=>{convert(hrsInpt.value * (60*60))})
    document.getElementById('minutesBtn').addEventListener('click',()=>{convert(minsInpt.value * 60)})
    document.getElementById('secondsBtn').addEventListener('click',()=>{convert(secsInpt.value)})

    function convert(sec){
        let day = sec / (24*60*60)
        let hr = sec / (60*60)
        let min = sec / 60

        daysInpt.value = day
        hrsInpt.value = hr
        minsInpt.value = min
        secsInpt.value = sec
    }
 }