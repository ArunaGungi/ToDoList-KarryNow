import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import "../css/addinput.css";

const AddInput = () => {
    
    const [taskList, setList] = useState([]);

    const addTask = (task) => {
        setList([...taskList, task])
    }

    const deleteTask = (id) => {
        taskList.splice(id,1);
        setList([...taskList]);
    }
    return (
        <>
        <Header/>
        <Input onAdd = {addTask}/>
        <br></br>
        <ul>
        {taskList.map((item,id) => (
            <>
            <p className={"task"} key={id}>{item}</p>
            <button type="submit" className={"deletebtn"} onClick={() => deleteTask(id)}>Task Done</button>
            <br></br>
            </>
        ))}
        </ul>
        </>
    )
}
export default AddInput;