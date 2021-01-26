function addItem() {
    let text = document.getElementById('newItemText')
    let val = document.getElementById('newItemValue')
    let select = document.getElementById('menu')
    let option = `<option value='${val.value}'>${text.value}</option>`
    select.innerHTML += option

    text.value = ''
    val.value = ''
}