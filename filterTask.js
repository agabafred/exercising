  //Create an array of integers. Write a JavaScript program that filters the array and returns only the numbers that satisfy
  //The number is divisible by 3 (its remainder when divided by 3 is 0).
// The number contains the digit 3 in its decimal representation.

  const numbers=[1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,53,50,56,63,60,69,73,3];
 let newArray=numbers.filter(newNumbers)
 let sorted = [...newArray].sort((a,b) => a - b);
 console.log('the arranged outputs by ascending order ' + sorted) //the arranged outputs by ascending order 3,3,6,9,12,13,15,18,53,60,63,69,73
 
 console.log('the original output ' + newArray) // the original output 3,6,9,12,13,15,18,53,63,60,69,73,3
 
 function newNumbers(newNumbers){
     return newNumbers % 3 ===0 || String(newNumbers).includes('3');
 }
