function currencyFormatter(separator,symbol,symbolFirst,value){
    // Math.trunc(num) returns only the whole num and nothing after desetichna zapetaia
    //.toFixed() converts num into str !!
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2)
    if(symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol
}
//console.log(currencyFormatter(',','$', false,5345.2222))
const obj = {
    separator: ',',
    symbol: "$",
    symbolFirst: true
}
 let result = currencyFormatter.bind(null, ',', '$', )
// // function result(value){
// //     const obj = {
// //         separator: ',',
// //         symbol: "$",
// //         symbolFirst: true
// //     }
// //     return function bla(separator, symbol, symbolFirst){
// //        let str = `${obj.symbol}`;
// //     }
// }
// let dollarFormatter = result(currencyFormatter);
// console.log(dollarFormatter(5345));   // $ 5345,00
// console.log(dollarFormatter(3.1429)); // $ 3,14
// console.log(dollarFormatter(2.709));  // $ 2,71
