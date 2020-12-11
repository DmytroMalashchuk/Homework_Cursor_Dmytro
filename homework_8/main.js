class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismissFlag = false;
    }
    getInfo(){
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }
    get getMarks(){
        return this.dismissFlag === true ? null: this.marks;
    }
    set setMarks(mark){
        if(this.dismissFlag === false) this.marks.push(mark);
    }
    getAverageMark(){
        const sumMarks = this.marks.reduce((sumMarks, mark) => {
            sumMarks += mark;
            return sumMarks;
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

const student_1 = new Student('NURE', 3, 'Dmytro Malashchuk');
console.log(student_1);
console.log(student_1.getInfo());
console.log(student_1.getMarks);
student_1.setMarks = 5;
console.log(student_1.getMarks);
console.log(student_1.getAverageMark());
student_1.dismiss();
student_1.setMarks = 5;
console.log(student_1.getMarks);
student_1.recover();
student_1.setMarks = 5;
console.log(student_1.getMarks);