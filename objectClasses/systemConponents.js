function systemComponents(arr){
   let obj = {}
   for(let line of arr){
       let [el1,el2,el3] = line.split(' | ')
       if(!obj[el1]){
           obj[el1] = {}
       }
       if(!obj[el1][el2]){
           obj[el1][el2] = []
       }
       obj[el1][el2].push(el3)
   }

    Object.entries(obj).sort((a,b) =>  {
       return Object.entries(b[1]).length - Object.entries(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system, components]) => {
       console.log(system)
       Object.entries(components).sort((a,b)=> b[1].length - a[1].length)
                                .forEach(([component, subcomp]) => {
                                    console.log('|||' + component)
                                    subcomp.forEach(item => console.log('||||||' + item))
                                    
                                })
       
   })
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
  ])
//   Lambda
// |||CoreA
// ||||||A23
// ||||||A24
// ||||||A25
// |||CoreB
// ||||||B24
// |||CoreC
// ||||||C4
// SULS
// |||Main Site
// ||||||Home Page
// ||||||Login Page
// ||||||Register Page
// |||Judge Site
// ||||||Login Page
// ||||||Submittion Page
// |||Digital Site
// ||||||Login Page
// Indice
// |||Session
// ||||||Default Storage
// ||||||Default Security