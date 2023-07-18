let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#Height").value);
  const weight = parseInt(document.querySelector("#Weight").value);
  const result = document.querySelector("#result");
  

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a vlaid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a vlaid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // console.log(bmi);

    let value=result.innerHTML = `${bmi}`;
     if(value<18.6){
        result.innerHTML = ` ${bmi}You are Under Weight`
     }else if (value<24.9){
        result.innerHTML = ` ${bmi} You are Average Weight`
     }else{
        result.innerHTML=` ${bmi} You are OverWeight `
     }
  }
});
