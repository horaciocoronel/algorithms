// # prime numbers 

const isPrime = (number) => { 
  let isPrimeNum=''
  if (number <= 1) {
    return console.log('Not a prime number')
  }
  let count = 0;
  for (let i = 1; i < number; i++ ) {
    console.log('%',number%i)
    if(number%i !== 0 && count >= 3) {
      console.log(count)
      return console.log(`${number} Not a prime number`) 
    } else {
      count++
    
  }
}
// isPrimeNum = `${number} is a prime number`;
count = 0;
return console.log(isPrimeNum)
}

isPrime(5);