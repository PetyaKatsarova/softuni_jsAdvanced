function solve() {
    let quiz_answer = document.querySelectorAll(".quiz-answer")
    const section = document.querySelectorAll("section")

    console.log(quiz_answer)
    for(let answer of quiz_answer){
      answer.addEventListener('click', ()=>{
          if(answer.nextElementSibling && answer.nextElementSibling.classList.contains('hidden')){
            answer.nextElementSibling.classList.remove('hidden')
          }
      })
    }
}
