// function solve() {
//    const searchBtn = document.querySelector('#searchBtn')
//    const searchInpt = document.querySelector('#searchField')
//    const table = document.querySelector('.container tbody').children
//    // loop through all tr no th
//    // select search input.val
   
//    searchBtn.addEventListener('click',(e)=>{
    
//        Array.from(table).forEach(el=>{
//         let trs = Array.from(el.children)
//         if(el.classList.contains('select')){
//             el.classList.remove('select')
//         }
//         for(let i=0; i<trs.length; i++){
//             //console.log(trs[i].textContent)
//             if(searchInpt.value && trs[i].textContent.toLowerCase().includes(searchInpt.value.toLowerCase())){
//                  trs[i].parentNode.classList.add('select')
//             }
//         }
//        })
//     searchInpt.value = ''
//    })
// }
function solve(){
    let searchInpt = document.getElementById('searchField')
    
    document.getElementById('searchBtn').addEventListener('click', ()=>{
        [...document.querySelectorAll('tbody > tr')].forEach(row=>{
            if(row.textContent.includes(searchInpt.value)){
                row.classList.add('select')
            }else{
                row.classList.remove('select')
            }
        })
        searchInpt.value=''
    })

}