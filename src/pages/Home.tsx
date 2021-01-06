import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { FC, useContext, useState } from 'react';
import TodoList from '../components/TodoList';
import { TodoContext } from '../contexts';
import { TodoModel } from '../models';
import './Home.css';

const defaultTodos: TodoModel[] = [
  { id: 1, text: 'Bananes', done: false },
  { id: 2, text: 'Chocolat', done: false },
  { id: 3, text: 'Poires', done: false },
];

interface AddTodoFormProps { }

const AddTodoForm: FC<AddTodoFormProps> = () => {
  const { addTodo } = useContext(TodoContext);

  const [text, setText] = useState('');

  const handleClick = () => {
    addTodo({
      // TODO: créer un système de gestion des ID
      id: Math.random(),
      text,
      done: false,
    });
    setText('');
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

  const deleteTodo = (id: number): void => {
    setTodos(
      todos.filter( todo => todo.id !== id )
    );
  }

  const updateTodo = (id: number, updatedTodo: TodoModel): void => {
    setTodos(
      todos.map( todo => todo.id === id ? updatedTodo : todo )
    )
  }

  const contextValue = {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
  };

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

        <TodoContext.Provider value={contextValue}>
          <TodoList />

          <AddTodoForm />
        </TodoContext.Provider>

      </IonContent>
    </IonPage>
  );
};

export default Home;
