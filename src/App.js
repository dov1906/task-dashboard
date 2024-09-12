import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AuthForm from './components/AuthForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const login = (credentials) => {
    if (credentials.username === 'user' && credentials.password === 'password') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <AuthForm onLogin={login} />
      ) : (
        <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
      )}
    </div>
  );
}

export default App;
