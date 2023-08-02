function isValidPassword(password) {
    const specialCharacters = "!@#$%^&*()_+-=[]{};'|,.<>/?";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    let isSpecial = false;
    let isUpper = false;
    let isLower = false;
    let isNum = false;
    for (let i = 0; i < password.length; i++) {
        if (specialCharacters.includes(password[i])) {
            isSpecial = true;
        }
        if (upperCaseLetters.includes(password[i])) {
            isUpper = true;
        }
        if (lowerCaseLetters.includes(password[i])) {
            isLower = true;
        }
        if (numbers.includes(password[i])) {
            isNum = true;
        }
    }
    return isSpecial && isUpper && isLower && isNum;
}
const password = "myP@sswrd0";
if (isValidPassword(password)) {
    console.log("Password is valid.");
} else {
    console.log("Password is not valid.");
}
