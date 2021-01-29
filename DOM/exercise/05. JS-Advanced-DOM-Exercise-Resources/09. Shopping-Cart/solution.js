function solve() {
   let addProduct = document.querySelectorAll('.add-product')
   const textArea = document.querySelector('textarea')
   const shoppingCart = document.querySelector('.shopping-cart')
   const checkout = document.querySelector('.checkout')
   let priceNum = 0
   let products = []

   // add product name and price to the text area on clicking add btn
   shoppingCart.addEventListener('click', (e)=>{
      if(e.target.classList.contains('add-product')){
         let name = e.target.parentNode.previousElementSibling.children[0].textContent;
         let price = e.target.parentNode.nextElementSibling.textContent;
         priceNum += Number(price)
         if(!products.join(', ').includes(name)){
            products.push(name)
         }
         textArea.value += `Added ${name} for ${price} to the cart.\n`
      }
   })
  
   // on click checkout bnt: 
   checkout.addEventListener('click', (e)=> {
        strProducts = products.join(', ')
        textArea.value += `You bought ${strProducts} for ${priceNum.toFixed(2)}.`
        // disable all btns
        let btns = document.getElementsByTagName('button')
        for(const btn of btns){
           btn.setAttribute('disabled' ,true)
        }
   })
}