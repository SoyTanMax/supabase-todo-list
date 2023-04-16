import { SpinnerIcon } from '@/icons'

export default function Spinner(){
    return (
        <div className="flex justify-center items-center animate-spin">
            <SpinnerIcon />
        </div>
    )
}