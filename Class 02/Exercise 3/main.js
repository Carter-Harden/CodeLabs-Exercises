// the parameters (aka parenthasis on this function) are used to give that function data such as variables: strings, arrays, numbers, booleans, and etc. 
// These parameters are used only within the function

function myMultiples(num, length) {
    
    // "arr" is referring to the array holding the multiples being sent to the console.

    let arr = [];

    // the "for loop" is being used to loop a set amount of times, in this case, until length is met.

    for (let i = 0; i<length; i++) {

// let number is being used to create multiples of the param "num" with each iteration ("i") which sets this to the variable number

        let number = num + num * i;
        arr.push(number);

        // arr.push is adding whatever is in the parentheses to the array "arr"
    }
    // return is telling the function what to return or (send back)

return arr;

}
// console.log is being used to display the results to the console. We are displaying the "myMultiples" return value by calling the myMultiples function and passing in the num and length as parameters.

console.log (myMultiples(7,5))
