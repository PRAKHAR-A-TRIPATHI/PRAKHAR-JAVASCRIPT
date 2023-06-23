// let arr =[3,4,88,65]
// let [a,b,c]=arr;
// console.log(a,b,c);

// const obj = {
//     a:10,
//     b:20
// }
// const {a,b}=obj;
// console.log(a,b);

// #2
// const person = {
//     name: 'Prakhar',
//     age: 18,
//     gender: 'Male',
//     address: {
//       street: '123 Main St',
//       city: 'Ahmedabad',
//       country: 'India'
//     }
//   };
  
//   // Destructuring nested objects
//   const { name, age, address: { city, country } } = person;
  
//   console.log(city);    // Output: 'New York'
//   console.log(country); // Output: 'USA'
  

// #3
const person = {
    name: 'John Doe',
    age: 25,
    gender: 'Male'
  };
  
  // Destructuring the `person` object
//   const { name, age, gender } = person;
  
//   console.log(name);   // Output: 'John Doe'
//   console.log(age);    // Output: 25
//   console.log(gender); // Output: 'Male'
  
const { name, age, gender, city = 'Unknown' } = person;

console.log(city);  // Output: 'Unknown'
