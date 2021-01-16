function sorting(arr){
    //sort in pairs the smallest, the highest num, and next ones the same
    while(arr.length > 0){
        let max = arr[0]
        let min = arr[0]
        for(let i=0; i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i]
            }else if(arr[i] < min){
                min = arr[i]
            }
        }
       console.log(min)
       console.log(max)
        let indexMin = arr.indexOf(min)
        arr.splice(indexMin,1)
        let indexMax = arr.indexOf(max)
        arr.splice(indexMax,1)
    }
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
// -3
// 65
// 1
// 63
// 3
// 56
// 18
// 52
// 31
// 48
