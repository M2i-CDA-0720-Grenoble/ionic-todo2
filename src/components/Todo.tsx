import { IonButton, IonCheckbox, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal } from "@ionic/react";
import React, { FC, useContext, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { TodoContext } from "../contexts";
import { TodoModel } from "../models";

interface TodoProps {
  todo: TodoModel,
}

const Todo: FC<TodoProps> = ({ todo }) => {
  const sliderRef = useRef<HTMLIonItemSlidingElement>(null);

  const { deleteTodo, updateTodo } = useContext(TodoContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => { deleteTodo(todo.id); sliderRef.current?.close(); },
    trackMouse: true,
  });

  const changeTodoText = (text: string) => {
    const { id } = todo;

    const updatedTodo: TodoModel = {
      id,
      text,
      done: todo.done,
    };

    updateTodo(
      id,
      updatedTodo
    );

    setModalOpen(false);
  }

  const changeTodoDone = (done: boolean) => {
    const { id } = todo;

    const updatedTodo: TodoModel = {
      id,
      text: todo.text,
      done,
    }

    updateTodo(
      id,
      updatedTodo
    );
  }

  return (
    <>
      <IonItemSliding {...swipeHandlers} ref={sliderRef}>

        <IonItemOptions side="start">
          <IonItemOption color="danger">
            Supprimer
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonCheckbox
            slot="start"
            color="primary"
            checked={todo.done}
            onIonChange={(event) => changeTodoDone(event.detail.checked)}
          />
          <IonLabel>{todo.text}</IonLabel>

          <IonButton
            color="secondary"
            onClick={() => setModalOpen(true)}
          >
            Modifier
          </IonButton>
        </IonItem>

      </IonItemSliding>

      <IonModal isOpen={modalOpen}>
        <IonItem>
          <IonLabel position="floating">Nom de la tâche</IonLabel>
          <IonInput
            value={newText}
            onIonChange={(event) => setNewText(event.detail.value as string)}
          />
        </IonItem>

        <IonList>
          <IonButton
            expand="block"
            onClick={() => changeTodoText(newText)}
          >
            Valider
          </IonButton>

          <IonButton
            color="medium"
            expand="block"
            onClick={() => setModalOpen(false)}
          >
            Annuler
          </IonButton>
        </IonList>
      </IonModal>
    </>
  );
}

export default Todo;
