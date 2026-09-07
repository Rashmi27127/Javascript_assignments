
// Function to reverse a string

function reverseString(str) { // hello
    let characters = str.split(""); //["h", "e", "l","l", "o"]
    let reversedString = "";

    for (let i = characters.length - 1; i >= 0; i--) { // i= 5-1; 4>=0;   2 step: 4-- =3 so i =3 now and loops so on
        reversedString = reversedString + characters[i];// "" + "o"
    }

    console.log("Reversed string:", reversedString);
    return reversedString; //"olleh"
}


// Function to check if the string is a palindrome

function isPalindrome(str) {
    let reversedString = reverseString(str); //olleh=hello

    if (str === reversedString) {
        return true;
    } else {
        return false; //false 
    }
}


// Test the functions

console.log("Is madam a palindrome?", isPalindrome("madam"));
console.log("Is hello a palindrome?", isPalindrome("hello"));
console.log("Is level a palindrome?", isPalindrome("level"));
console.log("Is racecar a palindrome?", isPalindrome("racecar"));

