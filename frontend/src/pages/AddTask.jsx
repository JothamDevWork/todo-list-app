import { useState } from 'react';
import addTaskLogic from '../logic/AddTask';
import "../styles/AppTask.css";


function AddTask({ setTaskList, setDisplayAddTask }) {

    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("SUBMIT FIRED")
        addTaskLogic(taskName, description, setTaskList);
        setTaskName("");
        setDescription("");
    }

    return (
        <div className="add-task-con">

            <div className="app-name">
                <h1>To-Do List App</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-fields-container">
                    <div>
                        <label htmlFor="taskName">Task Name:</label>
                        <input
                            type="text"
                            placeholder="Task Name"
                            id='taskName'
                            value={taskName}
                            onChange={(event) => setTaskName(event.target.value)}>
                        </input>
                    </div>

                    <div>
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            placeholder="Description"
                            id='description'
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}>
                        </input>
                    </div>
                </div>

                <div className='btn-container'>
                    <button type="submit" >Add Task</button>
                    <button type="button" onClick={() => setDisplayAddTask(false)} >View Task</button>
                </div>
            </form>


        </div>
    )


}

export default AddTask;
