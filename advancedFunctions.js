  // convert inputed string in numbers
let age =Number(prompt('enter your age please : '));
if(age >= 18){
    console.log('your allowed to vote');
}
else{
    console.log('denied to vote');
}
/// odd or even 
console.log(" ");
const number=Number(prompt('enter the number you want :'));
const numbers=BigInt(number);
if(number % 2 === 0){
    console.log("it's EVEN");
}
else{
  console.log("it's ODD ");  
}

// we loged inside the function AND USER ENTERS MARKS WANTS
console.log(" ");
let marks=Number(prompt('enter the marks you scored :'));
 function calculations (marks){
    let average= marks * 50 / 100 ;
    console.log('the marks after averaging to 50 are :' + average);
    return average;
}
 calculations (marks);   
 
  // USER ENTERS AMANOTA HE WANTS AND  we logged outside 
  console.log(" ");
 let amanota=Number(prompt('enter your marks :'))
  function results(amanota){
      console.log('the amanota are ' + amanota);
      return (amanota *25 ) / 100 ;
      }
      console.log('the result after averaging to 25 are :' + results(amanota));
     
      // function to calculate area 
      console.log(' ')
      console.log('normal function ')
      function calculateArea(width, height){
          //let area = width * height;  =>OR use 
          return (width * height);
      }
      console.log('the area is : ' + calculateArea(10 , 2));
      
      // BY  arrow function ==>
      console.log(' ')
       console.log(' with out carry braces ');
       let calculated = (width , height) =>  width * height ;
       console.log('the area is : ' + calculated(10 , 2));
       
       // with using carry braces you must include also return 
       
       console.log('');
       console.log('by using carry braces ');
       let Area =(width , height) =>{  return width * height ;
       }
       console.log('the area is : ' + Area(10 , 2));
      