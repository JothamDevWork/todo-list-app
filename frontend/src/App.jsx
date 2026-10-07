import { useState } from "react";
import AddTask from "./pages/AddTask.jsx";
import DisplayTask from "./pages/DisplayTask.jsx";
import "../src/styles/common.css"

function App() {

  const [taskList, setTaskList] = useState([]);
  const [displayAddTask, setDisplayAddTask] = useState(true);


  return (
    <div className="app-con">

      {displayAddTask ? (
        <AddTask setTaskList={setTaskList} setDisplayAddTask={setDisplayAddTask} />
      ) : (
        <DisplayTask taskList={taskList} setTaskList={setTaskList} setDisplayAddTask={setDisplayAddTask} />
      )}
    </div>
  )
}


export default App;


