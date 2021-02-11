function solution(num){
   // let num = 5;
    return function bka(num2){
        return num + num2
    }
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));	//7
//8
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));	//9
//10
console.log(solution(1)(2))//3
