export const GET_TODOS = 'GET_TODOS';
export const SUBMIT_TODO = 'SUBMIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const todos = [{ value: 'todos', completed: false }];

export const getTodos = () => {
  return { 
    type: GET_TODOS,
    payload: todos
  }
};

export const submitTodo = () => {
  return { 
    type: SUBMIT_TODO,
    payload: todos
  }
};

export const toggleTodo = () => {
  return { 
    type: TOGGLE_TODO,
    payload: todos
  }
};