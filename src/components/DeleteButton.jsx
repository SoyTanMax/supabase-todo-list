import { DeleteIcon } from "@/icons";
import { loadingStates } from "@/constants"
import { useState } from "react"
import { Spinner } from "@/components"

export default function DeleteButton({onClick}){
    const [loadingState, setLoadingState] = useState(loadingStates.IDLE);

    const handleClick = async () => {
        setLoadingState(loadingStates.PENDING);
        await onClick()
        setLoadingState(loadingStates.IDLE);
    }

    const disabled = loadingState === loadingStates.PENDING;

    return (
        <button className='p-2' onClick={handleClick} disabled={disabled}>
            {disabled ? <Spinner /> : <DeleteIcon />}
        </button>
    )
}