// 80% solved
function heros(arr){
    let result = []
   for(let line of arr){
        let[name, level, items] = line.split(' / ')
        items = items.split(', ');
        let obj = {
            'name': name,
            'level': Number(level),
            'items': items
        }
        result.push(obj)
   }

   console.log(JSON.stringify(result))
}
heros([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ])
//   [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]