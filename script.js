const { json } = require("express");

function student(name, age, enrolled, courses){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.courses = courses;

        this.displayInfo = function(){
            console.log(`Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses} `);
            
        };

    this.addCourse = function(newCourse){
        this.courses.push(newCourse);
            console.log(`${newCourse} Course added successfully.`);
            
    };

    this.getTotalCourses = function(){
        return this.courses.length;
    };
}

    const student1 = new student("Tyrel", 24, true, ["CPAN-111-RNA", "CPAN-133-RNA", "CPAN-116-RNA", "WRIT-120-DWB", "CPAN-113-RNA", "CPAN-134-RNA"]);
        console.log(student1.name, student1.age);

        student1.displayInfo();

    student1.addCourse("ARTS-117-RNA");
        console.log(`Total Courses: ${student1.getTotalCourses()}`);
        
        

    // let jsonString = JSON.stringify(student1);
    //     console.log(jsonString);

    // let newStudent = JSON.parse(jsonString);
    //     console.log(newStudent);
    //     console.log(student1 === newStudent);
        
        
// const {name, courses} = student1;
//     console.log("Name:", name);
//     console.log("Courses:", courses);

// const scores = [100, 95, 88, 64];

// const [score1, score2] = scores;
// console.log("Score 1:", score1);
// console.log("Score 2:", score2);

    
// let clonedStudent = {...student1};
// clonedStudent.graduationYear = 2026;
//     console.log(clonedStudent);

// let newCourses = ["BIO-200-RNA", "ARTS-117-RNA"];
// let combinedCoursesArray = [...student1.courses, ...newCourses];
// console.log(combinedCoursesArray);

    