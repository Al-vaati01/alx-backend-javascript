export default function getStudentIdsSum(list) {
  const initialValue = 0;
  return list.reduce((returnValue, { id }) => returnValue + id, initialValue);
}
