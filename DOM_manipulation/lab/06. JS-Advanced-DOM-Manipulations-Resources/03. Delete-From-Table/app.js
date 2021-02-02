// cant figure out why doesnt show 'Deleted.'
function deleteByEmail() {
    // take email from input and deltes the row from the table
    let inpt = document.querySelector('input[name="email"]')
    let tbody = document.querySelector('#customers tbody')
    let btn = document.querySelector('button')
    let errorDiv = document.querySelector("#result")

  // if no entry: display <div id='results'>Not found
    btn.addEventListener('click',(e)=>{
        for(let i=0; i<tbody.children.length; i++){
            if(tbody.children[i].children[1].textContent == inpt.value){
                tbody.children[i].remove()
                errorDiv.textContent = 'Deleted.'
                break
            }else{
                if(tbody.children[i]){
                    errorDiv.textContent = new Error('Not found.')
                }
            }
        }
    })

}
