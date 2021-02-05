// cant figure out why doesnt show 'Deleted.'
function deleteByEmail() {
    // take email from input and deletes the row from the table
    let inpt = document.querySelector('input[name="email"]')
    let tbody = document.querySelector('#customers tbody')
    let btn = document.querySelector('button')
    let errorDiv = document.querySelector("#result")

  // if no entry: display <div id='results'>Not found
    btn.addEventListener('click',(e)=>{
        for(let i=0; i<tbody.children.length; i++){
            onBtnClick(i)
        }
        inpt.value = ''
        if(!btn.classList.contains('orange')){
            btn.classList.add('orange')
            btn.style.background = 'orange'
        }else{
            btn.classList.remove('orange')
            btn.style.background = 'blue'
        }
    })
    function onBtnClick(i){
        if(tbody.children[i].children[1].textContent == inpt.value){
            tbody.children[i].remove()
            errorDiv.textContent = 'Deleted.'
        }else{
            // bug: 'Deleted" msg doesnt show up after 1st use of Not found...
            errorDiv.textContent = 'Error: Not found.'
            document.removeEventListener('click', onBtnClick)

        }
    }
}
