import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "types";
import { createTodo, fetchcAllTodos } from "./todoAsyncActions";

export type TodoSlice = {
  status: "idle" | "loading" | "finished" | "error";
  list: Todo[];
};

const initialState: TodoSlice = {
  status: "idle",
  list: [],
};

const todoSlice = createSlice({
  name: "@todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcAllTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchcAllTodos.fulfilled, (state, action) => {
        state.status = "finished";
        state.list = action.payload;
      })
      .addCase(fetchcAllTodos.rejected, (state) => {
        state.status = "error";
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default todoSlice.reducer;
