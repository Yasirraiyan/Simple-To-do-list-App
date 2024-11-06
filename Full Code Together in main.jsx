import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    // Handle input change
    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    // Add or update a task
    const addOrUpdateTask = () => {
        if (taskInput.trim() !== '') {
            if (isEditing) {
                // Update the task at the specific index
                const updatedTasks = tasks.map((task, index) =>
                    index === currentIndex ? taskInput : task
                );
                setTasks(updatedTasks);
                setIsEditing(false);
                setCurrentIndex(null);
            } else {
                // Add a new task
                setTasks([...tasks, taskInput]);
            }
            setTaskInput(''); // Clear input after adding/updating
        }
    };

    // Delete a task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    // Edit a task
    const editTask = (index) => {
        setTaskInput(tasks[index]);
        setIsEditing(true);
        setCurrentIndex(index);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Simple To-Do List</h1>
            <label>Enter your text here:</label>
            <input
                type="text"
                value={taskInput}
                onChange={handleInputChange}
                placeholder="Add or edit a task"
            />
            <button onClick={addOrUpdateTask}>{isEditing ? 'Update' : 'Add'}</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => editTask(index)} style={{ marginLeft: '10px' }}>Edit</button>
                        <button onClick={() => deleteTask(index)} style={{ marginLeft: '5px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoApp
