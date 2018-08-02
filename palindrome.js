// Question: How will you verify a word as palindrome?

const myWord = 'kayak';

const isPalindrome = (word) => {
    word = word.toLowerCase();
    let checkWord = word.split('');
    let reversedArr = [];
    for (let i = checkWord.length-1; i >= 0; i--) {
        reversedArr.push(checkWord[i])
    }
    if (reversedArr.join('') === word) {
        return true
    }
    return false
}

console.log(isPalindrome(myWord))