// i dont understand it

function Spy(target,method){
    let originalFunc = target[method]
    let result = { count: 0 }

    target[method]=function(){
        result.count++
        return originalFunc.apply(this,arguments)
    }
    return result
}

let obj = {method: ()=>"invoked"}
let spy = Spy(obj,'method')

obj.method()
obj.method()
obj.method()
obj.method()
console.log(spy)
console.log('-------------')

// let spy = Spy(console,"log");
// console.log(spy); // { count: 1 }
// console.log(spy); // { count: 2 }
// console.log(spy); // { count: 3 }
