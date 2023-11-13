import {useEffect, useState} from 'react'
import './App.css'
import {NewTask} from "./Components/NewTask.jsx";
import {Tasks} from "./Components/Tasks.jsx";

function App() {
    const [newTask, setNewTask] = useState('hello');
    const [tasks, setTasks] = useState([]);
    const localStorageKey = "tasks";
    const [error, setError] = useState('');

    function handleDeleteTask(id){
        const newTasks = tasks.filter( task => task.id !== id);
        localStorage.setItem(localStorageKey, JSON.stringify(newTasks));
        setTasks(newTasks);

    }

    function handleChangeNewTask(e){
        const newTask = e.target.value;
        if(newTask !== ''){
            setError('')
        }
        setNewTask(newTask);
    }

    function handleAddTask(){
        if (newTask.trim() === '') {
            setError('Task name cannot be empty!');
            return;
        }
        const id = crypto.randomUUID();
        const newTasks = [...tasks, {id: id , name:newTask}];
        setTasks(newTasks);
        localStorage.setItem(localStorageKey, JSON.stringify(newTasks));
        setNewTask('');
    }

    useEffect(() => {
        const storedTasks = localStorage.getItem(localStorageKey);
        if(storedTasks){
            setTasks(JSON.parse(storedTasks));
        }else{
            setTasks(initialTasks);
            localStorage.setItem(localStorageKey, JSON.stringify(initialTasks));
        }
    }, []);
  return (
    <>
        <NewTask
            newTask={newTask}
            handleChangeTask={handleChangeNewTask}
            handleClick={handleAddTask}
            error={error}/>
        <hr/>
        <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask}></Tasks>
    </>
  )
}

export default App

const initialTasks = [
    {id: crypto.randomUUID(), name: 'get up'},
    {id: crypto.randomUUID(), name: 'go to bed'}
];