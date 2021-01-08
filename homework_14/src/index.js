const COST_HOT_DOG = 15.678;
const COST_PIZZA = 123.965;
const COST_KEBAB = 90.2345;
import{getModaNumbers, maxCost} from "./utils";
console.log(maxCost(COST_HOT_DOG, COST_PIZZA, COST_KEBAB));
//HW_1
let minNumberN = 1;
let maxNumberM = 9;
let skipPariedNumbers = true;
const sum = 0;
import{sumNumbers} from "./utils";
console.log(sumNumbers(minNumberN, maxNumberM, skipPariedNumbers, sum));
//HW_2
const num = 8;
const pow = 4;
import{getNumberPow} from "./utils";
console.log(getNumberPow(num, pow));
//HW_3
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const femaleNames = ["Олена", "Іра", "Світлана"];
import{dividingStudentsIntoPairs} from "./utils";
console.log(dividingStudentsIntoPairs(students, femaleNames));
//HW_4
const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
import{getAverage} from "./utils";
console.log(getAverage(...numbers));
//HW_5
const word = 'test';
  import{calculateWordLetters} from "./utils";
  console.log(calculateWordLetters(word));
//HW_6
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
import{getMiddleTaxes} from "./utils";
console.log(getMiddleTaxes.call(latvia))
//HW_7
const student_1 = new Student('NURE', 3, 'Dmytro Malashchuk');
import{Student} from "./utils";
student_1.getInfo();
//HW_8
import{generateBlocks} from "./utils";
setInterval(()=>generateBlocks(),1000);
//HW_9

import{createChinaWord} from "./utils";
createChinaWord();

