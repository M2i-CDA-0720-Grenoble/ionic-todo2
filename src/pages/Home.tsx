import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { FC, useState } from 'react';
import TodoList from '../components/TodoList';
import { TodoModel } from '../models';
import './Home.css';

const defaultTodos: TodoModel[] = [
  { text: 'Bananes', done: false },
  { text: 'Chocolat', done: false },
  { text: 'Poires', done: false },
];

interface AddTodoFormProps {
  addTodo: (newTodo: TodoModel) => void,
}

const AddTodoForm: FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleClick = () => {
    addTodo({
      text,
      done: false,
    });
  }

  return (
    <>
      <IonItem>
        <IonLabel position="floating">Nouvelle tâche</IonLabel>
        <IonInput
          value={text}
          onIonChange={(event) => setText( (event.target as HTMLInputElement).value)}
        />
      </IonItem>
      <IonButton onClick={handleClick} expand="block">Ajouter</IonButton>
    </>
  );
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>(defaultTodos);

  const addTodo = (newTodo: TodoModel): void => {
    setTodos([
      ...todos,
      newTodo,
    ]);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <TodoList
          todos={todos}
        />

        <AddTodoForm
          addTodo={addTodo}
        />

      </IonContent>
    </IonPage>
  );
};

export default Home;
