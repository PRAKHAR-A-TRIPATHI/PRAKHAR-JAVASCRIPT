function transform(formating) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let output = formating.replace("y", year);
  output = output.replace("m", month);
  output = output.replace("d", day);

  return output;
}

console.log(transform("y-m-d"));
