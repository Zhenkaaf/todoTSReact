import { Todo } from "../../types";
import TodoItem from "../../components/TodoItem";
import { useAppDispatch, useAppSelector } from "redux-hooks";
import { removeTodo, toggleTodo } from "./todoSlice";
import { selectAllTodos } from "./todoSelectors";
import { useSelector } from "react-redux";
/* interface TodoListProps {
  list: Todo[];
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
} */

const TodoList = (/* { list, toggleTodo, removeTodo }: TodoListProps */) => {
  //const list = useAppSelector((state) => state.todos);
  const list = useSelector(selectAllTodos);
  const dispatch = useAppDispatch();
  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };
  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={handleToggleTodo}
          removeTodo={handleRemoveTodo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
