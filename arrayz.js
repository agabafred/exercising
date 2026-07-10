let drinks=['amata','amazi','juice','ibizi'];
//JOIN() removes the quotes
let result=drinks.join();
console.log(result)// amata,amazi,juice
//PUSH() adds element in array at the end
drinks.push('akandi');
console.log(drinks);//[ 'amata', 'amazi', 'juice', 'akandi' ]
//SLICE() it removes mentioned index
let changed =drinks.slice(1);// element of index 1 is removed
console.log(drinks);
console.log(changed);
 //SPLICE() removing, replacing, or inserting items at any position
let deleted=drinks.splice(1,2);
console.log(drinks);
console.log('and after slicing two elements where deleted and are='); 
console.log(deleted);

// IT ALSO replacing
let add=drinks.splice(1,2,"igisiga","rabiant");
console.log(drinks)

//shift it removes the first element from an array
let shift=drinks.shift()
console.log(drinks)//[ 'amazi', 'juice', 'ibizi' ]..firt element is removed
console.log(shift); // amata .. the one that is removed

//UNSHIFT it adds element to the array but on the first
let unshift=drinks.unshift('inzoga','skol');
console.log(drinks);// [ 'inzoga', 'skol', 'amata', 'amazi', 'juice', 'ibizi' ]   the elements added at first
console.log(unshift)//6 is out put as number of elements in array








