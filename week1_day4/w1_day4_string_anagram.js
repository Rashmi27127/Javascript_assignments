
// Example 1: Find the length of the last word

function lastWordLength(s) {
    let words = s.split(" ");
    let lastWord = words[words.length - 1];
    return lastWord.length;
}

let s1 = "Hello World";

console.log(lastWordLength(s1));


// Example 2: Find the length of the last word after trimming spaces

function lastWordLengthWithTrim(s) {
    let trimmedString = s.trim();
    let words = trimmedString.split(" ");
    let lastWord = words[words.length - 1];
    return lastWord.length;
}

let s2 = " fly me to the moon ";

console.log(lastWordLengthWithTrim(s2));


// Example 3: Check if two strings are anagrams

function isAnagram(str1, str2) {
    let first = str1.replaceAll(" ", "").toLowerCase().split("").sort().join("");
    let second = str2.replaceAll(" ", "").toLowerCase().split("").sort().join("");

    return first === second;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
