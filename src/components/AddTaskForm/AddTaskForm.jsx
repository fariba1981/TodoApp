import React from "react";

const AddTaskForm = () => {
    return (
        <div className="AddTaskForm">
            <form>
                <input type="text" placeholder='What needs to be done?'>
                </input>
                <button type='submit' >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTaskForm;