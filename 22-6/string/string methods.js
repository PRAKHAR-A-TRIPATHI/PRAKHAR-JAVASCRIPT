//trim
// let name= "        prakhar         "
// console.log(name.trim());
// console.log(name.trimEnd());
// console.log(name.trimStart());

let name= "prakhar Tripathi"

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,4));
console.log(name.replace("prakhar","shlok"));
let brother="shlok"
console.log(name.concat(" anupkumar", brother) );
console.log(name.at(3) );
console.log(name.charAt(6) );
console.log(name.charCodeAt(6) );
console.log(name.endsWith("r") );
console.log(name.startsWith("p") );
console.log(name.includes("a") );
console.log(name.indexOf("r") );
console.log(name.lastIndexOf("r") );
console.log(name.match("a") );
console.log(name.matchAll("a") );
console.log(name.padEnd(20) );
console.log(name.padStart(20) );
console.log(name.replaceAll("p","l") );
console.log(name.search("r") );
console.log(name.split("a") );
console.log(name.substring(2,5) );
console.log(name.repeat(100) );
