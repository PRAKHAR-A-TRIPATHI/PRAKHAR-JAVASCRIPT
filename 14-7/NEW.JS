const a = [
  {
    id: 1,
    slot: [{ abc: "" }, { abc: "hi" }],
  },
  {
    id: 2,
    slot: [{ abc: "hi" }, { abc: "hi" }],
  },
];
const filter = a.filter(value => value.slot.some(Element => Element.abc === ""));
console.log(filter);

// console.log(a.some(value => ));

// console.log(a.map(value=>value.slot.map(ele=>ele.abc!=="")));