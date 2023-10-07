import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "features/Todo/todoSlice";
import asyncTodoReducer from "features/AsyncTodo/asyncTodoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
  asyncTodos: asyncTodoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

//export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* RootState - это тип, который используется для определения типа корневого состояния (root state) в Redux приложении.

В предоставленном коде, RootState определяется с использованием ReturnType и typeof store.getState().

store.getState() - это метод Redux Store, который возвращает текущее состояние хранилища.

typeof - это оператор языка TypeScript, который возвращает тип значения.

ReturnType - это встроенный тип TypeScript, который извлекает тип возвращаемого значения из функции.

Итак, ReturnType<typeof store.getState> означает, что мы берем тип возвращаемого значения функции store.getState(), то есть тип текущего состояния хранилища.

Тип RootState используется для указания типа корневого состояния Redux во всем приложении. Он обычно экспортируется и используется в других частях кода для обеспечения типизации и доступа к состоянию хранилища в различных частях приложения. */
