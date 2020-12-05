const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  getSubjects = (student) => {
    const arraySubjects = Object.keys(student.subjects);
    return arraySubjects.map((subject) =>{
        return subject[0].toUpperCase() + subject.slice(1).replace("_"," ");
    });
  }

  getAverageMark = (student) => {
    const arrayMark = Object.values(student.subjects);
    let sumMark = 0;
    let arrayLenght = 0;
    for (let j = 0; j < arrayMark.length; j++) {
        for (let i = 0; i < arrayMark[j].length; i++) {
            sumMark += arrayMark[j][i];
        }
        arrayLenght += arrayMark[j].length;
    }
    return parseFloat((sumMark/arrayLenght).toFixed(2));
  }

  getStudentInfo = (student) => {
      const {name} = student;
      const {course} = student;
      const averageMark = getAverageMark(student);
      const studentInfo = `name: ${name}, course: ${course}, averageMark: ${averageMark}`
      return studentInfo;
  }

  getStudentsNames = (students) => {
    return students.map((student) => {
        return student.name
    }).sort();
  }

  getBestStudent = (students) => {
      students.sort((a,b) => {
          return getAverageMark(a) - getAverageMark(a);
      })
      return students[students.length - 1].name;
  }

  calculateWordLetters = (word) => {
      const arrayLetters = word.toLowerCase().split("");
      let countLetters = {};
      for (letter of arrayLetters) {
          if (countLetters.hasOwnProperty(letter)){
            countLetters[letter] += 1;
          }
          else{
            countLetters[letter] = 1;
          } 
  };
  return countLetters;
  }

  document.writeln(`Результат работы функции getSubjects: ${getSubjects(students[0])} </br>`)
  document.writeln(`Результат работы функции getAverageMark: ${getAverageMark(students[0])} </br>`)
  document.writeln(`Результат работы функции getStudentInfo: ${getStudentInfo(students[0])} </br>`)
  document.writeln(`Результат работы функции getStudentsNames: ${getStudentsNames(students)} </br>`)
  document.writeln(`Результат работы функции getBestStudent: ${getBestStudent(students)} </br>`)
  document.writeln(`Результат работы функции calculateWordLetters: ${calculateWordLetters("test")} 
  ${Object.entries(calculateWordLetters("test"))} </br>`)