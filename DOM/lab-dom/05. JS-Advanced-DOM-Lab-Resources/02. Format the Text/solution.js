function solve() {
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");

    let sentence = input.textContent.split('.'); // str
    let start = '';

    for(let i=0; i<sentence.length; i++){
        let paragraph = document.createElement('p');
        start += sentence[i] + '.';
        if(i % 3 == 0 && i !== 0){
            
            paragraph.textContent = start
            output.appendChild(paragraph);
            start = ''
        }
    }
}