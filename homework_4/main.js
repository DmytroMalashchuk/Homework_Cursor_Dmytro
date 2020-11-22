const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const femaleNames = ["Олена", "Іра", "Світлана"];

const dividingStudentsIntoPairs = (students) => {
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
const getArrayPairsOfStudents = (pairsOfStudents) => {
    for (let i = 0; i < pairsOfStudents.length; i++){
        pairsOfStudents[i] = `${pairsOfStudents[i][0]} i ${pairsOfStudents[i][1]}`;
    }
    return pairsOfStudents;
}
const juxtaposingPairsWithProjects = (students, themes) => {
    const pairsAndProjects = [];
    const projects = [...themes];
    const ArrayWithPairsOfStudents = [...getArrayPairsOfStudents(dividingStudentsIntoPairs(students))];
    for (let i = 0; i < ArrayWithPairsOfStudents.length; i++) {
        pairsAndProjects[i] = [ArrayWithPairsOfStudents[i], projects[i]];
    }
    return pairsAndProjects;
}
const rateStudents = (students, marks) => {
    const arrayRateStudents = [];
    for (let i = 0; i < students.length; i++) {
        arrayRateStudents[i] = [students[i], marks[i]];               
    }
    return arrayRateStudents;
}
const getRandomNumber = () => {
    const randomNumber = +((Math.random() * 4) + 1).toFixed();
    return randomNumber;
}
const rateRatePairsOfStudents = (pairsAndProjects) => {
    const ratePairsOfStudents = [];
    for (let i = 0; i < pairsAndProjects.length; i++) {
        ratePairsOfStudents[i] = [pairsAndProjects[i], getRandomNumber()];
    }
    return ratePairsOfStudents;
}

document.writeln(dividingStudentsIntoPairs(students).join(' | ') + '</br>');
document.writeln(juxtaposingPairsWithProjects(students, themes).join(' | ') + '</br>');
document.writeln(rateStudents(students, marks).join(' | ') + '</br>');
document.writeln(rateRatePairsOfStudents(juxtaposingPairsWithProjects(students, themes)).join(' | '));