function buyFruit(item, weight, price){
    let result = weight*price/1000;
    console.log(`I need $${result.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${item}.`)
}

buyFruit('orange', 2500, 1.8);
//I need $4.50 to buy 2.50 kilograms orange.
console.log('-------------------------')
buyFruit('apple', 1563, 2.35)
//I need $3.67 to buy 1.56 kilograms apple.