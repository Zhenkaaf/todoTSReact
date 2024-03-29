import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "types";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "@todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: new Date().toString(),
        title: action.payload,
        completed: false,
      };
      return [newTodo, ...state];
    },
    toggleTodo: (state, action: PayloadAction<Todo["id"]>) => {
      /* return state.map(todo => {
            if(todo.id !== action.payload) return todo;
            return {
              ...todo,
              completed: !todo.completed,
            }
          }) */
      const todo = state.find((el) => el.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<Todo["id"]>) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
