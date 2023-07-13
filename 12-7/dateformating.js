// function transform(formating) {
//   formating=formating.toLowerCase();
//   let date = new Date();
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();

//   let output = formating.replace("yyyy", year);
//   output = output.replace("mm", month)
//   output = output.replace("dd", day);

//   return output;
// }

// console.log(transform("mm*YYYY*dd"));












// function formater(syntax) {
//   syntax = syntax.toLowerCase();
//   let OGDate = new Date();
//   let date = OGDate.getDate();
//   let month = OGDate.getMonth() + 1;
//   let year = OGDate.getFullYear();
//   let mdFormat = syntax.replace( syntax.slice(syntax.indexOf("m"),syntax.lastIndexOf("m")+1),month.toString().padStart(2,"0"))
//   mdFormat = mdFormat.replace(syntax.slice(syntax.indexOf("y"),syntax.lastIndexOf("y")+1),year)
//   mdFormat = mdFormat.replace(syntax.slice(syntax.indexOf("d"),syntax.lastIndexOf("d")+1),date.toString().padStart(2,"0"));
//   return mdFormat
// }
// console.log(formater("dd-m-yyyy"));
// console.log(formater("Mm-dd/yyYy"));
// console.log(formater("Mm-dd*y"));


// .toString().padStart(2,"0")  