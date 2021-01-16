function rotate(arr, num){
   for(let i=1; i<=num; i++){
       arr.unshift(arr.pop())
   }
   console.log(arr.join(' '))
}


rotate([1,2,3,4], 2)//3 4 1 2
rotate(['b', 'or','c', 'a'], 15)// or c a b