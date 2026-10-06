function deleteTask(taskList, setTaskList, id) {
    setTaskList(taskList.filter(task => task.id !== id))
}

export default deleteTask;