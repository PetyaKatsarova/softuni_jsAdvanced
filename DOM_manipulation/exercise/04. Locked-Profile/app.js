function lockedProfile() {
    //display hidden div on show more btn click
    // [...] gives arr, if not this form: gives HTMl collection
    // bla=parent
    [...document.getElementsByClassName('profile')].forEach((bla)=>{
        let btn = bla.querySelectorAll('button')[0]

        btn.addEventListener('click',()=>{
            let unlock = bla.querySelectorAll('input')[1].checked
            let hiddenDiv = bla.querySelectorAll('div')[0]
            if(unlock){
                if(btn.textContent == 'Show more'){
                    hiddenDiv.style.display = 'block'
                    btn.textContent = 'Hide'
                }else if(btn.textContent == 'Hide'){
                    hiddenDiv.style.display = 'none'
                    btn.textContent = 'Show more'
                }
            }
        })
    })
    


    // my way: 33% correct
    // const showMore = document.querySelectorAll('.profile button')
    // const main = document.querySelector('#main')
    // const unlocked = document.querySelectorAll('.unlocked')
    // main.addEventListener('click',(e)=>{
    //     if(e.target.tagName == 'BUTTON'){
    //         if(e.target.parentNode.children[4].checked){
    //             if(e.target.textContent == 'Show more'){
    //                 e.target.previousElementSibling.style.display = 'block'
    //                 e.target.textContent = 'Hide'
    //             }else if(e.target.textContent == 'Hide'){
    //                 e.target.previousElementSibling.style.display = 'none'
    //                 e.target.textContent = 'Show more'
    //             }
    //         }
    //     }
    // })
}