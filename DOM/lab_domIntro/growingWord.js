function growingWord(){
    const word = document.querySelector('#exercise > p');
    let px = 2;
    let colorChanges = {
        "blue": "green",
        "green": "red", 
        "red": "blue"
    } 
    if(!word.hasAttribute("style")){
        word.setAttribute("style", `color:blue, font-size: ${px}px`);
    }else{
        let currPx = word.style["font-size"];
        px = currPx.substr(0, currPx.length - 2)*2;
        let currColor = word.style.color;
        word.setAttribute("style", `color:${colorChanges[currColor]}; font-size: ${px}px`)
    }
}

// console.dir(window)
// console.dir(navigator)
// console.dir(screen)
// console.dir(location)
// console.dir(history)
// console.dir(document)
// alert(window.navigator.userAgent)
// console.log(navigator.language)
console.log(screen.width + " x " + screen.height)// didtn work
//document.location = "https://softuni.bg"
//history.back()
