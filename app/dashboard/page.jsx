"use client"
import { db } from "@/firebase";
import { child, get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import Link from "next/link";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
    const [tasksList, setTasksList] = useState([]);
    const [statusFilter, setStatusFilter] = useState(""); 

    const getTasksList = () => {
        get(child(ref(db), `tasks`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Task Output", snapshot.val());
                const data = snapshot.val();
                // const taskArray = Object.values(data);
                const taskArray = Object.entries(data).map(([taskId, task]) => ({ id: taskId, ...task }));
                console.log("taskArray: ", taskArray);
                setTasksList(taskArray);
            } else {
                console.log("No Data Available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        console.log("Dashboard rendered");
        getTasksList();
    }, [])

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    }

    const filteredTasks = statusFilter ? tasksList.filter(task => task.status === statusFilter) : tasksList;

    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-end mb-3">
                <div className="col mx-3">
                    <Link href={"/tasks/create"} className="btn btn-dark rounded">Add new task +</Link>
                </div>
                <div className="col-2">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select name="status" className="form-select" aria-label="Default select example" 
                    value={statusFilter} onChange={handleStatusChange} required>
                        <option value="">All</option>
                        <option value="todo">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-wrap">
            {statusFilter ?
                   filteredTasks.map((task, index) => (
                       <div key={index} className="col-3 mx-3">
                           <TaskCard task={task} taskId={task.id}/>
                       </div>
                   )) :
                   tasksList.map((task, index) => (
                       <div key={index} className="col-3 mx-3">
                           <TaskCard task={task} taskId={task.id}/>
                       </div>
                   ))
               }
            </div>
        </div>
    )
}