function solve() {
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");

    let sentence = input.textContent.split('. '); // str to arr
    let result = []

    for(let i=0; i<sentence.length; i++){
        let p = document.createElement('p')
        result.push(sentence[i])
        
        if(i == 2 || (i != 0 && i % 3 ==0)){
            console.log(result)
            console.log("&&&&&&&&&&&&&&&&&&&&777")
            p.textContent = result.join('. ')
            output.appendChild(p)
            result = []
    }
}