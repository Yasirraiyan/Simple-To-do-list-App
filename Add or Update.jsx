const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    setItems([...items,input]); //items 1 ta array ei array te ... mane ager jinish er input add kori 
  };
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
