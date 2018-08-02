// Using the JavaScript language, have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

//For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. 

const QuestionsMarks = str => { 
    
  let strArr = str.split('')
  let current = 0;
  let sum = 0;
  let questionMarks = 0;

	for (const item of strArr) {

		if (Number(item)) {
			if (Number(item) + current === 10 && questionMarks === 3) {
				return console.log(true)
			}
				current = Number(item);
				sum += Number(item)
				questionMarks = 0;
		} else if (item === '?') {
			questionMarks += 1
		}
  }
	
	return (console.log(false))
       
}
 
// keep this function call here 
QuestionsMarks("acc?7??sss?3rr1??????5");
QuestionsMarks("aa6?9");
