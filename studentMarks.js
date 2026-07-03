/*we are asked to read the student marks and we show his/her grades according to the marks scored*/
/*lets declare variable by using const because its not going to be reassigned*/
const marks=50;
console.log(`he scored ${marks}in this course `);
if(marks>=90 && marks<100){
    console.log('the students Grade is A');
}
else if(marks>=80 && marks<90){
    console.log('the students Grade is B');
}
else if(marks>=70 && marks<80){
    console.log('the students Grade is c');
}
else if(marks>=60 && marks<70){
    console.log('the students Grade is D');
}
else if(marks>100){
    console.log('incorrect marks enterd ');
}
else{
    console.log('the grade is F');
}







