const arrayNumeral = [];
let numberPow = 0;
let masLetters =[];
const tax = 19.5;
let count = 0; 
let convertSumOfMoney = "";
const dollarRate = 28.35;
let masLatterPassword = [];
let changedWord = [];
let stringWithoutSpaces = [];
let masReverceString = [];

const getMaxDigit = (number) => {
    for (let i = 0; i < String(number).length; i++) {
       let valueWithoutLastNumeral =  number % 10;
       valueWithoutLastNumeral = Math.floor(valueWithoutLastNumeral); 
       arrayNumeral.push(valueWithoutLastNumeral);      
       number /=10;     
    }    
    const maxNumber = Math.max.apply(null,arrayNumeral);
    return maxNumber;
}
const getNumberPow = (num,pow) =>{
    if(pow === 0){
      numberPow = 1;
    }
    else{
    numberPow = num;
    for (let i = 0; i < pow-1; i++) {
        numberPow*=num;
    }
}
return numberPow;
}
const getCorrectName = (name) => {
    masLetters[0] = name[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
       masLetters[i] = name[i].toLowerCase();
       correctName = masLetters.join('')
    }
    return correctName;
}
const getBalanceOfSalary = (salary) => {
    const balanceOfSalary = salary - (salary * tax / 100);
    return balanceOfSalary;
}
const getRandomNumber = (minNumber,maxNumber) => {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}
const getNumberOfLetters = (letter,word) => {
for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter) {
        count++;
    }
    }
    return count;
}
const convertCurrency = function(sumOfMoney) {
    if (sumOfMoney.slice(-3).toUpperCase() === 'UAH'){
        convertSumOfMoney = (parseInt(sumOfMoney) / dollarRate).toFixed(2) + '$' ;
    }
    else if (sumOfMoney.slice(-1) === '$'){
        convertSumOfMoney = parseInt(sumOfMoney) * dollarRate + 'UAH' ;
    }
    else {
        convertSumOfMoney = 'Error';
    }
    return convertSumOfMoney;
}
const getRandomPassword = (passwordLength = 8) => {
    for (let i = 0; i < passwordLength; i++) {
        randNum = (Math.random() * 9).toFixed();
        masLatterPassword.push(randNum);
        password = parseInt(masLatterPassword.join(''));      
    }
    return password;
}
const deleteLetters = (letter,word) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter) {
            continue;
        }
        changedWord += word[i];
    }
    return changedWord;
}
const isPalyndrom = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === ' '){
            continue;
        }
        stringWithoutSpaces += string[i].toLowerCase();
    }
    j = stringWithoutSpaces.length;
    for (let i = 0; i <= stringWithoutSpaces.length; i++) {
        masReverceString[i] = stringWithoutSpaces[j--];
        reverceString = masReverceString.join('')
    }
    return reverceString === stringWithoutSpaces;
}

document.writeln(`Результат выполнения первой функции: ${getMaxDigit(9824566232)} </br>`);
document.writeln(`Результат выполнения второй функции: ${getNumberPow(2,5)} </br>`);
document.writeln(`Результат выполнения третьей функции: ${getCorrectName('dMitRIy')} </br>`);
document.writeln(`Результат выполнения четвертой функции: ${getBalanceOfSalary(1000)} </br>`);
document.writeln(`Результат выполнения пятой функции: ${getRandomNumber(50,100)} </br>`);
document.writeln(`Результат выполнения шестой функции: ${getNumberOfLetters("a","Astalavista")} </br>`);
document.writeln(`Результат выполнения седьмой функции: ${convertCurrency("1000UAH")} </br>`);
document.writeln(`Результат выполнения восьмой функции: ${getRandomPassword()} </br>`);
document.writeln(`Результат выполнения девятой функции: ${deleteLetters("a","blalalalasgaafdg")} </br>`);
document.writeln(`Результат выполнения десятой функции: ${isPalyndrom("Я несу гусеня")} </br>`);