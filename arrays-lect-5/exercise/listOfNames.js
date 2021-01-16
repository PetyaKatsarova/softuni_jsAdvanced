function listOfNames(arr){
   arr = arr.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
   arr.forEach((el, index) => {
       console.log((index+1) + '.' + el)
   })
}

listOfNames([ 'John', 'Bob', 'Christina', 'Ema' ])
//1.Bob
// 2.Christina
// 3.Ema
// 4.John