
export default function CreateTask() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputTitle1" name="title"
                        required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputDescription1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleInputDescription1" rows={6} name="description"
                        >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select name="status" className="form-select" aria-label="Default select example"
                     required>
                        <option value ="">Select Status</option>
                        <option value="todo">Todo</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-success">Create New Task</button>
            </form>
        </div>
    )
}