/*function returnsSomething(){
    return 5; //return number 5
}
const value = returnsSomething(); // calls the function first and stores it in a variable named value

console.log(value) //logs variable named value which stores the function
*/ 

function celsiusToFahrenheit (celsius){
    return ((celsius*9/5) + 32)
}
const celsiusOutput = 32;
let result = celsiusToFahrenheit(32)
console.log(celsiusOutput + '°C equals ' + result + '°F');