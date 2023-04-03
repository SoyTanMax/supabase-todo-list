import { useSupabase } from '@/hooks'
import { useState, useEffect } from 'react'
import { loadingStates, supabaseMethods } from '@/constants'
import supabase from '../../../supabase'

export default function TaskList(){
    const [tasks, setTasks] = useState([]);

    // const { run, data, error, loading} = useSupabase(null)

    // async function handleDelete(id){
    //     await run('todos', supabaseMethods.DELETE, { id })
    // }

    // useEffect(() => {
    //     async function fetchTasks(){
    //         await run('todos', supabaseMethods.SELECT)
    //     }
    //     fetchTasks()
    // },[])

    // useEffect(() => {
    //     if(data){
    //         setTasks(data)
    //     }
    // },[data])

    async function getTasks(){
        const response = await supabase.from('todos').select();
        setTasks(response.data);
    }

    useEffect(() => {
        getTasks();
    },[])

    // if(loading === loadingStates.PENDING){
    //     return (
    //         <p className='text-center text-2xl font-bold text-white py-12'>Loading tasks...</p>
    //     )
    // }
    
    if(!tasks.length){
        return (
            <p className='text-center text-2xl font-bold text-white py-12'>No tasks</p>
        )
    }

    return (
        <ul className="py-12">
            {tasks.map((task) =>(
                <li key={task.id} className='flex gap-4 items-center justify-center py-2'>
                    <p>{task.text}</p>
                    <button className='p-2' onClick={() => handleDelete(task.id)}>delete</button>
                </li>
            ))}
        </ul>
    )
}