import React, { useState } from "react";
import './AddTaskForm.css'

const AddTaskForm = ({ addTask }) => {

    const [value, setValue] = useState('');

    const hanldeChange = (event) => {
        if (event) event.preventDefault();
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (!value || value===''){
            return
        }
        addTask(value);
    }
        
    return (
        <div className="AddTaskForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={hanldeChange} placeholder='What needs to be done?'>
                </input>
                <button type='submit' >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTaskForm;