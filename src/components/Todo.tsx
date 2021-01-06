import { IonCheckbox, IonItem, IonLabel } from "@ionic/react";
import React, { FC } from "react";
import { TodoModel } from "../models";

interface TodoProps {
  todo: TodoModel,
}

const Todo: FC<TodoProps> = ({ todo }) =>
  <IonItem>
    <IonCheckbox
      slot="start"
      color="primary"
      checked={todo.done}
    />
    <IonLabel>{todo.text}</IonLabel>
  </IonItem>
;

export default Todo;
