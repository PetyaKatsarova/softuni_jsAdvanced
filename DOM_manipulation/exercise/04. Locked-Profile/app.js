// function lockedProfile() {
//     Array.from(document.getElementsByClassName('profile')).forEach((bla)=>{
//         let btn = bla.querySelectorAll('button')[0]
//         btn.addEventListener('click',()=>{
//             let unlock = bla.querySelectorAll('input')[1].checked
//             let hiddenDiv = bla.querySelectorAll('div')[0]
//             if(unlock){
//                 if(btn.textContent == 'Show more'){
//                     hiddenDiv.style.display = 'block'
//                     btn.textContent = 'Hide it'
//                 }else if(btn.textContent == 'Hide it'){
//                     hiddenDiv.style.display = 'none'
//                     btn.textContent = 'Show more'
//                 }
//             }
//         })
//     })
// }   


    // my way
function lockedProfile() {
    document.querySelector('#main').addEventListener('click',(e)=>{
        if(e.target.tagName == 'BUTTON'){
            if(e.target.parentNode.children[4].checked){
                if(e.target.textContent == 'Show more'){
                    e.target.previousElementSibling.style.display = 'block'
                    e.target.textContent = 'Hide it'
                }else if(e.target.textContent == 'Hide it'){
                    e.target.previousElementSibling.style.display = 'none'
                    e.target.textContent = 'Show more'
                }
            }
        }
    })
}