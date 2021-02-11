class Hex{
    constructor(value){
        this.value = value;
    }
    valueOf(){
        return Number(this.value)
    }
    toString(){
        //show its hexidecimal value starting with "Ox"
       return "0x" + (this.value.toString(16)).toUpperCase();
    }
    plus(num){
        let result = num + this.value
        return new Hex(result)
    }
    minus(num){
        return new Hex(this.value - num)
    }
    parse(str){
        return parseInt(str,16)
    }
}

let FF = new Hex(255)
 console.log(FF.toString()) //0xFF
 console.log(FF.valueOf()+1) == 256//256
let a = new Hex(10)
let b = new Hex(5)
// console.log(a.toString())// 0xa
// console.log(b.toString())//0x5
console.log(a.plus(b).toString())// 0xF

 console.log(a.plus(b).toString()== '0xF')// true
