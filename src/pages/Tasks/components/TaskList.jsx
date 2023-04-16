import { useSupabase } from '@/hooks'
import { useState, useEffect } from 'react'
import { loadingStates, supabaseMethods } from '@/constants'
import supabase from '@/supabase'
import Task from './Task';

export default function TaskList(){
    const [tasks, setTasks] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStates.IDLE);

    async function getTasks(){
        const response = await supabase.from('todos').select();
        setTasks(response.data);
    }

    async function handleDelete(id){
        const response = await supabase.from('todos').delete().eq('id', id);
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    async function handleEdit(id){
        return 
    }

    useEffect(() => {
        getTasks();
    },[])
    
    if(!tasks.length){
        return (
            <p className='text-center text-2xl font-bold text-white py-12'>No tasks</p>
        )
    }

    return (
        <ul className="py-12">
            {tasks.map((task) =>(
                <Task 
                    key={task.id} 
                    text={task.text} 
                    onDelete={() => handleDelete(task.id)}
                    onEdit={() => handleEdit(task.id)}
                />
            ))}
        </ul>
    )
}