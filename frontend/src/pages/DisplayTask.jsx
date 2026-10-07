import { useState } from "react";
import deleteTask from "../logic/DeleteTask";
import editTask from "../logic/editTask";
import "../styles/DisplayTask.css";

function DisplayTask({ taskList, setTaskList, setDisplayAddTask }) {
    const [editingId, setEditingId] = useState(null);
    const [editTaskName, setEditTaskName] = useState("");
    const [editTaskDescription, setEditTaskDescription] = useState("");


    function handleEdit(task) {
        setEditingId(task.id);
        setEditTaskName(task.taskName);
        setEditTaskDescription(task.description);
    }

    function handleSave(id) {
        editTask(
            taskList,
            setTaskList,
            id,
            editTaskName,
            editTaskDescription
        );

        setEditingId(null);
    }
    return (
        <>
            {taskList.map(task => (
                <div key={task.id}>
                    {editingId === task.id ? (
                        <div className="edit-task-con">
                            <input value={editTaskName} onChange={(event) => { setEditTaskName(event.target.value) }}></input>

                            <input value={editTaskDescription} onChange={(event) => { setEditTaskDescription(event.target.value) }}></input>

                            <button onClick={() => handleSave(task.id)}>SAVE</button>


                        </div>
                    ) : (
                        <div className="task-can">
                            <h3>{task.taskName}</h3>
                            <p>{task.description}</p>

                            <button onClick={() => handleEdit(task)}>EDIT</button>
                            <button onClick={() => deleteTask(taskList, setTaskList, task.id)}>DELETE</button>



                        </div>
                    )}

                </div>
            ))}
            <button type="button" onClick={() => setDisplayAddTask(true)}>View Add Task</button>
        </>
    )
}




export default DisplayTask;


