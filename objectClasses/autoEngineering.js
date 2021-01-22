function autoEngineering(arr){
    let result = []

    for(let line of arr){
        let obj = {}
        let [brand, model, num] = line.split(' | ')
        obj['brand'] = brand
        obj['model'] = model
        obj['number'] = num
        result.push(obj)
    }

    for(let line of result){
        console.log(line)
    }
}

autoEngineering([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
  ])
// Mercedes-Benz
// ###50PS -> 123
// ###60PS -> 3000
// ###W210 -> 100
// ###W163 -> 200
// Mini
// ###Clubman -> 21000
// ###Convertible -> 1000
// ###Countryman -> 100
// Hyunday
// ###Elantra GT -> 20000