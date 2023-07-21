let getPass = document.querySelector("#btn");
getPass.addEventListener("click", (e) => {
  let upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let low = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let saymbol = "@#$%&*/-`+";

  let result = "";

  if (document.querySelector("#upper").checked) {
    result += upp;
  }

  if (document.querySelector("#lower").checked) {
    result += low;
  }

  if (document.querySelector("#num").checked) {
    result += num;
  }
  if (document.querySelector("#symbol").checked) {
    result += saymbol;
  }

  let newPassword = "";
  let n = parseInt(document.querySelector('#range').value);
  for (i = 0; i < n; i++) {
    // let randomPass = Math.floor(Math.random() * result.length);
    // newPassword += result.charAt(randomPass);
    newPassword += result.charAt(Math.floor(Math.random()*result.length))
  }
  document.querySelector("#randompass").value = newPassword;
});
