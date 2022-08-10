import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import Client from "../services/Client";

export function Auth<User>(url:string, options?:AxiosRequestConfig){
    const [user, setUser] = useState<User | null>(null);
    const [check, setCheck] = useState(true);
    const [err, setErr] = useState(true);

    useEffect(()=>{
        (async () =>{
            try{
                const res = await Client.get('/perfil');
                if(res.data)
                    setUser(res.data);
                setErr(false);

            }catch(err){
                console.log('Not authenticated');
                setCheck(false);
            }

        })();
    },[]);
    return { user, err, check }
}

export const logoutUser = async () =>{
    await Client.post('/logout');
    window.location.href='/'
}