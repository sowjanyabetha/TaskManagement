import Link from "next/link";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
    return (
        <div className="d-flex">
            <div className="col-3 mx-3">
                <div className="bg-primary px-3 py-2 rounded">To Do</div>
                <div><TaskCard></TaskCard></div>
            </div>
            <div className="col-3 mx-3">
                <div className="bg-warning px-3 py-2 rounded">In Progress</div>
                <div><TaskCard></TaskCard></div>
            </div>
            <div className="col-3 mx-3">
                <div className="bg-success px-3 py-2 rounded">Done</div>
                <div><TaskCard></TaskCard></div>
            </div>
            <div className="col-3 mx-3">
                <Link href={"/tasks/create"} className="btn btn-dark rounded">Add new task +</Link>
            </div>
        </div>
    )
}