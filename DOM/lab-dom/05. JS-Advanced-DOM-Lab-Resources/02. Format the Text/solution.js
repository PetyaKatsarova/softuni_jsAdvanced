function solve() {
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");
    let paragraph = document.createElement('p');

    let proba = input.textContent; // str
    // convert to arr of sentences
    proba = proba.split('. ')
    for(let i=1; i<=proba.length; i++){
        if(proba[i] > 0){
          paragraph.innerHTML = '';
            while(i % 3 != 0 || i != proba.length-1){
              paragraph.innerHTML += proba[i] + '. ';
            }
            output.appendChild(paragraph);
        }
        console.log(proba[i])
    }
  //  console.log(proba)
}