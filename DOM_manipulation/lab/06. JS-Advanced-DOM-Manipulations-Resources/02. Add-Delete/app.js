// shows wrong in judge checking system
function addItem() {
     //read the text in input 
   let inpt = document.querySelector('#newText')
   const ul = document.querySelector('#items')
   let items = document.querySelector('#items')

   //create li el and add the inpt value as text
   let li = document.createElement('li')
   li.textContent = `${inpt.value}\n`
   // crete link with delete text
   let a = document.createElement('a')
   a.textContent = '[Delete]'
   a.setAttribute('href','#')
   //a.style.color = 'tomato'
   a.style.cursor = 'pointer'
   // append that text to a li inisde the html
   li.appendChild(a)
   ul.appendChild(li)
   inpt.value = ''
   // on clicking the link delete the curr li el
   items.addEventListener('click', (e)=>{
       if(e.target.tagName == 'A'){
            e.target.parentNode.remove()
       }
   })
}