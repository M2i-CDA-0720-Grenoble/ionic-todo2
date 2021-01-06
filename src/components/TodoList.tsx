import { IonList } from "@ionic/react";
import React, { FC } from "react";
import { TodoModel } from "../models";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoModel[],
}

const TodoList: FC<TodoListProps> = ({ todos }) =>
  <IonList>
    {
      todos.map(
        (todo, index) =>
          <Todo key={index} todo={todo} />
      )
    }
  </IonList>
;

export default TodoList;
