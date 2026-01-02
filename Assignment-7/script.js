// calculator
// To show the display the input value
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
// To clear the display
function clearDisplay(){
    display.value = "";

}
// to calculate the given inpute's
function calculate(){
    display.value = eval(display.value);
}
// for square the given  value 
function square() {
    let value = document.getElementById("display").value;
    //  we are checking the input value is not empty
    if (value !== "") {
        document.getElementById("display").value = value * value;
    }
}
// for cube the given  value
function cube() {
    let value = document.getElementById("display").value;

    if (value !== "") {
        document.getElementById("display").value = value * value * value;
    }
}