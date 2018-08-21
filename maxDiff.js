// Find max difference between two number in an array, such that larger number is behind the smaller one ie: [2, 4, 7, 6, 10, 9, 2] => 8 (10-2)

const myArray = [2, 4, 7, 6, 10, 9, 2];

maxDiff = (array) => {
  let largest = 0;
  let largestDiff = 0;
  
  array.forEach(number => {
    if (number > largest) {
      largest = number
    }
    if ((largest - number) > largestDiff) {
      largestDiff = largest - number
    }
  });
    return largestDiff
}

maxDiff(myArray)
