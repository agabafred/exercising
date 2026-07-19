 

// PRIMITIVE DATA TYPES (numbers,null,undefined,trings,boolean)
let name=30
let firstName='agaba'
let lastName='fred'
let approved=false;
let servingYears=undefined ;
let retierdYears=null ;

console.log('the names data type is: ' + typeof name);
console.log('the lastName data type is: ' + typeof firstName);
console.log('the lastnames data type is: ' + typeof lastName);
console.log('the approved data type is: ' +typeof approved);
console.log('the servingYears data type is: ' +typeof servingYears);
console.log('the retierdYears data type is: ' +typeof retierdYears);

// NON PRIMITIVE DATA TYPES
let person = {
    name : 'agaba',
    age : 30
};

// mutability /changing
person.name='fred'
console.log('     ')
console.log(person);
//OR by bracket notation 
person['name']='fred'
console.log(person.name);


