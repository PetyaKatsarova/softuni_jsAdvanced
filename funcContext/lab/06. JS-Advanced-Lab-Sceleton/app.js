function solve() {
    const ul = document.querySelector('ul')
    const box = document.querySelector('#box')// div
    console.log(box)
    document.querySelector('#dropdown').addEventListener('click', ()=>{
        if(ul.style.display == 'block'){
            ul.style.display = 'none'
            box.style.backgroundColor = 'black';
                box.style.color = 'white'
        }else{
            ul.style.display = 'block'
            displayColor(ul)
        }
    })

    function displayColor(ul){
        ul.addEventListener('click', (e)=>{
            if(e.target.tagName == 'LI'){
                box.style.backgroundColor = e.target.textContent
                box.style.color = 'black'
            }
        })
    }
}