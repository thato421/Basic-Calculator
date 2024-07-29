// Main JS File

const calcInput = document.querySelector(".calc_input");

const calcOutput = document.querySelector(".calc_output");

function addOne(number){

    calcInput.value += '1';

}
function addTwo(number){

    calcInput.value += '2';

}
function addThree(number){

    calcInput.value += '3';

}
function addPlus(){

    calcInput.value += '+';

}
function addDoubleZero(number){

    calcInput.value += '00';

}
function addZero(number){

    calcInput.value += '0';

}
function addPeriod(){

    calcInput.value += '.';

}
function addMinus(){

    calcInput.value += '-'

}
function addSix(number){

    calcInput.value += '6';

}
function addFive(number){

    calcInput.value += '5';

}
function addFour(number){

    calcInput.value += '4';

}
function addMultiply(){

    calcInput.value += '*';

}
function addNine(number){

    calcInput.value += '9';

}
function addEight(number){

    calcInput.value += '8';

}
function addSeven(number){

    calcInput.value += '7';

}
function addDivide(){

    calcInput.value += '/';

}
function addPercent(){

    calcInput.value += '/100';

}
function evalInput(){

    try{
    calcOutput.value = eval(calcInput.value);
    }
    catch (e){
        calcOutput.value = ('Invalid Format');
    }

}
function delChar(){

    calcInput.value = calcInput.value.slice(0, -1);

}
function clearInputOutput(){

    calcInput.value = '';

    calcOutput.value = '';

}
