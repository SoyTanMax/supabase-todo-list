import { DeleteButton, EditButton } from '@/components';

export default function Task({text, onDelete, onEdit}){
    return (
        <li className='flex gap-4 items-center justify-between py-2'>
            <p>{text}</p>
            <div className="flex gap-2">
                <DeleteButton onClick={onDelete}/>
                <EditButton onClick={onEdit} />
            </div>
        </li>
    )
}