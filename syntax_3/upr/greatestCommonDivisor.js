function greatestCD(num1, num2){
    const biggest = Math.max(num1, num2)
    const smallest = Math.min(num1, num2)

    for(let i=smallest; i>=0; i--){
        if(biggest % i == 0 && smallest % i == 0){
            console.log(i)
            break
        }
    }
}

greatestCD(15, 5)///5
console.log('-----------------')
greatestCD(2154, 458) //2