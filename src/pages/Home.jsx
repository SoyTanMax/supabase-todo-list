import { AddTask, TaskList, ClearTasks } from './Tasks/components'

export default function Home(){
    return (
        <div>
            <h1>Todo List</h1>
            <AddTask />
            <TaskList />
            <ClearTasks />
        </div>
    )
}