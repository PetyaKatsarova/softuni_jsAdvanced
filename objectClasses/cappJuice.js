function cappyJuice(arr){
    // let result = {}
    // let juiceInOrder = {}
    // for(let line of arr){
    //     let [fr, quantity] = line.split(' => ')
    //     if(!result[fr]){
    //         result[fr] = Number(quantity)
    //     }else{
    //         result[fr] += Number(quantity)
    //     }
    //     if(result[fr] >= 1000){
    //         juiceInOrder[fr] = 0;
    //     }
    // }
    
    // Object.keys(result).forEach(j=>juiceInOrder[j] += result[j])
    // Object.keys(juiceInOrder).forEach(j=>{
    //     let box = Math.floor(juiceInOrder[j]/1000)
    //     if(box >=1){
    //         console.log(`${j} => ${box}`)
    //     }
    // })

    // solution 2
    const obj={}
    const juices = []
    arr.forEach(el => {
        let [juice, quantity] = el.split(' => ')
        obj[juice] ? obj[juice].quantity += Number(quantity) : obj[juice] = {
            quantity: Number(quantity)
        }

        if(obj[juice].quantity >=1000){
            if(!juices.includes(juice)){
                juices.push(juice)
            }
        }
    })
    for(const key of juices){
        console.log(`${key} => ${parseInt(obj[key].quantity/1000)}`)
    }
}

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
  ])
// Pear => 8
// Watermelon => 10
// Kiwi => 4