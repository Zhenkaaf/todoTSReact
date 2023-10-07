import { Todo } from "../../types";
import TodoItem from "../../components/TodoItem";
import { useAppDispatch, useAppSelector } from "redux-hooks";
import { useSelector } from "react-redux";
import { selectAsyncTodos } from "./asyncTodoSelectors";
import { useEffect } from "react";
import { fetchcAllTodos, removeTodo, toggleTodo } from "./todoAsyncActions";

const AsyncTodoList = () => {
  const { list } = useSelector(selectAsyncTodos);
  const dispatch = useAppDispatch();
  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };
  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  useEffect(() => {
    dispatch(fetchcAllTodos());
  }, []);

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
export default AsyncTodoList;
