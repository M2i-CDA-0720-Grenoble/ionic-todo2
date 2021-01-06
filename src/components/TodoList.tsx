import { IonList } from "@ionic/react";
import React, { FC, useContext } from "react";
import { TodoContext } from "../contexts";
import Todo from "./Todo";

interface TodoListProps { }

const TodoList: FC<TodoListProps> = () => {
  const { todos } = useContext(TodoContext);

  return (
    <IonList>
      {
        todos.map(
          (todo, index) =>
            <Todo key={index} todo={todo} />
        )
      }
    </IonList>
  );
}

export default TodoList;
