import React from "react";

const TaskList = () => {
    return (
        <div className="TaskList">
            <ul>
                <li>
                    <input type='checkbox' />
                    <h2>Build his app</h2>
                    <button>Delete</button>
                </li>
            </ul>
        </div>
    )
}

export default TaskList;