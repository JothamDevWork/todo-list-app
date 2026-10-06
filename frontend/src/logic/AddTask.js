
//const taskName = document.getElementById('taskName').value;
//const description = document.getElementById('description').value;
//const submitBtn = document.getElementById('submitBtn');



function addTaskLogic(taskName, description, setTaskList) {
    if (taskName != "" && description != "") {

        setTaskList(prevTaskList => [...prevTaskList, {
            id: prevTaskList.length + 1,
            taskName: taskName,
            description: description
        }
        ]);

    }

}


export default addTaskLogic;





