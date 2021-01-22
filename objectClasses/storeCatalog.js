function storeCatalog(arr){
 // order alphabetically
    let result = {}

    for(let line of arr){
        let [name, price] = line.split(' : ')
        price = Number(price)
        let letter = name[0]
        if(!result[letter]){
            result[letter] = []
        }
        result[letter].push([name,price])

    }
    let sortedByLetter = Object.entries(result).sort((a, b)=>a[0].localeCompare(b[0]))
    
    for(let i=0; i<sortedByLetter.length; i++){
        console.log(sortedByLetter[i][0])
        let sortByName = sortedByLetter[i][1].sort((a,b)=> a[0].localeCompare(b[0]))
        sortByName.forEach(el => {
            console.log(`  ${el[0]}: ${el[1]}`)
        })
    }   
}

storeCatalog([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
])
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499
console.log('----------------------')
storeCatalog([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
  ])
//   B
//   Banana: 2
//   Barrel: 10
// P
//   Pesho: 0.000001
// R
//   Rali Car: 2000000
//   Raspberry P: 4999
//   Rolex: 100000
//   Rollon: 10
//   Rubic's Cube: 5