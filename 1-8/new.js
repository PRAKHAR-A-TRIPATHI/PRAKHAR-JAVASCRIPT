function isValidPassword(password) {
    const specialCharacters = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    let hasSpecialCharacter = false;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (specialCharacters.includes(password[i])) {
            hasSpecialCharacter = true;
        }
        if (upperCaseLetters.includes(password[i])) {
            hasUpperCase = true;
        }
        if (lowerCaseLetters.includes(password[i])) {
            hasLowerCase = true;
        }
        if (numbers.includes(password[i])) {
            hasNumber = true;
        }
    }
    return hasSpecialCharacter && hasUpperCase && hasLowerCase && hasNumber;
}
const password = "myP@sswrd0";
if (isValidPassword(password)) {
    console.log("Password is valid.");
} else {
    console.log("Password is not valid.");
}
