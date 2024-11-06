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
