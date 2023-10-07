import React from "react";
import { Todo } from "../types";

interface TodoItemProps extends Todo {
  /* id: string,
    title: string,
    completed: boolean, приходит из extends Todo*/
  /*  children: React.ReactNode, если обернуть эоементом TodoItem другой элемент, он попадет в чилдрен */
  style?: React.CSSProperties;
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

/* const TodoItem: React.FC<TodoItemProps> = ({id, title, completed}) => { */
const TodoItem = ({
  id,
  toggleTodo,
  removeTodo,
  title,
  completed,
  /* children */ style = {},
}: TodoItemProps) => {
  return (
    <li style={{ color: "black", backgroundColor: "white", ...style }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
      {/*   {children} */}
    </li>
  );
};
export default TodoItem;
