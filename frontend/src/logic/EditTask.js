function editTask(taskList, setTaskList, id, editTaskName, editTaskDescription) {

    setTaskList(taskList.map(task => {

        if (task.id === id) {
            return {
                id: task.id,
                taskName: editTaskName,
                description: editTaskDescription

            }

        } else {
            return task;
        }

    }))

}

export default editTask;

