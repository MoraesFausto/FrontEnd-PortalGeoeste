import { AxiosRequestConfig} from "axios";
import { useEffect, useState } from "react";
import '../services/api'
import { api } from "../services/api";

export function useSearch<T = unknown>(url:string, options?:AxiosRequestConfig){
    const [data, setData] = useState<T | null>(null);
    const [isSearching, setIsSearching] = useState(true);

    useEffect(() =>{
        api.get(url, options)
            .then(res =>{
                setData(res.data);
            })
            .finally(()=>{
                setIsSearching(false);
            })
    },[]);

    return { data, isSearching }
}