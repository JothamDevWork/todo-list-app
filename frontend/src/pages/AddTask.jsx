function AddTask() {
    return (
        <div>
            <form>
                <div className="form-fields-container">
                    <label>Task Name:</label>
                    <input type="text" placeholder="Task Name"></input>
                </div>

                <div className="form-fields-container">
                    <label>Description:</label>
                    <input type="text" placeholder="Description"></input>
                </div>

                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;