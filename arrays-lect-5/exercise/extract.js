function extract(arr){
    let max = Number.MIN_SAFE_INTEGER;
//    arr.forEach(el => {
//        if(el >= max){
//            max = el;
//            console.log(max)
//        }
//    });
// solution with reduce s
let result = arr.reduce((acc, item) => {
    if(max <= item){
         max = item;
        acc.push(max)
    }
    return acc;
}, []);
result.forEach(el => console.log(el))
}

extract([1, 3, 8, 4,10,12, 3, 2,24])
// 1
// 3
// 8
// 10
// 12
// 24