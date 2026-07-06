
console.log('lets test your grade by entering your marks'); 
 let marks=(51)
 console.log(`the marks you scored are ${marks} in this course`);
 switch(true){
     case (marks>=90 && marks<=100):
         console.log('your Grade is A ');
         break;
         case (marks>=80 && marks<90):
         console.log('your Grade is B ');
         break;
         case (marks>=70 && marks<80):
         console.log('your Grade is C ');
         break;
         case (marks>=60 && marks<70):
         console.log('your Grade is D ');
         break;
         case (marks<=60 && marks>=50):
         console.log('your Grade is E ');
         break;
         
         case (marks<50):
         console.log('your Grade is F ');
         break;
         default:
         console.log('you enterd the wrong marks dear student');
     }