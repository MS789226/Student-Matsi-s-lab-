const student = {
    name: "Matsie .S ",
    age: 37,
    enrolled: true,
    courses: ["chemistry", "phsyics", "Biology"],
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};


console.log(student.name);
console.log(student.age)
console.log(student.displayInfo());


part 2


const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log(newStudent);



console.log(newStudent === student); 


part 3


const { name, courses } = student;
console.log(studentname);
console.log(courses);

const scores = [85, 92, 78, 90];


const [firstScore, secondScore] = scores;
console.log(firstScore, secondScore);


part 4
const clonedStudent = { ...student, graduationYear: 2026 };
console.log(clonedStudent);


const newCourses = ["sciences", "inlabs"];
const allCourses = [...student.courses, ...newCourses];
console.log(allCourses);


part 5

student.addCourse = function(course) {
    this.courses.push(course);
};

student.totalCourses = function() {
    return this.courses.length;
};


student.addCourse("Computer Science");
console.log(student.totalCourses());


