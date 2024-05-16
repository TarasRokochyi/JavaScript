// 1
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        console.log("String starts with uppercase character");
    } else {
        console.log("String does not start with uppercase character");
    }
}

upperCase('regexp'); 
upperCase('RegExp'); 


// 2
function checkEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(checkEmail("Qmail2@gmail.com")); 


// 3
function checkDBD(text){
    const regex = /d[bB]+d/g;

    const matches = [...text.matchAll(regex)].map(match => match[0]);

    console.log(matches); 
}
checkDBD("cdbBdbsbz")


// 4
function replaceSubStr(text){

    const replacedText = text.replace(/(\w+)\s(\w+)/, "$2, $1");

    console.log(replacedText); 
}

replaceSubStr("Java Script")


// 5
function validateCardNumber(cardNumber) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber);
}

console.log(validateCardNumber("9999-9999-9999-9999")); 


// 6
function betterCheckEmail(email) {
    const regex = /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(betterCheckEmail('my_mail@gmail.com'));
console.log(betterCheckEmail('#my_mail@gmail.com'));
console.log(betterCheckEmail('my_ma--il@gmail.com'));


// 7
function checkLogin(login) {
    let regex = /^(?![0-9])[a-zA-Z0-9.]{2,10}$/
    console.log(regex.test(login))
    const numbers = login.match(/\d+(?:\.\d+)?/g);
    console.log(numbers.join(", "));
}

checkLogin('ee1.1ret3'); // true 1.1, 3
checkLogin('ee1*1ret3'); // false



