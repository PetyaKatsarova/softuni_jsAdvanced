function solve() {
    const section = document.querySelectorAll("section")
    let correctAnswers = []
    
    for(const s of section){
      s.addEventListener('click', (e)=>{
          if(e.target.className = 'quiz-answer'){
              // push correctly clicked answers in correctAnswers arr
              let p = e.target
              if(p.textContent == 'onclick' || p.textContent == 'JSON.stringify()' || p.textContent == 'A programming API for HTML and XML documents'){
                  //console.log(p.textContent)
                  correctAnswers.push(p.textContent)
              }

              // hide prev q and display next q
              if(e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling && e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.classList.contains('hidden')) {
                  e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
                  e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.style.display = 'block'
                  e.target.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
              }else{
                  e.target.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
                  let results = document.getElementById('results')
                  let h1 = results.getElementsByTagName('h1')[0]
                  results.style.display = 'block'
                  h1.textContent = 'kulu'

                  if(correctAnswers.length == 3){
                      h1.textContent = "You are recognized as top JavaScript fan!"
                  }else if(correctAnswers.length == 2){
                      h1.textContent = "You have 2 right answers"
                  }else if(correctAnswers.length == 1){
                     h1.textContent = "You have 1 right answers"
                  }else {
                    h1.textContent = "You have 0 right answers"
                  }
                  
              }
          }
      })
    }
   
}
