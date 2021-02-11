// display new info 
let div = document.querySelector('.js')
let input =  document.createElement('input')
input.type = 'text'
div.appendChild(input)
console.log(input)
input.onchange = function(){
    updateDisplay(input.value)
}


// let pow = function(a,b){
//     return b ** a;
// }
// // partial application
// let sqr = pow.bind(null, 2)
// console.log(pow(2,5))//25
// console.log(pow(2,4))//16
// console.log(sqr(4))//16
// console.log(sqr(5))// 25

// let isValid = name => name.split(' ').length == 2
// const names = ['ivan', 'pupi lalal', 'valid name', 'invalid 3 name']
// let result = names.filter(isValid)
// console.log(result)

// function add(a,b){
//     return a+b
// }
// function calculate(func,arg1,arg2){
//     let result = func(arg1,arg2)
//     return result
// }
// let sum = calculate(add,5,10)
// let anotherSum = calculate(add(5,10),10,20)
// console.log(sum)
//console.log(anotherSum)