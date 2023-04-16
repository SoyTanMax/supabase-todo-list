
import { AddIcon } from "@/icons";
import supabase from '@/supabase'
import {useState} from 'react'
import { loadingStates } from "@/constants"
import { Spinner } from "../../../components";

export default function AddTask(){ 
    const [text, setText] = useState('');
    const [loadingState, setLoadingState] = useState(loadingStates.IDLE);

    const disabled = loadingState === loadingStates.PENDING;

    function onChange(event) {
        const value = event.target.value;
        setText(value);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setLoadingState(loadingStates.PENDING);
        setText('')
        const {data, error} = await supabase.from('todos').insert([
            { text }
        ])
        setLoadingState(loadingStates.IDLE);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-4 pt-8">
            <input type="text" placeholder="Add Task" className="input p-3 rounded" onChange={onChange} value={text} disabled={disabled}/>
            <button type="submit" className="flex items-center justify-center gap-2 border-solid border-white px-2" disabled={disabled}>
                { disabled ? <Spinner /> : <AddIcon /> }
                <p className="text-sm">Add task</p>    
            </button>
        </form>
    )
}