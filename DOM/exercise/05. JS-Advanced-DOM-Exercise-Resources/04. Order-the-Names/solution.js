function solve() {
    let input = document.querySelector("input")
    let btn = document.querySelector('button')

    let database = {} // obj key: letter , prop: number
    let index = 0;
    for(let i = 65; i<=90; i++){
        let letter = String.fromCharCode(i);
        database[letter] = index++
    }
    btn.addEventListener('click', ()=> {
        let li = document.getElementsByTagName("ol")[0].children;
        //li = Array.from(li)
         let currentName = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase();
        let capitalLetter = currentName[0]
        if(database[capitalLetter]  != undefined){
            let currentIndex = database[capitalLetter]
            let currentElement = li[currentIndex]

            if(currentElement.textContent != ''){
                currentElement.textContent += ', '
            }
            currentElement.textContent += currentName
        }
        input.value = ''
    })

}