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

function outer(){
    console.log(this) // returns the obj{name: 'Pete'}
    function inner(){
        console.log(this)// returns Window obj
        console.log('#############################')
    }
    inner()
}
const obj = {
    name: 'Pete',
    func: outer
}
obj.func()