const reverseSentence = (sentence) => {
    const sentenceArr = sentence.split(' ');

    let wordArr = []
    for (let i = 0; i < sentenceArr.length; i++) {
        let wordReverse = sentenceArr[i].split('');
        let tempWordArr = [];
        for (let x = 0; x < wordReverse.length; x++) {
            let tempWord = wordReverse[x];
            tempWordArr.unshift(tempWord)
        }
        wordArr.push(tempWordArr.join(''))
    }
    wordArr.join('')
    // console.log('ReverseWord', wordArr.join(' '))
    return wordArr.join(' ')
}


console.log(reverseSentence('This is a test'))