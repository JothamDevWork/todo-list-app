import deleteTask from "../logic/DeleteTask";

function DisplayTask({ taskList, setTaskList }) {
    return (
        <>
            {taskList.map(task => (
                <div key={task.id}>
                    <h3>{task.taskName}</h3>
                    <p>{task.description}</p>
                    <button>EDIT</button><button onClick={() => deleteTask(taskList, setTaskList, task.id)}>DELETE</button>
                </div>
            ))}



        </>
    )
}




export default DisplayTask;


