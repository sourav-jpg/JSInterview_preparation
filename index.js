// 1. write a code to get array of names from given array of users
// get back only active users
//sort users by age desending
// const users = [
//     {
//         id:1,
//         name:"jack",
//         isActive: true,
//         age:20
//     },
//     {
//         id:1,
//         name:"badri",
//         isActive: true,
//         age:22

//     },
//     {
//         id:1,
//         name:"arnav",
//         isActive: false,
//         age:23
        
//     },
// ];

// const names =[]
// for(let i = 0 ; i<users.length;i++){
//    names.push(users[i].name)
// }
// console.log(names);


// users.map((val)=>{
//     if(val.isActive)
//        console.log("name---",val.name);
// })

// users.sort((val1,val2)=>val1.age<val2.age ? 1 : -1).filter(val=>val.isActive).map(val=>console.log(val.name))

//--------------------------------------------------------------------

// 2. What will be logged in first example and in second example 
// let var1;
// console.log(var1);
// console.log(typeof var1);

// let var2=null;
// console.log(var2);
// console.log(typeof var2);

//--------------------------------------------------------------------

// 3.What will be console.logged here 

//Q1
// console.log(foo);
// foo = 1;
// var foo = 2;

//--------------------------------------------------------------------

// 4. Create a counter function which has  increment and getValue functionality 
  
// const privateCounter  = () =>{
//     let count = 0 ;
//     function getValue(){
//          count+=count+1;
//          console.log(count);
//     }

//     getValue();
// }

// privateCounter();

//--------------------------------------------------------------------

// 5.Write a func which helps to achieve multiply(a)(b) and returns product of a and b

//function currying 

//not curry
// const multiply = (a)=>{
//      return function(b){
//         return a*b;
//      }

// }
// console.log(multiply(2)(3));

//--------------------------------------------------------------------

//6. Write a function which gets an array and an element and returns a array with this 
// elements at the end

// const numbers = [1,2];

// const append = (arr, ele) =>{
//     return [...arr,ele]
//     // arr.push(ele);
//     // return arr;
// }
// const newNumbers = append(numbers,3);
// console.log(numbers);
// console.log(newNumbers);

//--------------------------------------------------------------------

//7. write a func which can concatenate 2 arrays
 
// const arr1 = [1,2]
// const arr2 = [3,4]

// const concatFunc = (arr1,arr2) =>{
//     return [...arr1, ...arr2]
//     // return arr1.concat(...arr2)
//     // return arr1
// }

// let result = concatFunc(arr1,arr2)
// console.log(result);

//--------------------------------------------------------------------

//8. Check that user with such name exists in array of objects

// const users = [
//     {
//         id:1,
//         name:"jack",
//         isActive: true,
//         age:20
//     },
//     {
//         id:1,
//         name:"badri",
//         isActive: true,
//         age:22

//     },
//     {
//         id:1,
//         name:"arnav",
//         isActive: false,
//         age:23
        
//     },
// ];

// const isNameExists = (name,arr) => arr.some((el)=>el.name === name);

//--------------------------------------------------------------------

//9. Remove all duplicates in the array

// const uniqueArr = (arr) =>{
//     return[...new Set(arr)]
// }
// console.log(uniqueArr([1,2,3,3]));


// const uniqueArr = (arr) =>{

//     const result = [];
//     arr.forEach((item)=>{
//        if(!result.includes(item)){
//         result.push(item)
//        }
//     })
//     return result;
// }
// console.log(uniqueArr([1,2,3,4,1]));

//--------------------------------------------------------------------

//10.Sort the array of numbers

// const arr = [3,5,1];
// const result = arr.sort((a,b)=>(a<b ? -1:1))
// console.log(arr,result);

//--------------------------------------------------------------------

//call apply and bind
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
console.log(greeting + ' '+ this.firstName + ' ' + this.lastName);
}

// say.call(person1, 'Hello'); // Hello Jon Kuperman
// say.call(person2, 'Hello'); // Hello Kelly King

// say.apply(person1,['Maga']);
// say.apply(person2,['Maga']);

// var sayHelloJon = say.bind(person1);
// var sayHelloKelly = say.bind(person2);

// sayHelloJon(); // Hello Jon Kuperman
// sayHelloKelly(); // Hello Kelly King