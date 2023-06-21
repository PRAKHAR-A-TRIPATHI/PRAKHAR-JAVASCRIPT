//shallow and deep copy
// let devloper1 = {
//   name: "prakhar",
//   Skills: {
//     primary: "full stak",
//     secondary: "js",
//   },
//   caluculateAge: function name(params) {
//     return 30;
//   },
//   joiningDate: new Date(),
// };

  // let devloper2=devloper1;
//#1
  // let devloper2 = Object.assign({},devloper1);
  // devloper2.name="shlok";

//#2
//  let devloper2={...devloper1}
//  devloper2.name='Shlok';
//  devloper2.Skills.primary='front end';

// #3
// let devloper2 = JSON.parse(JSON.stringify(devloper1));
// devloper2.name = "Shlok";
// devloper2.Skills.primary = "front end";
// devloper2.Skills.secondary = "java";

// console.log(devloper1);
// console.log(devloper2);

//new-=Example

// let obj={
//   name:"prakhar"
// };
// let user=obj;
// user.name="shlok";

//shallow copy 1
// let user =Object.assign({},obj);
// user.name="shlok";

//2
// let user = {...obj}
// user.name="shlok";

//3
// let obj={
//   name:"prakhar",
//   addresh:{
//     city:'delhi',
//     state:"up"
//   },
//   getdata:function(){
//     return "all data hrer";
//   }
// };
// //deep copy
// let user =JSON.parse( JSON.stringify(obj));
// user.addresh.state="Gujrat";
// user.addresh.city="Ahmedabad";
// console.log(obj);
// console.log(user);
