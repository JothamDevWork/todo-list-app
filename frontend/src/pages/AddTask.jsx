import { useState } from 'react';
import addTaskLogic from '../logic/AddTask';


function AddTask({ setTaskList }) {

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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-fields-container">
                    <label htmlFor="taskName">Task Name:</label>
                    <input
                        type="text"
                        placeholder="Task Name"
                        id='taskName'
                        value={taskName}
                        onChange={(event) => setTaskName(event.target.value)}>
                    </input>
                </div>

                <div className="form-fields-container">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        placeholder="Description"
                        id='description'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}>
                    </input>
                </div>

                <button type="submit" >Add Task</button>
            </form>
        </div>
    )


}

export default AddTask;