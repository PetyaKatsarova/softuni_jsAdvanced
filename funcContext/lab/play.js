function speak(msg,endMsg){
    this.grades.forEach(gr=>{
        console.log(`${this.name} has ${gr}.${msg}`)
    })
    console.log(endMsg)
}
let person = {
    name: "Pete",
    grades: [2,3,4,6],
   // speak: speak
}
speak.call(person,'good job', 'second msg')
speak.apply(person, ['rock on', 'love u'])
//person.speak('bla','ku')
// BIND
let speakWrapper = speak.bind(person)
speakWrapper('try harder', 'u can do it')

// let so = {
//     name: "PK",
//     surname: "Lala",
//     fullName: function(){
//         return this.name + ' ' + this.surname
//     },
//     whatIsThis: function(){
//         return this
//     }
// }
// console.log(so.fullName())
// console.log('-----------------')
// console.log(so.whatIsThis())

// function outer(){
//     console.log(this) // returns the obj{name: 'Pete'}
//     function inner(){
//         console.log(this)// returns Window obj
//         console.log('#############################')
//     }
//     inner()
// }


// object not window
// const obj = {
//     name: 'Pete',
//     func: outer
// }
// obj.func()//object {name: 'Pete'}
// //window
// //but
// function outer(){
//     const inner = ()=> console.log(this)
//     inner()
// }