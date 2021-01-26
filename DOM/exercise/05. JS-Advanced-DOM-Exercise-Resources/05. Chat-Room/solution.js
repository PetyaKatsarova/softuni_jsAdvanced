function solve() {
   const btn = document.querySelector("#send")
   let input = document.querySelector('#chat_input')
   let wrapper = document.querySelector("#chat_messages")
   console.log(input)

   btn.addEventListener('click', ()=>{
      let newDiv = document.createElement('div')
      newDiv.classList.add('my-message')
      newDiv.classList.add('message')
      newDiv.textContent = input.value
      wrapper.appendChild(newDiv)
      input.value = ''
   })
}


