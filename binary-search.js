numbers = [1, 2, 4, 6, 7, 9, 10, 14, 17, 18, 42, 99, 104]

const binarySearch = (num, numbers) => {

  let lo = 0;
  let hi = numbers.length -1;
  let mid = Math.floor((lo + hi) / 2);

  while (lo <= hi) {
    // console.log(lo, mid, hi)
    if(numbers[mid] === num) {
      return console.log(`Number found ${num}`)
    } else if (numbers[mid] < num) {
      lo = mid+1
      mid = Math.floor((lo + hi) / 2)
      } else if (numbers[mid] > num) {
        hi = mid -1
        mid = Math.floor((lo + hi)  / 2)
    }
  }
  return console.log(`Number was not found`)
}
binarySearch(104, numbers)