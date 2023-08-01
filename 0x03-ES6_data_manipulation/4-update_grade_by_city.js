export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentsInCity = list.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    const updatedStudent = { ...student };

    updatedStudent.grade = gradeObject ? gradeObject.grade : 'N/A';

    return updatedStudent;
  });

  return updatedStudents;
}
