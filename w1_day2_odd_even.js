function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number = 8;

console.log(isOddOrEven(number));