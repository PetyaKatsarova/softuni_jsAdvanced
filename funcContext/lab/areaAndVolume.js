function solve(area,volume,input){
    let objects = JSON.parse(input)
   let result = objects.map(obj=>{
       return {
           area: Math.abs(area.call(obj)),
           volume: Math.abs(volume.call(obj))
       };
   });
   return result;
}

function area(){
    return this.x * this.y;
}
function volume(){
    return this.x * this.y * this.z;
}

console.log(solve(area,volume,`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))
  	// [{ area: 2, volume: 20 },
    //  { area: 49, volume: 490 },
    //  { area: 10, volume: 100 }]
        
        
