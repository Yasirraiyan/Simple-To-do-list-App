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
