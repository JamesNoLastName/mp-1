function checkNegative(number) {
    if(number < 0){
        document.getElementById("output").style.color = "red";
    }
    else{
        document.getElementById("output").style.color = "white";
    }
}

function addF(){
    let numOne = Number(document.getElementById("inputOne").value);
    let numTwo = Number(document.getElementById("inputTwo").value);
    let numThree = numOne + numTwo;
    checkNegative(numThree);
    document.getElementById("output").innerText = String(numThree);
}

function subtractF(){
    let numOne = Number(document.getElementById("inputOne").value);
    let numTwo = Number(document.getElementById("inputTwo").value);
    let numThree = numOne - numTwo;
    checkNegative(numThree);
    document.getElementById("output").innerText = String(numThree);
}
function divideF(){
    let numOne = Number(document.getElementById("inputOne").value);
    let numTwo = Number(document.getElementById("inputTwo").value);
    let numThree = numOne / numTwo;
    checkNegative(numThree);
    document.getElementById("output").innerText = String(numThree);
}
function multiplyF(){
    let numOne = Number(document.getElementById("inputOne").value);
    let numTwo = Number(document.getElementById("inputTwo").value);
    let numThree = numOne * numTwo;
    checkNegative(numThree);
    document.getElementById("output").innerText = String(numThree);
}
function exponentF(){
    let numOne = Number(document.getElementById("inputOne").value);
    let numTwo = Number(document.getElementById("inputTwo").value);
    let numThree = numOne + numTwo;
    let val = 1;
    // Turn exponent positive to run through the loop
    let isNeg = 0;
    if(numTwo < 0){
        numTwo = numTwo * -1;
        isNeg = 1;
    }
    for (let i = 0; i < numTwo; i++) {
        val = val * numOne;
    }
    // If we set numTwo to positive to run the loop, we reciprocate our fraction
    if(isNeg == 1){
        val = 1 / val;
    }
    checkNegative(val);
    document.getElementById("output").innerText = String(val);
}
function clearF(){
    document.getElementById("inputOne").value = "";
    document.getElementById("inputTwo").value = "";
    document.getElementById("output").innerHTML = "";
}
