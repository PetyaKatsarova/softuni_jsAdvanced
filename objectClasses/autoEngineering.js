function autoEngineering(arr){
    let obj = {}

    for(let line of arr){
        let [brand, model, num] = line.split(' | ')
        num = Number(num)
        if(!obj[brand]){
            obj[brand] = []
        }
        obj[brand].push([model,num])        
    }

    let bla = Object.entries(obj).sort((a,b)=>a[0].localeCompare(b[0]))
    for(let i=0; i<bla.length; i++){
        console.log(bla[i][0])
        let [model,price] = bla[i][1].join(',').split(',')
        price = Number(price)
        if(model.length >0){
            model = model.filter(el => {
                el 
            })
        }
    }
}

autoEngineering([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 50PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | 50PS | 100',
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