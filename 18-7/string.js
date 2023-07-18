// 1Which string method is used to determine the length of a string?
// let a = "prakhar";
// console.log(a.length);

// 2 How would you convert a string to uppercase using a string method?
// let a = "prakhar";
// console.log(a.toUpperCase());

// 3 Which method is used to find the position of a specified value within a string?
// let a ="prakhar";
// console.log(a.indexOf("k"));

// 4How would you concatenate two strings using a string method?
// let a ="prakhar";
// console.log(a.concat(" tripathi"));

// 5 Which method would you use to extract a specific portion of a string?
// let a = "prakhar tripathi"
// console.log(a.slice(-8));
// console.log(a.substring(8,15));
// console.log(a.substring(0,7));

// 6How can you replace a specific value with another value within a string using a method?

// let a = "prakhar tripathi";
// console.log(a.replace("prakhar","shlok"));

//  <-- 7Which method would you use to split a string into an array of substrings based on a specified separator? -->//

// let a = "hello world a b c  pppppp"
// console.log(a.split(" "));

// 8 How would you remove leading and trailing whitespace from a string using a method?

// let a = "    p p      p p  p p p p    "
// console.log(a.trim());
// console.log(a.trimStart());
// console.log(a.trimEnd());

// 9Which method is used to search for a specified pattern and return the first occurrence in a string?
// let a = "prakhar";
// console.log(a.indexOf("a",a.indexOf("a")));
// console.log(a.search("a"));

// 10 How can you check if a string starts with a specific value using a string method?
// let str = "Hello World";
// let start = str.startsWith("Hello");
// console.log(start); // Output: true

// const message = "Hello, World!";
// console.log(message.length);

// const str = "HelloWorld";
// console.log(str.toLowerCase());

// const sentence = "I love JavaScript!";
// console.log(sentence.indexOf("JavaScript"));

// const name = "John";
// const greeting = `Hello, ${name}!`;
// console.log(greeting);

// const text = "Hello, World!";
// console.log(text.substring(7));

// const message = "Hello, World!";
// console.log(message.replace("World", "Universe"));

// const words = "apple, banana, orange";
// const fruits = words.split(", ");
// console.log(fruits);

// const text = "   Hello, World!   ";
// console.log(text.trim());

// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("dog"));

// const str = "Hello, World!";
// console.log(str.endsWith("!"));

// const sentence = "JavaScript is fun!";
// console.log(sentence.charAt(4));

// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(", ", str2));

// const sentence = "JavaScript is awesome!";
// console.log(sentence.slice(0, 10));

// const text = "Hello, World!";
// console.log(text.repeat(3));

// const sentence = "The quick brown fox";
// console.log(sentence.split(" "));

// const str = "Hello, World!";
// console.log(str.indexOf("o"));

// const sentence = "JavaScript is fun!";
// console.log(sentence.substring(4, 10));

// const text = "Hello, World!";
// console.log(text.charAt(7));

// const sentence = "I love JavaScript!";
// console.log(sentence.split("o"));

// const str = "Hello, World!";
// console.log(str.includes("World"));

// const sentence = "JavaScript is cool!";
// console.log(sentence.lastIndexOf("o"));

// const text = "Hello, World!";
// console.log(text.startsWith("Hello"));

// const str = "Hello, World!";
// console.log(str.toUpperCase());

// const sentence = "JavaScript is awesome!";
// console.log(sentence.toLowerCase());

//  const str = "Hello, World!";
// console.log(str.charAt(13));

// const sentence = "JavaScript is fun!";
// console.log(sentence.substr(4, 10));

//  const text = "Hello, World!";
// console.log(text.includes("WORLD"));

//  const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome"));

//  const str = "Hello, World!";
// console.log(str.charCodeAt(4));

//  const sentence = "JavaScript is powerful!";
// console.log(sentence.split(" ").length);

//  const text = "Hello, World!";
// console.log(text.search("W"));

//  const sentence = "JavaScript is dynamic!";
//  console.log(sentence.slice(-7));


// const str = "Hello, World!";
// console.log(str.concat(" Goodbye!"));

//  const sentence = "JavaScript is flexible!";
// console.log(sentence.charAt(sentence.length - 1));
 
// const sentence = "JavaScript is interesting!";
// console.log(sentence.substring(10));

//  const str = "Hello, World!";
// console.log(str.search("World"));

//  const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse().join(" "));

//  const sentence = "JavaScript is powerful!";
// console.log(sentence.substring(4, 10));

//  const str = "Hello, World!";
// console.log(str.charCodeAt(0));

//  const sentence = "JavaScript is amazing!";
// console.log(sentence.slice(4, 10));

//  const text = "Hello, World!";
// console.log(text.indexOf("o", 5));

//  const sentence = "JavaScript is fun!";
// console.log(sentence.startsWith("Java"));

//  const str = "Hello, World!";
// console.log(str.endsWith("!"));

//  const sentence = "JavaScript is amazing!";
// console.log(sentence.lastIndexOf("a", 12));

//  const text = "Hello, World!";
// console.log(text.substring(7, 2));


//  const sentence = "JavaScript is cool!";
// console.log(sentence.concat(" I love it!"));

//  const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));

//  const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));

// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome").toUpperCase());

// 60
// function is_string(value){
//     return typeof value === "string";
// }
// console.log(is_string('w3resource')); // true
// console.log(is_string([1, 2, 4, 0])); // false

// 61
function is_Blank(str) {
    return str.length === 0;
}
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false

