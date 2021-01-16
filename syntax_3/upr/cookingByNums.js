function cookingByNums(arr){
    let num = Number(arr[0])
    for(let i=1; i<arr.length; i++){
        if(arr[i] === 'chop'){
            num = num / 2;
        }else if(arr[i] == 'dice'){
            num = Math.sqrt(num)
        }else if(arr[i] == 'spice'){
            num ++
        }else if(arr[i] === 'fillet'){
            num = num - num*.2
        }else if(arr[i] === 'bake'){
            num = num * 3;
        }
        console.log(num)
    }
}

cookingByNums([32, 'chop', 'chop', 'chop', 'chop', 'chop'])
// 16
// 8
// 4
// 2
// 1

console.log('-----------------')
cookingByNums([9,'dice', 'spice', 'chop', 'bake', 'fillet'])
// 3
// 4
// 2
// 6
// 4.8