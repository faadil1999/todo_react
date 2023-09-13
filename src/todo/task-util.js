let nextId = 1;

export function createNewTask(label, completed = false) {
  return {id: nextId++, label, completed};
}


export const INITIAL_TASKS = [
  createNewTask('apprendre Redux'),
  createNewTask('Sortir le chien', true),
  createNewTask('Go to Mars'),
];
