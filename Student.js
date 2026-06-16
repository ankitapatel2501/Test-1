const students = [
  { name: 'Aarav', marks: 78, passed: true, subject: 'Math' },
  { name: 'Diya', marks: 42, passed: false, subject: 'Science' },
  { name: 'Kabir', marks: 88, passed: true, subject: 'Math' },
  { name: 'Meera', marks: 65, passed: true, subject: 'English' },
  { name: 'Rohan', marks: 38, passed: false, subject: 'Science' },
  { name: 'Isha', marks: 92, passed: true, subject: 'Math' },
  { name: 'Vivaan', marks: 75, passed: true, subject: 'English' },
  { name: 'Anaya', marks: 70, passed: true, subject: 'Science' }
];
const totalMarks = students.reduce((total, student) => total + (student.marks > 70 ? student.marks : 0), 0);
console.log(students.filter(student => student.passed === true && student.marks > 70));
console.log(students.filter(student => student.marks >70 && student.totalMarks))
console.log(totalMarks);

console.log(students.filter(student =>student.marks === Math.max(...students.filter(s => s.subject === 'Math').map(s => s.marks))).map(student => student.name));
console.log(students.filter(student =>student.marks === English.max(...students.filter(s => s.subject === 'English').map(s => s.marks))).map(student => student.name));
console.log(students.filter(student =>student.marks === Science.max(...students.filter(s => s.subject === 'Science').map(s => s.marks))).map(student => student.name));
export default students;