import { IonButton, IonCheckbox, IonItem, IonLabel } from "@ionic/react";
import React, { FC, useContext } from "react";
import { TodoContext } from "../contexts";
import { TodoModel } from "../models";

interface TodoProps {
  todo: TodoModel,
}

const Todo: FC<TodoProps> = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <IonItem>
      <IonCheckbox
        slot="start"
        color="primary"
        checked={todo.done}
      />
      <IonLabel>{todo.text}</IonLabel>
      <IonButton
        color="danger"
        size="small"
        onClick={() => deleteTodo(todo.id)}
      >
        Supprimer
      </IonButton>
    </IonItem>
  );
}

export default Todo;
