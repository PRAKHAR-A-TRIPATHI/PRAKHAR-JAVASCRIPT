const input = document.getElementById("pass");

function genrate(length) {
  let upper = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let symbol = "!@#$%^&*()_+/*-+";
  const chars = upper.concat(lower, num, symbol);
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
const randomString = genrate(10);
pass.value=randomString
                