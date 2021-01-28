function solve() {
   let addProduct = document.querySelectorAll('.add-product')
   const textArea = document.querySelector('textarea')
   const shoppingCart = document.querySelector('.shopping-cart')

   shoppingCart.addEventListener('click', (e)=>{
      if(e.target.classList.contains('add-product')){
         let names = document.querySelectorAll('.product-title')
         let prices = document.querySelectorAll('.product-line-price')
         for(let i=0; i<names.length;i++){
            textArea.value = `Added ${names[i].textContent} for ${prices[i].textContent} to the cart.`
         }
      }
   })
}