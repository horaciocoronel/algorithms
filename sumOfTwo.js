let numbers = [3,8,0,10,7,1,4]

const sumOfTwo = (num, numbersArr) => {
    let sum;
    for (let i = 0; i < numbersArr.length; i++) {
        let firstNumber = numbersArr[i]
        let secondArr = numbersArr.slice()
        console.log('sec', secondArr)
        for (let x = 0; x< secondArr.length; x++) {
            secondArr.splice(i, 1)
            let secondNumber = numbersArr[x]
            console.log(firstNumber, secondNumber)
            sum = firstNumber + secondNumber
            if(sum === num) {
                console.log('true',numbersArr)
                // console.log('equal', sum)
                return true
            }
        }
    }
    console.log('false',numbersArr)
    return false
}


console.log(sumOfTwo(1, numbers))