// 3 VARIABLES / PROPERTIES
let school = "NWSSU";
let year = 1;
let course = "Computer Science";

// 3 ARRAYS
let subjects = ["Math", "Science", "English"];
let grades = [90, 85, 88];
let hobbies = ["Gaming", "Movies", "Reading"];

// 4 CLASSES
class Person {
    // CONSTRUCTOR 1
    constructor(name) {
        this.name = name;
    }

    // ENCAPSULATION 1
    getName() {
        return this.name;
    }

    // POLYMORPHISM
    getRole() {
        return "Person";
    }
}

class Student extends Person {
    // CONSTRUCTOR 2
    constructor(name, section) {
        super(name);
        this.section = section;
    }

    // ENCAPSULATION 2
    setSection(section) {
        this.section = section;
    }

    // POLYMORPHISM
    getRole() {
        return "Student";
    }
}

class Teacher {
    constructor(name) {
        this.name = name;
    }

    teach() {
        return "Teacher is teaching.";
    }
}

class Course {
    constructor(name) {
        this.name = name;
    }

    showCourse() {
        return this.name;
    }
}

// 4 OBJECTS
let student = new Student("Marcial", "BSCS 1A");
let person = new Person("Ian");
let teacher = new Teacher("Mac");
let subject = new Course("Science");

// 2 OBJECT LITERALS
let schoolInfo = {
    name: "NWSSU",
    city: "Calbayog"
};

let studentInfo = {
    age: 19,
    status: "College Student"
};

// 3 CONDITIONALS
if (year == 1) {
    console.log("First Year Student");
}

if (grades[0] >= 75) {
    console.log("Math: Passed");
}

if (student.section == "BSCS 1A") {
    console.log("Section: BSCS 1A");
}

// 3 LOOPS
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

for (let grade of grades) {
    console.log(grade);
}

for (let hobby of hobbies) {
    console.log(hobby);
}

// OUTPUT
console.log(student.getName());
console.log(student.getRole());
console.log(teacher.teach());
console.log(subject.showCourse());
console.log(schoolInfo.name);
console.log(studentInfo.status);