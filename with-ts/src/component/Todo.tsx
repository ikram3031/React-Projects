import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <>
      <h2>Todo</h2>
      <button onClick={() => addTodo("new todo")}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            {todo.completed ? "Completed" : "Not completed"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
