import { useState } from "react";
import AddTask from "./pages/AddTask.jsx";
import DisplayTask from "./pages/DisplayTask.jsx";

function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <h1>To-Do List App</h1>
      <AddTask setTaskList={setTaskList} />

      {/*setTaskList={ setTaskList } is a prop being passed to AddTask */}

      <DisplayTask taskList={taskList} setTaskList={setTaskList} />
    </>
  )
}


export default App;
