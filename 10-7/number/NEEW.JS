let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
let obj2 = Object.assign({}, obj1);
let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
obj2.c.h = 67;
console.log(obj1, obj2, obj3);

