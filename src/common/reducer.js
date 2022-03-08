import { ADD, DELETE, TOGGLE } from './actions';

const initialState = {
  todos: [
    {
      id: 1,
      text: '안녕하세요',
      checked: true,
    },
    {
      id: 2,
      text: '반갑습니다',
      checked: false,
    },
    {
      id: 3,
      text: '힘내봐요',
      checked: false,
    },
  ],
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      todos: [...state.todos, action.todo],
    };
  } else if (action.type === DELETE) {
    return {
      todos: [...state.todos.filter((todo) => todo.id !== action.id)],
    };
  } else if (action.type === TOGGLE) {
    return {
      todos: [
        ...state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
        ),
      ],
    };
  } else {
    return state;
  }
};
