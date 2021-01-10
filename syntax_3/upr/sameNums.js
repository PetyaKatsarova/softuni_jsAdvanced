function sameNums(num){
   let sth = num.toString()
   let sum = 0;
   let isEqual = true;
   for(let i=0; i<sth.length-1; i++){
       if(sth[i] !== sth[i+1]){
           isEqual = false;
           console.log('false');
           break
       }
   }
   if(isEqual){
       console.log('true')
   }
   for(let el of sth){
       sum += Number(el)
   }
   console.log(sum)
}

sameNums(2222222)
//true
//14
console.log('---------------------')
sameNums(1234)
// false
// 10