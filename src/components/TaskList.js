import React, { useState } from 'react';
import Task from './Task';

function TaskList({ tasks, addTask, deleteTask, toggleTaskStatus }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskPriority, setTaskPriority] = useState('Low');

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: taskTitle,
      priority: taskPriority,
      completed: false,
      createdAt: new Date()
    };
    addTask(newTask);
    setTaskTitle('');
  };

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task title"
          required
        />
        <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
