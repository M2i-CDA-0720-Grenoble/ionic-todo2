import { createContext } from "react";
import { TodoModel } from "../models";

interface TodoContextType {
  todos: TodoModel[],
  addTodo: (newTodo: TodoModel) => void,
  deleteTodo: (id: number) => void,
  updateTodo: (id: number, updatedTodo: TodoModel) => void,
}

export default createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
});
