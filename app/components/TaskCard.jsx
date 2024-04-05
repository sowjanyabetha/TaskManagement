"use client"
import Link from "next/link";

export default function TaskCard({ task, taskId }) {
    return (
        <Link href = {"/tasks/" + taskId} className="text-decoration-none">
            <div className="bg-light">
                <div className="card mt-3 shadow-sm">
                    <div className="card-body">{task.title}</div>
                </div>
            </div>
        </Link>
    )
}