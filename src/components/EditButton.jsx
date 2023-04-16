import { EditIcon } from "@/icons";

export default function DeleteButton({onClick}){
    return (
        <button className='p-2' onClick={onClick}>
            <EditIcon />
        </button>
    )
}

