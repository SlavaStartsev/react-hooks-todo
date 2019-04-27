import React from 'react';

import Todo from './Todo';

function WithState(): React.ReactElement {
  const [todo, setTodo] = React.useState('');
  const [todos, addTodo] = React.useState<string[]>([]);

  return (
    <div>
      <label htmlFor="todo-field-state">Todo here</label>
      <input
        type="text"
        name="todo"
        id="todo-field-state"
        placeholder="Todo here"
        value={todo}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTodo(event.target.value);
        }}
      />
      <button
        disabled={!todo}
        onClick={() => {
          addTodo([...todos, todo]);
          setTodo('');
        }}
      >
        Add todo
      </button>
      {todos.map((todoText, index) => (
        <Todo key={index}>{todoText}</Todo>
      ))}
    </div>
  );
}

WithState.fakeDeleteCallback = () => {};

export default WithState;
