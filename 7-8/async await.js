async function hello() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 1000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 6000);
  });
  let a1 = await p1;
  console.log(a1);
  let a2 = await p2;
  console.log(a2);
  return [a1, a2];
}

const abc = async () => {
  console.log("hello");
};

const main = async ()=>{
    await hello();
     await abc();
    // s1.then((value)=>{
    //     console.log(value);
    // })
}
main()
