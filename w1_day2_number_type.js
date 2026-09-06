
function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Neutral";
    }
}

let number = 0;

console.log(checkNumberType(number));
