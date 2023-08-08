let arr = [
  { type: "game", value: 25 },
  { type: "game", value: 25 },
  { type: "audio", value: 25 },
  { type: "audio", value: 25 },
  { type: "video", value: 25 },
  { type: "video", value: 25 },
];

let empty = {};
arr.forEach((e) => {
  let a = empty[e.type];
  if (a) {
    empty[e.type] += e.value;
  } else {
    empty[e.type] = e.value;
  }
});
console.log(empty);

// let result = [];
// arr.forEach(item => {
//     let existing = result.find(i => i.type === item.type);
//     if (existing) {
//         existing.value += item.value;
//     } else {
//         result.push({...item});
//     }
// });
// console.log(result);

// let output = arr.reduce((acc, curr) => {
//     let index = acc.findIndex(item => item.type === curr.type);
//     // console.log(index);
//     if (index !== -1) {
//         acc[index].value += curr.value;
//     } else {
//         acc.push(curr);
//     }
//     return acc;
// }, []);

// console.log(output);
