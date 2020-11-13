let minNumberN;
let maxNumberM;
let skipPariedNumbers;
let sumNumbers = 0;
do{
    minNumberN = +prompt('Введіть число N');
}
while(Number.isInteger(minNumberN) === false)
do{
    maxNumberM = +prompt('Введіть число M');
}
while(Number.isInteger(maxNumberM) === false)

skipPariedNumbers = confirm('Пропустити парні числа?');
for (let i = minNumberN; i <= maxNumberM; i++){
if(skipPariedNumbers && i%2 === 1){
    sumNumbers += i;
}
else if(!skipPariedNumbers){
    sumNumbers += i;
}
}
document.writeln(sumNumbers)