import "./index.css"

import{maxCost} from "./utils";
import{sumNumbers} from "./utils";
import{getNumberPow} from "./utils";
import{dividingStudentsIntoPairs} from "./utils";
import{getAverage} from "./utils";
import{calculateWordLetters} from "./utils";
import{getMiddleTaxes} from "./utils";
import{Student} from "./utils";
import{createChinaWord} from "./utils";
import{getId} from "./utils";
const COST_HOT_DOG = 15.678;
const COST_PIZZA = 123.965;
const COST_KEBAB = 90.2345;
console.log(maxCost(COST_HOT_DOG, COST_PIZZA, COST_KEBAB));
//HW_1
let minNumberN = 1;
let maxNumberM = 9;
let skipPariedNumbers = true;
const sum = 0;
console.log(sumNumbers(minNumberN, maxNumberM, skipPariedNumbers, sum));
//HW_2
const num = 8;
const pow = 4;
console.log(getNumberPow(num, pow));
//HW_3
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const femaleNames = ["Олена", "Іра", "Світлана"];
console.log(dividingStudentsIntoPairs(students, femaleNames));
//HW_4
const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
console.log(getAverage(...numbers));
//HW_5
const word = 'test';
  console.log(calculateWordLetters(word));
//HW_6
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
console.log(getMiddleTaxes.call(latvia))
//HW_7
const student_1 = new Student('NURE', 3, 'Dmytro Malashchuk');
student_1.getInfo();
//HW_8
createChinaWord();
//HW_11
const idGenerator = getId();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
//HW_13