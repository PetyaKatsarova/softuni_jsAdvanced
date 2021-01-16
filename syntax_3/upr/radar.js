function radar(speed, area){

   if(area == 'city'){
       if(speed <= 50){
           console.log(`Driving ${speed} km/h in a 50 zone`);
       }else{
           let difference = speed - 50
           console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${speedingStatus(difference)}`)
       }
    }else if(area == 'residential'){
        if(speed <= 20){
            console.log(`Driving ${speed} km/h in a 20 zone`);
        }else{
            let difference = speed - 20
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${speedingStatus(difference)}`)
        }
   } else if(area == 'interstate'){
        if(speed <= 90){
            console.log(`Driving ${speed} km/h in a 50 zone`);
        }else{
            let difference = speed - 90
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${speedingStatus(difference)}`)
        }
   }else  if(area == 'motorway'){
        if(speed <= 130){
            console.log(`Driving ${speed} km/h in a 130 zone`);
        }else{
            let difference = speed - 130
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${speedingStatus(difference)}`)
        }
   }


   function speedingStatus(speeding){
       if(speeding <= 20) speeding = 'speeding'
       else if(speeding <= 40) speeding = 'excessive speeding'
       else speeding = 'reckless driving'
       return speeding
   }
}

radar(40, 'city') //Driving 40 km/h in a 50 zone
console.log("-------------------------")
radar(21, 'residential') //The speed is 1 km/h faster than the allowed speed of 20 - speeding
radar(120, 'interstate')//The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
radar(200, 'motorway')//The speed is 70 km/h faster than the allowed speed of 130 - reckless driving