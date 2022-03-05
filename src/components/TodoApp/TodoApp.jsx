import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { 
    AddTaskForm,
    TaskList,
    FilterFooter,
} from '../';
import './TodoApp.css';


const TodoApp =() =>{

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(()=>{
        let storedTasks = localStorage.getItem('tasks');
        if (storedTasks){
            storedTasks = JSON.parse(storedTasks);
        }
        setTasks(storedTasks);
    },[]);

    useEffect(()=>{
        if (filter === 'all') {
            setFilteredTasks(tasks);
        }
        if (filter === 'completed') {
            const newCompletedFilteredTask = tasks.filter(task => task.status);
            setFilteredTasks(newCompletedFilteredTask);
        }
        if (filter === 'active') {
            const newActiveFilteredTask = tasks.filter(task => !task.status);
            setFilteredTasks(newActiveFilteredTask);
        }
    },[filter, tasks, refresh]);

    const addTask = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                status: false,
            },
        ];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    const deleteTask = (taskId) => {
        let newTasksList = tasks;
        delete newTasksList[tasks.findIndex((task) => task.id === taskId)];
        newTasksList = newTasksList.filter((item) => item);
        setTasks(newTasksList);
        localStorage.setItem('tasks', JSON.stringify(newTasksList));
    }

    const handleChangeStatus = (taskId) => {
        let newTasksList = tasks;
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        newTasksList[taskIndex].status = !newTasksList[taskIndex].status;
        setTasks(newTasksList);
        setRefresh(refresh+1);
        localStorage.setItem('tasks', JSON.stringify(newTasksList));
    }

    return(
        <div className="TodoApp">
            <AddTaskForm 
                addTask={addTask} 
            />
            <TaskList 
                tasks={filteredTasks}  
                deleteTask={deleteTask}
                handleChangeStatus={handleChangeStatus} 
            />
            <FilterFooter 
                updateFilter={setFilter} 
                tasks={filteredTasks} 
            />
        </div>
    )
}

export default TodoApp;