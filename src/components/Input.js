import React, { useState } from "react";
import "../css/input.css";

const Input = (props) => {
    
    const [task, setTask] = useState("");

    const [isButtonClicked, setButtonClick] = useState(true);

    const handleTask = (event) => {
        const singleTask = event.target.value;
        if(singleTask !== "")
            setTask(singleTask);
            setButtonClick(false);
    }
    return(
        <>
        <input type="text" className={"taskname"} value={task} placeholder="Enter a task" onChange={handleTask}></input>
        <button type="submit" className={"addbtn"} onClick={() => {
            props.onAdd(task); 
            setTask("")
        }} disabled = {isButtonClicked}>
        Add Task 
        </button>
        <br></br>
        </>
    )
}

export default Input;