// 80% solved
function magicMatrices(matrix){
   // check if sum of rows and columns is equal
    let rowSums = []
    let colSums = []
    let colSum0 = 0;
    let colSum1 = 0;
    let colSum2 = 0;
    matrix.forEach((row,index) => {
        let rowSum = row.reduce((acc, item) => acc+=item, 0)
        rowSums.push(rowSum)

        colSum0 += row[0]
        colSum1 += row[1]
        colSum2 += row[2]
    })
    colSums.push(colSum0,colSum1, colSum2)
    let flag = true
    colSums.forEach((el,i) => {
        if(el != rowSums[i]){
           flag = false
        }
    })
    // for(let i=1; i<=colSums.length; i++){
    //     if(colSums[i] !== colSums[i-1]){
    //         flag = false;
    //     }
    // }
    if(flag === true){
        console.log(true)
    }else{
        console.log(false)
    }
}


magicMatrices([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ])//true
magicMatrices([ [ 11, 32, 45 ], [ 21, 0, 1 ], [ 21, 1, 1 ] ])// false
magicMatrices([ [ 1, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ] ])// true
