const { json } = require("express");

function student(name, age, enrolled, courses){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.courses = courses;

        this.displayInfo = function(){
            console.log(`Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses} `);
            
        };
}

    const student1 = new student("Tyrel", 24, true, ["CPAN-111-RNA", "CPAN-133-RNA", "CPAN-116-RNA", "WRIT-120-DWB", "CPAN-113-RNA", "CPAN-134-RNA"]);
        console.log(student1.name, student1.age);

        student1.displayInfo();
        

    let jsonString = JSON.stringify(student1);
        console.log(jsonString);

    let newStudent = JSON.parse(jsonString);
        console.log(newStudent);
        console.log(student1 === newStudent);
        
        
        