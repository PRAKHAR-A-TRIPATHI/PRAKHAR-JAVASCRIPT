let json = {
    name :"prakhar",
    age:20,
    frind:"Mayur",
    course:"B.tech",
    city:"Ahmedabad",
}
console.log(json);

let myjson = JSON.stringify(json);
console.log(myjson);

myjson = myjson.replace('prakhar','shlok')
console.log(myjson);

newobj = JSON.parse(myjson);
console.log(newobj);
