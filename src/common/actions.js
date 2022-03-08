export const ADD = 'ADD_TODO';
export const DELETE = 'DELETE_TODO';
export const TOGGLE = 'TOGGLE_TODO';

let id = 4;

export const onInsert = (todo) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      text: todo.text,
      checked: todo.checked,
    },
  };
};

export const onRemove = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const onToggle = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};
