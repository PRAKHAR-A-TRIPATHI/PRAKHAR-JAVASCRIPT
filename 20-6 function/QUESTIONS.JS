// console.log(5 + 4 * 2);  //multiplication and then addition
// console.log(10 - 2 / 4);  //division and then subtraction
// console.log(3 * (2 + 4));  // addition first and then multiplication because brackets are more prioritized
// console.log(8 / (2 + 2));  // addition first and then division because brackets are more prioritized
// console.log((15 % 4) + 2);  // remainder first and then addition because brackets are highly prioritized
// console.log(20 / 4 - 2); //division first and then subtraction
// console.log(2 + (3 * 4) / 2);  //multiplication > division > addition
// console.log(4 / 2 ** 2);  //exponential first and then division
// console.log((10 + 2) / 3); // addition first and then division because brackets are more prioritized
// console.log((6 * 2) % 4);  //multiplication > remainder
// console.log(2 ** (3 ** 2)); //first exponential of the brackets and then the normal one
// console.log((4 + 2) ** 3); //addition > exponential
// console.log(2 + 3 * 4 ** 2); //first exponential then multiplication and then addition
// console.log((6 * (2 + 4)) / 3); //addition > multiplication (because main brackets)> division
// console.log((10 - 2) / 4); //subtraction and then division
// console.log(8 / (2 * 2)); //multiplication and then division
// console.log(15 % (4 + 2)); //addition > remainder
// console.log(20 / (4 - 2)); //subtraction > division
// console.log(2 + (3 * 4) / 2); //multiplication > division > addition
// console.log(4 / 2 ** 2); //exponential > division
// console.log((10 + 2) / 3); //addition > division
// console.log(6 * (2 % 4)); //remainder > multiplication
// console.log(2 ** (3 ** 2)); // exponential of brackets and then of outside it
// console.log((4 + 2) ** 3); // addition > exponential
// console.log(2 + 3 * 4 ** 2); // exponential then multiplication and then addition
// console.log((6 * (2 + 4)) % 3); // addition > multiplication > remainder\
// console.log((10 - 2) / 4); //subtraction and then division
// console.log(8 / (2 + 2)); //addition and then division
// console.log(15 % (4 - 2)); // subtraction and then remainder
// console.log(20 / 4 - 2); // division and then subtraction
// console.log(2 + 3 * (4 / 2)); //division > multiplication > addition
// console.log(4 / 2 ** 2); //exponential and then division
// console.log((10 + 2) / 3); //addition and then division
// console.log(6 * (2 % 4) - 3); // remainder > multiplication > subtraction
// console.log(2 ** (3 ** 2)); // exponential of brackets and then of outside it
// console.log((4 + 2) ** 3 - 1); //addition > exponential > subtraction
// console.log(2 + (3 * 4 ** 2) / 2); // exponential > multiplication > division > addition
// console.log(((6 * (2 + 4)) % 3) + 1); // addition inside the brackets, multiplication, remainder and then addition of outside the brackets
// console.log((10 - 2) / 4 + 2); // subtraction > division > addition
// console.log(8 / (2 * 2) + 3); // multiplication > division > addition
// console.log((15 % (4 + 2)) - 1); // addition > remainder > subtraction
// console.log(20 / (4 - 2) + 1 ); // subtraction > division > addition
// console.log(2 + (3 * 4) / 2 - 1); // multiplication > division > addition > subtraction
// console.log(4 / 2 ** 2 + 3); // exponential > division > addition
// console.log((10 + 2) / 3 - 1); // addition > division > subtraction
// console.log((6 * (2 % 4)) / 3 + 2); // remainder > multiplication > division > addition
// console.log(2 ** (3 ** 2) - 1); // exponential of brackets and then of outside it and then subtraction
// console.log((4 + 2) ** 3 + 1); // addition > exponential > addition of outside the brackets
// console.log(2 + (3 * 4 ** 2) / 2 - 3); // exponential > multiplication > division > addition > subtraction
// console.log(((6 * (2 + 4)) % 3) + 1 - 2); //addition of inside the brackets and then multiplication then remainder then addition of outside the brackets and then subtraction
// console.log("5" + "3"); // the string will get concatenated
// console.log("7" - "2"); // subtraction will be done of this string
// console.log("10" * "2"); // multiplication will be done of this string
// console.log("15" / "5"); // division will be done of this string
// console.log("10" % "3"); // remainder will be shown of this string
// console.log(Number("2.5") + 1.8); // the "Number" will convert the string into number and then addition will be done
// console.log(4 - Number("2.5")); // the "Number" will convert the string into number and then subtraction will be done
// console.log(1.5 * Number("3.2"));  // the "Number" will convert the string into number and then multiplication will be done
// console.log(9.8 / Number("2")); // the "Number" will convert the string into number and then division will be done
// console.log("7" + String(2.5)); // the "String" will convert the number into string and then it'll concatenated by the other string
// console.log(10 - Number("2.5")); // the "Number" will convert the string into number and then subtraction will be done
// console.log(3.5 * Number("2")); // the "Number" will convert the string into number and then multiplication will be done
// console.log(8 / Number("2.5")); // the "Number" will convert the string into number and then division will be done
// console.log(String(1.2) + "0.5"); // the "String" will convert the number into string and then it'll concatenated by the other string
// console.log(6 - Number("1.2")); // the "Number" will convert the string into number and then subtraction will be done
// const result = (10 * 2)/ / 5 + Math.pow(2, 3) - (4 % 3); console.log(result); // math power > remainder > multiplication > division > addition > subtraction
// console.log("hello" && 0); // 0
// console.log("" || "world"); // empty string is considered are false
// console.log(null && true); // null is a false value
// console.log(NaN || "value"); // NaN is a false value
// console.log(undefined && null);  // Undefined is a false value
// console.log(10 && "number"); // first value is right then it'll print second value
// console.log("" || 0); // empty string is considered are false
// console.log(NaN && "value"); // first value is false then it'll print the first value
// console.log(null || undefined); // first false then second
// console.log(false && "false"); // first false then first
// console.log("hello" || 0); // first true then first
// console.log(0 && true); // first value is false then it'll print the first value
// console.log(NaN || null); // first false then second
// console.log(undefined && "undefined"); // first false then first
// console.log(10 || "number"); // first true then first
// console.log(" " && 0); // first value is right then it'll print second value
// console.log(NaN || " "); // first false then second
// console.log(null && undefined); // first false then first
// console.log(false || "false"); // first false then second
// console.log("hello" && 10); // first false then second
// console.log(true ? "Yes" : "No"); // condition is true then first statement
// console.log(false ? 10 : 5); // condition is false then second statement
// console.log(3 > 5 ? "Greater" : "Less"); // condition is false then second statement
// console.log(10 === 10 ? "Equal" : "Not equal"); // condition is true then first statement
// console.log(false ? "Hello" : "World"); // condition is false then second statement
// console.log(null ? "NotNull" : "Null");  // condition is false then second statement
// console.log(undefined ? "Defined" : "Undefined"); // condition is false then second statement
// console.log("a" !== "b" ? "Different" : "Same"); // condition is true then first statement
// console.log(1 < 0 ? "True" : "False"); // condition is false then second statement
// console.log(0 ? "Truthy" : "Falsy"); // condition is false then second statement
// console.log(" " ? "Truthy" : "Falsy"); // condition is true then first statement
// console.log(NaN ? "Valid" : "Invalid"); // condition is false then second statement
// console.log([ ] ? "NotEmpty" : "Empty"); // condition is true then first statement
// console.log([1, 2] ? "Exists" : "Not exists"); // condition is true then first statement
// console.log({} ? "Object" : "Not object"); // condition is true then first statement
// console.log(0.5 ? "True" : "False"); // condition is true then first statement
// console.log(undefined === null ? "Equal" : "Not equal"); // condition is false then second statement
// console.log(10 > 5 ? "Greater" : "Less"); // condition is true then first statement
// console.log(null !== undefined ? "Different" : "Same"); // condition is true then first statement
// console.log(true ? 1 : 0); // condition is true then first statement
// let a = 2,
//   b = 3,
//   c = 4;
// console.log(a > b ? (a > c ? a : c) : b > c ? b : c);
// var a=50
// var b=4
// var c=5

// let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
// console.log(max);
// let myObj = { name: "John", age: 30 };
// console.log(myObj.age); // Output: John
// let myObj = { name: "John", age: 30 };
// console.log(myObj["name"]); // Output: 30

// function one(){
//     two ();
//     console.log("3");
    
// }
// function two(){
//     three ();
//     console.log("2");
// }
// function three() {
//     console.log("1");
// }
// one();
// debugger;
