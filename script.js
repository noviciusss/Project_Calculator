const result = document.getElementById('show');
const numbers = document.querySelectorAll('#numbers');


function calculate(value) {
    try{const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        result.value = "Cannot divide by 0";
        setTimeout(() => {
        result.value = "";
    }, 1300);
    } else {
        result.value = calculatedValue;
    }
    }catch(error){
        alert("Error: Please try Again.")
    }
}
function showResult(givenValue){
    if(!result.value){
        result.value +="";
    }
        result.value+=givenValue;
    
    document.addEventListener("keydown", keyboardInputHandler);
}
function keyboardInputHandler(e) {
    
    e.preventDefault();
    

    
    if (e.key === "0") {
        result.value += "0";
    } else if (e.key === "1") {
        result.value += "1";
    } else if (e.key === "2") {
        result.value += "2";
    } else if (e.key === "3") {
        result.value += "3";
    } else if (e.key === "4") {
        result.value += "4";
    } else if (e.key === "5") {
        result.value += "5";
    } else if (e.key === "6") {
        result.value += "6";
    } else if (e.key === "7") {
        result.value += "7";
    } else if (e.key === "7") {
        result.value += "7";
    } else if (e.key === "8") {
        result.value += "8";
    } else if (e.key === "9") {
        result.value += "9";
    }


    if (e.key === "+") {
        result.value += "+";
    } else if (e.key === "-") {
        result.value += "-";
    } else if (e.key === "*") {
        result.value += "*";
    } else if (e.key === "/") {
        result.value += "/";
    }

    
    if (e.key === ".") {
        result.value += ".";
    }

    
    if (e.key === "Enter") {
        calculate(result.value);
    }

    
    if (e.key === "Backspace") {
        const resultInput = result.value;
    
        result.value = resultInput.substring(0, result.value.length - 1);
    }
}
function backSpace(value){
    
        const resultInput = result.value;
    
        result.value = resultInput.substring(0, result.value.length - 1);
    
}

    // function adjustFontSize() {
    //     const maxLength = 9; 
    //     const baseSize = 3.5; 
    //     const minSize = 2; 
    
    //     if (result.value.length > maxLength) {
    //         const newSize = Math.max(minSize, baseSize - (result.value.length - maxLength));
    //         result.style.fontSize = `${newSize}rem`;
    //     } else {
            
    //         result.style.fontSize = `${baseSize}rem`;
    //     }
    // }

    
    // result.addEventListener('input', adjustFontSize);
    // adjustFontSize();
