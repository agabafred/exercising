 // join removes all strings in elements inside an array to make one string for all or not by=> join
let banana=['boy','mugabo','tonny'];
console.log(banana.join());// out put:boy,mugabo,tonny
console.log(banana.join('-'));//out put:boy-mugabo-tonny

//how to remove fist element from an array we use the=> shift
banana.shift();
console.log(banana);//out put is=[ 'mugabo', 'tonny' ] boy removed
const removed=(banana.shift());
console.log(removed);

// unshift()  itAdds one or more elements to the beginning of the array  => it gets any string out of array to be added at first index

banana.unshift('bwera'); 
console.log(banana); 

//TASK

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);
