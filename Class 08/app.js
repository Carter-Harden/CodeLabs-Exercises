function baseNumber(num) {
    return function addNumbers (num2) {
        return (num + num2)
    }
}

const plusFive = baseNumber(5)
const plusSeven = baseNumber(7)
const answer = plusFive(10)
const answer2 = plusSeven(10)
console.log(answer)
