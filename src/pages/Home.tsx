import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import TodoList from '../components/TodoList';
import { TodoModel } from '../models';
import './Home.css';

const Home: React.FC = () => {
  const todos: TodoModel[] = [
    { text: 'Bananes', done: false },
    { text: 'Chocolat', done: false },
    { text: 'Poires', done: false },
  ];

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

      </IonContent>
    </IonPage>
  );
};

export default Home;
