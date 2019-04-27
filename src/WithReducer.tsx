import React from 'react';

import Todo from './Todo';

interface IState {
  todo: string;
  todos: string[];
}

interface IAction {
  type: string;
  payload?: string | number;
}

const ADD_TODO = 'ADD_TODO';
const SET_TODO = 'SET_TODO';
const DELETE_TODO = 'DELETE_TODO';

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, state.todo], todo: '' };
    case SET_TODO:
      return { ...state, todo: action.payload as string };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload!),
      };
    default:
      return state;
  }
}

function WithReducer(): React.ReactElement {
  const [{ todos, todo }, dispatch] = React.useReducer(reducer, {
    todo: '',
    todos: [],
  });

  const memoizedChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: SET_TODO, payload: event.target.value });
    },
    [],
  );
  return (
    <div>
      <label htmlFor="todo-field-reducer">Todo here</label>
      <input
        type="text"
        name="todo"
        id="todo-field-reducer"
        placeholder="Todo here"
        value={todo}
        onChange={memoizedChange}
      />
      <button
        disabled={!todo}
        onClick={() => {
          dispatch({ type: ADD_TODO });
        }}
      >
        Add todo
      </button>
      {todos.map((todoText, index) => (
        <Todo
          key={index}
          onDelete={() => {
            dispatch({ type: DELETE_TODO, payload: index });
          }}
        >
          {todoText}
        </Todo>
      ))}
    </div>
  );
}

export default WithReducer;
