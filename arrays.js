 let cities=['mugabo','new york','kigali','kampala'];
console.log(cities[2]);//out put is kigali
let word='hello word';
console.log(word[1]);//the out put is letter e because we declared its index of 1 in that whole word its assigned on index of 1 bcz we start from index 0;
 //you declare another variable called capital and we assigne it on first element in array of named as cities 
let capital=(cities[0]);//we put index 0 because we wants to print first element 

console.log(capital);// out put is mugabo as first element
// now lets console the second element
console.log(cities[1]);// out put is new york as second element
//now lets declare the index that is not in array list like 4
console.log(cities[4]); // it prints undefined because un assigned index

// replacing an array. Using bracket notation, change the second element of the array groceryList to 'avocados'
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] ='avocados'
console.log(groceryList);
//the element 2 was replaced by avocado 
 groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] ='avocados'
console.log(groceryList);
//the element 2 was replaced by avocado 

//lets count nber of elements in an array
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);// out put is 3

//One method .push() allows us to add items to the end of an array. Here is an example of how this is used:
let food=['tomato','potato','irish','cartoo'];
food.push('milk','juice');
console.log(food);


 // lets remove the last element and we use .pop()
 //Another array method,POP() removes the last element of an array.
 const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);
//out put is all arrays but last element is removed

// to check the elememnt that was removed 
let removed=chores.pop();
console.log(removed);