function create(arr) {
   const content = document.querySelector('#content')
   let p;
   let div;
   for(let line of arr){
      div = document.createElement('div')
      p = document.createElement('p')
      p.textContent = line
      p.style.display = 'none'
      div.appendChild(p)
      content.appendChild(div)
   }
   content.addEventListener('click',(e)=>{
      if(e.target.tagName == 'DIV'){
         e.target.children[0].style.display = 'inline-block'
      }
   })
}