export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employeesArray = [];

  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employeesArray.push(...allEmployees[department]);
    }
  }

  return employeesArray[Symbol.iterator]();
}
