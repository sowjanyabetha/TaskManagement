"use client"
import { db } from "@/firebase";
import { v4 as uuidv4 } from "uuid";
import { set, ref } from "firebase/database";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function CreateTask() {

    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskId = uuidv4();
        set(ref(db, 'tasks/' + taskId), formData);
        router.push("/dashboard");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        router.push("/dashboard");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputTitle1" name="title"
                        onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputDescription1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleInputDescription1" rows={6} name="description"
                        onChange={handleChange} >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select name="status" className="form-select" aria-label="Default select example"
                        onChange={handleChange} required>
                        <option value="">Select Status</option>
                        <option value="todo">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <div className="d-flex mt-3">
                    <button type="submit" className="btn btn-success mx-3">Create New Task</button>
                    <button className="btn btn-outline-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </form>

        </div>
    )
}