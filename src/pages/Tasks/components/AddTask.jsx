export default function AddTask(){ 
    return (
        <form className="flex gap-4 pt-8">
            <input type="text" placeholder="Add Task" className="input p-2 rounded" />
            <button type="submit" className="button">Add Task</button>
        </form>
    )
}