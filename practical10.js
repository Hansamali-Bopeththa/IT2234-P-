[
    { "name": "Hasini","gender": "Female","course": "IT","gpa": 3.2 },
    { "name": "Hasitha","gender": "Male","course": "Engineering","gpa": 3.5},
    { "name": "Sadini","gender": "Female", "course": "Engineering","gpa": 3.9},
    { "name": "Lashika","gender": "Male", "course": "Mathematics","gpa": 3.5},
    { "name": "Dilki","gender": "Female","course": "IT", "gpa": 3.7 },
    { "name": "Thamidu","gender": "Male", "course": "IT","gpa": 3.4},
    { "name": "Nethmi","gender": "Female","course": "Engineering", "gpa": 3.6},
    { "name": "Isuru","gender": "Male","course": "Mathematics","gpa": 3.3},
    {"name": "Yashika","gender": "Female","course": "IT", "gpa": 4.0},
    { "name": "John","gender": "Male", "course": "IT", "gpa": 3.1}
]

const students = [
    { name: "Hasini", gender: "Female", course: "IT", gpa: 3.2 },
    { name: "Hasitha",gender: "Male",   course: "Engineering",gpa: 3.5},
    { name: "Sadini", gender: "Female", course: "Engineering",gpa: 3.9},
    { name: "Lashika",gender: "Male",   course: "Mathematics",gpa: 3.5},
    { name: "Dilki",  gender: "Female", course: "IT", gpa: 3.7 },
    { name: "Thamidu",gender: "Male",   course: "IT",gpa: 3.4},
    { name: "Nethmi", gender: "Female", course: "Engineering", gpa: 3.6},
    { name: "Isuru",  gender: "Male",   course: "Mathematics",gpa: 3.3},
    { name: "Yashika",gender: "Female", course: "IT", gpa: 4.0},
    { name: "Sahan",  gender: "Male",   course: "IT", gpa: 3.1}
];


const femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);


const itStudents = students.filter(student => student.course === "IT");
console.log("IT Course Students:", itStudents);

const maxGPA = Math.max(...students.map(student => student.gpa));
const avgGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));
