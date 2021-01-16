function printEveryNthEl(arr, step){
    // for(let i=0; i<arr.length; i += step){
    //     console.log(arr[i])
    // }
    arr.forEach((el, index) => {
        if(index %step === 0){
            console.log(el)
        }
    })
}

printEveryNthEl([ '5', '20', '31', '4', '20' ], 2)
// 5
// 31
// 20