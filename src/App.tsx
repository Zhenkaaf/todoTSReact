import React, { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import NewTodoForm from "./components/NewItem";
import { Todo } from "./types";
import TodoList from "./features/Todo/TodoList";
import NewTodo from "features/Todo/NewTodo";
import NewAsyncTodo from "features/AsyncTodo/NewAsyncTodo";
import AsyncTodoList from "features/AsyncTodo/AsyncTodoList";

/* type ITodo = {
  id: string;
  title: string;
  completed: boolean;
}; */

function App() {
  /*   const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [] = useState<ITodo | null>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    //setText(''); -useref
  };

  const toggleTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  const removeTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }; */

  /* useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then((data: Todo[]) => {
    setTodos(data);
  })
}, []); */

  return (
    <div className="App">
      <NewTodo
      /* value={text} onChange={handleInput} /-useRef */
      />
      {/*  <TodoItem
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        id="112"
        title="first todo"
        completed={false}
        style={{ border: "1px solid green" }}
      /> */}
      <TodoList
      /* list={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo} */
      />
      <hr />
      <NewAsyncTodo />
      <AsyncTodoList />
    </div>
  );
}

export default App;
