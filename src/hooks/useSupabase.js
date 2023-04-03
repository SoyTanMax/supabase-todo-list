import { useState } from 'react'
import supabase from '../supabase'
import {loadingStates, supabaseMethods} from '../constants'

export function useSupabase(initialState = null){
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(loadingStates.IDLE);

    async function run(table, method = 'select', requestData = {}){
        setLoading(loadingStates.PENDING);
        setError(null);
        
        try {
            let response;

            switch(method){
                case supabaseMethods.DELETE:
                    response = await supabase.from(table).delete().eq('id', requestData);
                    break;
                case supabaseMethods.UPDATE:
                    const {id, ...updateData} = requestData;
                    response = await supabase.from(table).update(updateData).eq('id', id);
                    break;
                case supabaseMethods.INSERT:
                    response = await supabase.from(table).insert(requestData);
                    break;
                default: 
                    response = await supabase.from(table)[method](requestData); 
            }

            if(response.error){
                throw new Error(response.error.message);
            }

            setData(response.data);
            setLoading(loadingStates.SUCCESS);

        } catch(error){
            setError(error.message);
            setLoading(loadingStates.ERROR);
        }

    }

    return { run, data, error, loading}
}