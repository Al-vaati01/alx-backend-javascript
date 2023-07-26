export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    const err = new Error(error);
    queue.push(err.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
