let a = "level";

function palindrome(a) {
  let b = a.split('');
  let c = b.reverse().join('');
  return a === c;
}

console.log(palindrome(a)); 
