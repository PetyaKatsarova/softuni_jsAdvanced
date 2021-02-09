
// let fib = fibunator()
// console.log(fib())//1
// console.log(fib())//1
// console.log(fib())//2
// console.log(fib())//3 , 5,8,13

// closure
// function getFib(){
//     let currNum = 0; 
//     let nextNum = 1;
//     function fib(){
//         let fibNum = currNum + nextNum
//         currNum = nextNum
//         nextNum = fibNum
//         return currNum
//     }
//     return fib;
// }

// solution 2
function getFib(){
    let currNum = 0; 
    let nextNum = 1;
    return () => {
        let fibNum = currNum + nextNum
        currNum = nextNum
        nextNum = fibNum
        return currNum
    }
}

    let bla = getFib()
    console.log(bla())
    console.log(bla())
    console.log(bla())
    console.log(bla())
    console.log(bla())
    console.log(bla())
    console.log(bla())
    console.log(bla())
//