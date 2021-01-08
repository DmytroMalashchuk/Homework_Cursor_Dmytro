 export const maxCost = (COST_HOT_DOG, COST_PIZZA, COST_KEBAB) => Math.max(COST_HOT_DOG, COST_PIZZA, COST_KEBAB);
 export const sumNumbers = (minNumberN, maxNumberM, skipPariedNumbers, sum) => {
    for (let i = minNumberN; i <= maxNumberM; i++){
        if(skipPariedNumbers && i%2 === 1){
            sum += i;
        }
        else if(!skipPariedNumbers){
            sum += i;
        }
        }
        return sum;
 }
 export const getNumberPow = (num,pow) =>{
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
export const dividingStudentsIntoPairs = (students, femaleNames) => {
    const studentsGirls = [];
    const studentsBoys = [];
    const pairsOfStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (femaleNames.includes(students[i])){
            studentsGirls.push(students[i])
        }
        else {
            studentsBoys.push(students[i])
        }
    }
    for (let i = 0; i < femaleNames.length; i++) {
        pairsOfStudents[i] = [studentsBoys[i], studentsGirls[i]]
    }
    return pairsOfStudents;
}
export const getAverage = (...numbers) => {
    const arrayIntegerNumbers = numbers.filter(number => Number.isInteger(number));;
    const sumNumbers = arrayIntegerNumbers.reduce((sumNumbers, number) => {
        sumNumbers += number;
        return sumNumbers;
    })
    return sumNumbers/arrayIntegerNumbers.length;
}
export const calculateWordLetters = (word) => {
    const arrayLetters = word.toLowerCase().split("");
    let countLetters = {};
    for (let letter of arrayLetters) {
        if (countLetters.hasOwnProperty(letter)){
          countLetters[letter] += 1;
        }
        else{
          countLetters[letter] = 1;
        } 
    };
    return countLetters;
}
export function getMiddleTaxes() {
	return parseFloat(this.tax * this.middleSalary).toFixed(2);
}
export class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismissFlag = false;
    }
    getInfo(){
        console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`);
    }
    get getMarks(){
        return this.dismissFlag ? null: this.marks;
    }
    set setMarks(mark){
        if(!this.dismissFlag) this.marks.push(mark);
    }
    getAverageMark(){
        const sumMarks = this.marks.reduce((sumMarks, mark) => {
            return sumMarks += mark;
        })
        return sumMarks/this.marks.length;
    }
    dismiss(){
        this.dismissFlag = true;
    }
    recover(){
        this.dismissFlag = false;
    }
}
export const generateBlocks = () => {
    const SIDE_LENGTH_OF_SQUARE = 50;
    const NUMBER_OF_SQUARES = 25;
    const NUMBER_PER_LINE = 5;
    const baseForSquares = document.getElementById('baseForSquares');
    baseForSquares.style.width = `${NUMBER_PER_LINE * SIDE_LENGTH_OF_SQUARE}px`;
    baseForSquares.style.display = 'inline-flex';
    baseForSquares.style.flexWrap = 'wrap';
    baseForSquares.innerHTML = "";
    for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
        const squere = document.createElement("div");
        squere.style.height = squere.style.width =  `${SIDE_LENGTH_OF_SQUARE}px`;
        squere.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        baseForSquares.append(squere);
    }
}
function playSound(e){
    const code = e.keyCode ? e.keyCode: this.getAttribute("data-key");
    const activeAudio = document.querySelector('audio[data-key="' + code + '"]');
    activeAudio.currentTime = 0;
    activeAudio.play();
}
export const createChinaWord = () => {
    async function getRandomChinese (length) {
        const DELAY = 50;
        let resultString = '';
        for(let i = 0; i <= length; i++){
            const getRandomChinesChar = () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        return resolve(String.fromCharCode(String(Date.now()).slice(-5)))
                    },DELAY)
                });
            };
            resultString += await getRandomChinesChar();
        };
        return resultString;
    }
    getRandomChinese(4).then((result) => console.log(result));
}
export function* getId() {
    let i = 0;
    while(true) yield ++i;
}