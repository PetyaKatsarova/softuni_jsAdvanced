class Person {
    constructor(fn, ln){
        this.firstName = fn,
        this.lastName = ln
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value){
        let pattern = /\w \w/;
        if(pattern.test(value)){
            let [firstName, lastName] = value.split(' ')
            this.firstName = firstName
            this.lastName = lastName
        }
    }
}
let pk = new Person('p', 'k')
pk.fullName = 'kuku lala'
pk.firstName = 'hihi'
console.log(pk.fullName)