function sortBy2crit(arr){
   arr = arr.sort((a,b) => {
            return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase())
         })
         .forEach(el => console.log(el))
}

sortBy2crit([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ])
// Jack
// Isacc
// George
// Theodor
// Harrison