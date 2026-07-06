
 let array1=[1,2,10,4,5,6,7,8,'agaba',2.5,9]
 console.log('THE given list is like this:');
 console.log(array1);
 console.log('its sorted by using descending order:');
 console.log(array1.sort((a,b)=>b-a));
 console.log('By here its filtered by to print only the string agaba  =>:');
console.log(array1.find(item=>typeof item == 'string'));
console.log('this is another way of printing only that string but changed it to upperCase letters =>;');
console.log(array1.find(item => item=='agaba') ?.toUpperCase());