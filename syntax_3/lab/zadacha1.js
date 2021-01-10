function aggregateEls(els){
     aggregate(els, 0, (a,b) => a+b);
     aggregate(els, 0, (a,b) => a+1/b);
    aggregate(els, '', (a,b) => a+b);

    function aggregate(arr, initVal, func){
        let val = initVal
        for(let i=0; i<arr.length; i++){
            val = func(val, arr[i])
            console.log(val)
        }
        // console.log(val)
    }
}

aggregateEls([1,2,4])