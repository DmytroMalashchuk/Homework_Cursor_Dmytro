const getMaxDigit = (number) => {
    const arrayNumeral = [];
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
    let numberPow = 0;
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
    let masLetters =[];
    masLetters[0] = name[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
       masLetters[i] = name[i].toLowerCase();
       correctName = masLetters.join('')
    }
    return correctName;
}
const getBalanceOfSalary = (salary) => {
    const tax = 19.5;
    const balanceOfSalary = salary - (salary * tax / 100);
    return balanceOfSalary;
}
const getRandomNumber = (minNumber,maxNumber) => {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}
const getNumberOfLetters = (letter,word) => {
    let count = 0; 
for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter) {
        count++;
    }
    }
    return count;
}
const convertCurrency = function(sumOfMoney) {
    let convertSumOfMoney = "";
    const dollarRate = 28.35;
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
    let masLatterPassword = [];
    for (let i = 0; i < passwordLength; i++) {
        randNum = (Math.random() * 9).toFixed();
        masLatterPassword.push(randNum);
        password = parseInt(masLatterPassword.join(''));      
    }
    return password;
}
const deleteLetters = (letter,word) => {
    let changedWord = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter) {
            continue;
        }
        changedWord += word[i];
    }
    return changedWord;
}
const isPalyndrom = (sentence) => {
    let sentenceWithoutSpaces = [];
    let masReverceSentence = [];
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() === ' '){
            continue;
        }
        sentenceWithoutSpaces += sentence[i].toLowerCase();
    }
    j = sentenceWithoutSpaces.length;
    for (let i = 0; i <= sentenceWithoutSpaces.length; i++) {
        masReverceSentence[i] = sentenceWithoutSpaces[j--];
        reverceSentence = masReverceSentence.join('')
    }
    return reverceSentence === sentenceWithoutSpaces;
}
const deleteDuplicateLetter = (sentence) => {
    const lowercaseSentence = sentence.toLowerCase().split('')
    let sentenceWithoutSpaces = [];
    for(let i = 0; i < lowercaseSentence.length; i++){
        if(sentence.toLowerCase().indexOf(lowercaseSentence[i]) === sentence.toLowerCase().lastIndexOf(lowercaseSentence[i])){
            sentenceWithoutSpaces += lowercaseSentence[i];
        }
    }
    return sentenceWithoutSpaces;
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
document.writeln(`Результат выполнения одиннадцатой функции: ${deleteDuplicateLetter("alLtrpALllam")} </br>`);