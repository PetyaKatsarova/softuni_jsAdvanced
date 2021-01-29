function addItem() {
   
}

let count = 0
let buttn = document.querySelector('input[type="button"]')

// buttn.addEventListener('click', (e)=> {
//     console.log(e.timeStamp)
// })

buttn.onmouseout = pink
buttn.onmouseover = orange
document.addEventListener('keypress', onKeyPress)

function pink(e){
    e.target.style.background = 'pink'
}
function orange(e){
    e.target.style.background = 'orange'
}
function onKeyPress(e){
    console.log(e)
    if(e.keyCode == 13){
        e.target.style.background = 'yellow'
        // a func does the click for us
        e.target.addEventListener('click', ()=>{
            count++
           buttn.value = count
           console.log(buttn.value)
        })
        // very cool: does the clicking for us and does what we asked in another click event for that el
        e.target.click()
    }else{
        document.removeEventListener('keypress', onKeyPress)
        e.target.style.background = '#EEEEEE'
    }
    console.log(e.keyCode)
}
// event 'focus' is when click on input to start typing
// e 'blur' is the opposite: when going out
// example: btn.addEventListener('click', ()=>{
   //passw.removeEventListener('focus', focusEventMyF)
//})
let counter = 0
let intv = setInterval(function(){
    counter++
    buttn.click()
    if(counter > 4){
        clearInterval(intv)
        document.getElementsByTagName('body')[0].style.background = "pink"
        
    }
    console.log('2 sec elapsed')
},2000)
