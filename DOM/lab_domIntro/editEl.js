function editEl(el,match, replacer){
   let str = el.textContent;
   str = str.split(' ')
   let result = []
    for(let word of str){
        if(word == match){
            word = replacer
        }
        result.push(word)
    }
    let text = result.join(' ')
    el.textContent = text;
}
 console.log(editEl('bla kuku bla again bla', 'bla', 'yes'))

