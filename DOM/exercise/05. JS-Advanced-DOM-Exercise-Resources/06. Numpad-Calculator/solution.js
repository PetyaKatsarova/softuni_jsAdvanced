function solve() {
    let displayField = document.querySelector("#expressionOutput")
    let resultOutput = document.querySelector("#resultOutput")

    document.querySelector('.keys').addEventListener("click",symbolClicked) // div holding btns
    document.querySelector(".clear").addEventListener("click", clear) //C

    function clear(){
        displayField.textContent = ''
        resultOutput.textContent = ''
    }
    function symbolClicked(e){
        //let btnPressed = e.target.value
        switch (e.target.value){
            case "/":
            case '*':
            case '+':
            case '-':
                displayField.textContent += ` ${e.target.value} `
                break;
            case '=':
                let [leftOperand, operator, rightOperand] = displayField.textContent.split(" ")
                // console.log(leftOperand)
                // console.log(rightOperand)
                if(!rightOperand || !operator){
                    resultOutput.textContent = "NaN"
                }else{
                    resultOutput.textContent = calculateResult(Number(leftOperand),operator,Number(rightOperand))
                }
                break;
            default:
                displayField.textContent += e.target.value
        }
    }

    function calculateResult(leftOperand,operand,rightOperand){
        switch(operand){
            case '*':
                return leftOperand * rightOperand;
            case '/': 
                return leftOperand / rightOperand;
            case '+':
                return leftOperand + rightOperand;
            case '-':
                return leftOperand - rightOperand;
            default:
                displayField.textContent += operand;
        }  
    }
}