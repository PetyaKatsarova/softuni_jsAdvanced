function lastKnums(n,k){
    let sequence = []
    let total = 1;

    for(let i=0; i<n; i++){
        for(let j=0; j<k; j++){
           total += j;
        }
        sequence.push(total)
    }
    console.log(sequence)
}

lastKnums(6,3) /[1,1,2,4,7,13]

function twoDarrMaxNum(arr){
    let maxNum = Number.MIN_SAFE_INTEGER;
    arr.forEach(row => {
        let currMax = Number.MIN_SAFE_INTEGER;

        row.forEach(num => {
            if(num > currMax){
                currMax = num
            }
        })
        if(currMax > maxNum){
            maxNum = currMax
        }
    })

    console.log(maxNum)
}

