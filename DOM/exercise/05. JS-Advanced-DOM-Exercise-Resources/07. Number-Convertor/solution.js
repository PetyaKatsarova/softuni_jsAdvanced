// function solve() {
//    const inpt = document.querySelector('#input')
//    const to = document.querySelector("#selectMenuTo") // <select><option selected value>
//    const convert = document.querySelector('button')
//    const result = document.querySelector('#result')
//    console.log(result)

//    // create and append option to to
//    let option1 = document.createElement('option')
//    option1.value = 'binary'
//    option1.textContent = 'to binary'
//    to.appendChild(option1)

//    let option2 = document.createElement('option')
//    option2.value = 'binary'
//    option2.textContent = 'to hexadecimal'
//    to.appendChild(option2)

//    // take num from inpt
//    let num = inpt.value
//    // on click 'convert it'
//    convert.addEventListener('click',()=>{
//        if(to.value == 'binary'){
//            decimalToBinary(num)
//        }
//    })

//    function decimalToBinary(num){
//     const stack = new Stack();
  
//     let result = '';
    
//     while (num > 0){ 
//       stack.push(num % 2); 
//       num = Math.floor(num / 2); 
//     }
    
//     while (stack.top > 0){ 
//       result += stack.pop();
//     }
  
//     return result;
//   }
// }  