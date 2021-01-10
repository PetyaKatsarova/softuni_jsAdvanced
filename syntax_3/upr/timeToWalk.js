function timeToWalk(numSteps, stepLength, speed){
   let distanceInMtrs = numSteps * stepLength // in meters
   let speedInSecs = speed / 3.6 //  ot km/hr into ms/sec: 1km = 1000m , 1hr = 3600 s; speed / 1000/ 3600 
   const rest = Math.floor(distanceInMtrs / 500);
   let time = distanceInMtrs / speedInSecs + rest * 60;

   let timeHrs = Math.floor(time / 3600)
   let timeMins = Math.floor(time / 60)
   let timeSec = Math.ceil(time % 60)
   console.log(`${timeHrs < 10 ? 0 : ""}${timeHrs}:${timeMins < 10 ? 0 : ""}${timeMins}:${timeSec < 10 ? 0 : ""}${timeSec}`)
}

timeToWalk(4000, 0.6, 5)
//00:32:48
console.log('---------------')
timeToWalk(2564, 0.7, 5.5)
//00:22:35