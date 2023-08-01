export default function getStudentsByLocation(students, city) {
  const specifiCity = students.filter(({ location }) => location === city);
  return specifiCity;
}
