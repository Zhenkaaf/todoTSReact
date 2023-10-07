import { Todo } from "../../types/Todo";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoSlice } from "./asyncTodoSlice";

export const fetchcAllTodos = createAsyncThunk<
  Todo[],
  undefined,
  { state: { asyncTodos: TodoSlice } }
>(
  "todos/fetchTodos",
  async () => {
    const response = await fetch(
      "http://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return await response.json();
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncTodos;
      if (status === "loading") {
        return false;
      }
    },
  }
);

export const createTodo = createAsyncThunk<Todo, string>(
  "todo/createTodo",
  async (text) => {
    const newTodo: Required<Omit<Todo, "id">> = {
      title: text,
      userId: 1,
      completed: false,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    return await response.json();
  }
);

export const removeTodo = createAsyncThunk(
  "todo/removeTodo",
  async (id: Todo["id"], { rejectWithValue }) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + id,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      return rejectWithValue("impossible to delete todo with id " + id);
    }
    return id;
  }
);
