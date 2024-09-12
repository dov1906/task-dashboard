import React from 'react';

function Task({ task, deleteTask, toggleTaskStatus }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <span className="priority">Priority: {task.priority}</span>
      <button onClick={() => toggleTaskStatus(task.id)}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
