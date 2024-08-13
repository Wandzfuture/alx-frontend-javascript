function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentsInCity = students.filter(student => student.location === city);

  return studentsInCity.map(student => {
    const gradeObject = newGrades.find(grade => grade.studentId === student.id);

    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A'
    };
  });
}
