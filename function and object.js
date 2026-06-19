let numbers = [1,2,3,4,5] ;
console.log(numbers[0]) ;
console.log(numbers[1]) ;
console.log(numbers[2]) ;
console.log(numbers[3]) ;


let mixedArray = [1, "Hello" ,true,{name:"Alice"},[1,2,3] ] ;
console.log(mixedArray[0] ) ;
console.log(mixedArray[1]) ;
console.log(mixedArray[2] ) ;
console.log(mixedArray[3]) ;
console.log(mixedArray[4]) ;

console.log(numbers.length) ;
console.log(mixedArray.length) ;

function greet() {
    console.log("Hello ,World !") ;
}
greet() ;

//normal fuction
function multiply(a,b) {
    return a*b ;
}
console.log(multiply(9,6)) ;

let divide = function(a,b) {
return a/b ;
} ;
console.log(divide(10,2)) ;

//function with expreesion
const add = function(a,b) {
    return a+b ;

} ;
console.log(add(5,7)) ;

//arrow function with no parameters
let sayHi = () => console.log("Hi") ;
sayHi() ;
//arrow func. with single parameters
let square = x => x*x ;
console.log(square(4)) ;

//arrow func. with 1 parameters
const greetUser =(name) => {
    console.log(`Hello , ${name}!`) ;

}
  greetUser("Alice") ;
//map on array 

 let newrarray = [1,2,3,4,5] ;
 let squaredArray = newrarray.map((num) => num*num) ;
 console.log(squaredArray) ;

//filter on array 
let evenNumbers = [1,2,3,4,5] ;
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0 ) ;
// "===" also telss the data types of elements
console.log(filteredEvenNumbers) ;

//reduce on array 
let sum = [1,2,3,4,5] ;
let total = sum.reduce((accumulator, CurrentValue) => accumulator + CurrentValue, 0) ;
console.log(total) ;


//map reduce filter on object 
let students = [
    {name: "Alice " , marks :85} ,
    {name: "Bob " , marks :92} ,
    {name: "Charlie " , marks :78} ,
   ] ;
//map toget marks of all subj.
let marks = students.map(student => student.marks) ;
console.log(marks) ;
//map to get names all students 
let names =students.map(student => student.name);
console.log(names ) ;
//filter to get students with marks greater 80
let topStudents = students.filter(student =>student.marks > 80) ;
console.log(topStudents ) ;
//reduce to get total marks of all
let totalMarks =students.reduce((accumulator,student) => accumulator + student.marks, 0) ;
console.log(totalMarks) ;








