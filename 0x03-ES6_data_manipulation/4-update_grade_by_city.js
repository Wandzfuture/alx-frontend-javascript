function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  // Step 1: Filter students by the specified city
  const studentsInCity = students.filter(student => student.location === city);

  // Step 2: Map over the filtered students to update grades
  return studentsInCity.map(student => {
    // Find the grade object for the student in the newGrades array
    const gradeObject = newGrades.find(grade => grade.studentId === student.id);

    // If found, use the grade from newGrades; otherwise, use 'N/A'
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A'
    };
  });
}
