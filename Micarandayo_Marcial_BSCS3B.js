//Activity 1.2

let school = "NWSSU";
let year = 3;
let course = "Computer Science";

let subjects = ["Math", "Science", "English"];
let grades = [90, 85, 88];
let hobbies = ["Gaming", "Movies", "Reading"];

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Person";
    }
}

class Student extends Person {
    constructor(name, section) {
        super(name);
        this.section = section;
    }

    setSection(section) {
        this.section = section;
    }

    getRole() {
        return "Student";
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    teach() {
        return "Teacher is teaching.";
    }

    getRole() {
        return "Teacher";
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

let student = new Student("Marcial", "BSCS 3B");
let student2 = new Student("Ian", "BSCS 3A");
let teacher = new Teacher("Mac", "Programming");
let subject = new Course("Science");

let schoolInfo = {
    name: "NWSSU",
    city: "Calbayog"
};

let studentInfo = {
    age: 19,
    status: "College Student"
};

if (year == 3) {
    console.log("Third Year Student");
}

if (grades[0] >= 75) {
    console.log("Math: Passed");
}

if (student.section == "BSCS 3B") {
    console.log("Section: BSCS 3B");
}

for (let i = 0; i < subjects.length; i++) {
    console.log("Subject: " + subjects[i]);
}

for (let grade of grades) {
    console.log("Grade: " + grade);
}

for (let hobby of hobbies) {
    console.log("Hobby: " + hobby);
}

let displayStudent = (student) => {
    console.log("Name: " + student.getName());
    console.log("Role: " + student.getRole());
};

displayStudent(student);

console.log("Second Student: " + student2.getName());
console.log("Role: " + student2.getRole());

console.log("Teacher: " + teacher.getName());
console.log("Teacher Role: " + teacher.getRole());
console.log(teacher.teach());

console.log("Course: " + subject.showCourse());

console.log("School: " + schoolInfo.name);
console.log("City: " + schoolInfo.city);

console.log("Student Status: " + studentInfo.status);