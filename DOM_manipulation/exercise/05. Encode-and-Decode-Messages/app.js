// function encodeAndDecodeMessages() {
//     const encodeEndSend = document.querySelector('#main').children[0].children[2]
//     const decodeEndRead = document.querySelector('#main').children[1].children[2]
    
//     encodeEndSend.addEventListener('click',(e)=>{
//         let msg = e.target.previousElementSibling.value
//         let asciiMsg = ''
//         // convert msg every char to ascii code, each symbol+1
//         msg = msg.split('')
//         for(let char of msg){
//             asciiMsg +=char.charCodeAt(0)+1
//         }
//         e.target.previousElementSibling.value = ''
//         // append decoded message to the received msg textfield
//         e.target.parentNode.nextElementSibling.children[1].value = asciiMsg
//     })

//     decodeEndRead.addEventListener('click',(e)=>{
//         let msg = e.target.previousElementSibling.value
//         let result = ''
//         // convert msg every char to ascii code, each symbol+1
//         msg = msg.split(' ')
//         console.log(msg)
//         for(let char of msg){
//             result += String.fromCharCode(char-1)
//         }
//         e.target.previousElementSibling.value = result
//     })
    
// }

function encodeAndDecodeMessages() {
    const encodeEndSend = document.querySelector('#main').children[0].children[2]
    const decodeEndRead = document.querySelector('#main').children[1].children[2]
    
    encodeEndSend.addEventListener('click',(e)=>{
        let msg = e.target.previousElementSibling.value
        let asciiMsg = []
        // convert msg every char to ascii code, each symbol+1
        msg = msg.split('')
        for(let char of msg){
            asciiMsg.push(char.charCodeAt(0)+1)
        }
        e.target.previousElementSibling.value = ''
        // append decoded message to the received msg textfield
        e.target.parentNode.nextElementSibling.children[1].value = asciiMsg.join(' ')
    })

    decodeEndRead.addEventListener('click',(e)=>{
        let msg = e.target.previousElementSibling.value
        let result = []
        // convert msg every char to ascii code, each symbol+1
        msg = msg.split(' ')
        console.log(msg)
        for(let char of msg){
            result.push(String.fromCharCode(char-1))
        }
        e.target.previousElementSibling.value = result.join('')
    })
    
}