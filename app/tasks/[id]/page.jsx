"use client"
import { db } from "@/firebase"
import { child, get, ref, set, remove } from "firebase/database"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ViewUpdateDeletePage({ params }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: ""
    });

    const getTaskDetails = () => {
        get(child(ref(db), `tasks/${params.id}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    const data = snapshot.val();
                    setFormData(data);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        getTaskDetails();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        set(ref(db, `tasks/${params.id}`), formData)
            .then(() => {
                window.alert("Updated details");
                router.push("/dashboard");
            })
            .catch((error) => {
                console.error("Error updating task:", error);
            });
    }

    const handleDelete = (e) => {
        e.preventDefault();

        const path = `tasks/${params.id}`;
        console.log("Delete path:", path);
        remove(ref(db, path))
            .then(() => {
                router.push("/dashboard");
            })
            .catch((error) => {
                console.error("Error deleting task:", error);
            });
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
                        onChange={handleChange} value={formData.title} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputDescription1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleInputDescription1" rows={6} name="description"
                        onChange={handleChange} value={formData.description}>
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select name="status" className="form-select" aria-label="Default select example"
                        onChange={handleChange} value={formData.status} required>
                        <option value="">Select Status</option>
                        <option value="todo">Todo</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div className="d-flex mt-3">
                    <button type="submit" className="btn btn-success">Update Task</button>
                    <button className="btn btn-outline-danger mx-3" onClick={handleDelete}>Delete Task</button>
                    <button className="btn btn-outline-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}