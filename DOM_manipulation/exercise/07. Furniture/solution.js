function solve(){
    let textarea = document.querySelectorAll('#exercise textarea')[0]
    let output = document.querySelectorAll('#exercise textarea')[1]
    console.log(output);

    [...document.querySelectorAll('button')][0].addEventListener('click',()=>{
        let input = document.querySelectorAll('textarea')[0]
        let products = JSON.parse(input.value)

        products.forEach(pr=>{
            let{name,img,price,decFactor} = pr
            console.log(img)
            let htmlStr = `<tr><td><img src="${img}" /></td>
            <td><p>${name}</p></td><td><p>${price}</p></td><td><p>${decFactor}</p></td><td><input type="checkbox" /></td></tr>`

            document.querySelectorAll('tbody')[0].insertAdjacentHTML('beforeend', htmlStr)
        })
    })
 
    document.getElementsByTagName('button')[1].addEventListener('click', ()=>{
        let [products,prices, factors] = [[],[],[]];
        [...document.querySelectorAll('tbody tr')].forEach(tr=>{
            if(tr.querySelector('input').checked){
                let data = tr.querySelectorAll('p')
                products.push(data[0].textContent)
                prices.push(Number(data[1].textContent))
                factors.push(Number(data[2].textContent))
            }
        });
  
        let totPrice = prices.reduce((acc,item)=> acc+=item,0)
        let avgFactor = factors.reduce((acc,item)=> acc+=item,)/factors.length
        output.value = `Bought furniture: ${products.join(', ')}\nTotal price: ${totPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor}`
        textarea.textContent = ''
    })
}

// my way

// function solve() {
//     const tableBody = document.querySelector('.table>tbody')
//     const textArea = document.querySelector('#exercise>textarea')

//     document.querySelector('#exercise>button').addEventListener('click',(e)=>{
//         let tr = document.createElement('tr')
//         let arr = textArea.value 
//         let myObj = {}

//         if(arr){
//           arr = JSON.parse(arr)
//           for(let obj of arr){
//               myObj.img = obj.img
//               myObj.name = obj.name
//               myObj.price = obj.price
//               myObj.decFactor = obj.decFactor

//               let keys = Object.keys(myObj)
//               for(let key of keys){
//                   let td = document.createElement('td')
//                   if(key == 'img'){
//                       let img = document.createElement('img')
//                       img.src = myObj[key]
//                       td.appendChild(img)
//                       tr.appendChild(td)
//                   }
//                   else{
//                     let p = document.createElement('p')
//                     p.textContent = myObj[key]
//                     td.appendChild(p)
//                     tr.appendChild(td)             
//                   }              
//               }
//             }
//             let tdata = document.createElement('td')
//             let checkbox = document.createElement('input')
//             checkbox.type = 'checkbox'
//             tdata.appendChild(checkbox)
//             tr.appendChild(tdata)
//             tableBody.appendChild(tr)
//         }
//         textArea.value = ''
//      })  

//      document.getElementsByTagName('button')[1].addEventListener('click', ()=>{
//         let checked = tableBody.getElementsByTagName('input')
//         console.log(checked)
//         if(checked.checked){
//           console.log('bingo')
//         }
//      })
// }