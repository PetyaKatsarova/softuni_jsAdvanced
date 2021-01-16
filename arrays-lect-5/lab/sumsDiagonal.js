function diagonalSums(arr){
   let sumFirstD = 0;
   let sumSecondD = 0;
   let first = 0
   let last = arr.length-1

   arr.forEach(el => {
       sumFirstD += el[first++]
       sumSecondD += el[last--]
   })

   console.log(sumFirstD + ' ' + sumSecondD);
}

diagonalSums([ [ 3, 5, 17 ], [ -1, 7, 14 ], [ 1, -8, 89 ] ]) //99 25

