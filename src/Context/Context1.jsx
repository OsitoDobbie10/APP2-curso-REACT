import { createContext } from "react";
import { useState,useEffect } from "react";

export const Context1 = createContext();

export const ProviderContext1 = ({children})=>{
   
    const [presupuesto,setPresupuesto] = useState(
        Number(localStorage.getItem('presupuesto')) ?? 0
    );
    const [isval,setIsval] = useState(false);
    const [editarpresu,setEditarpresu] = useState({});

    useEffect(()=>{
        localStorage.setItem('presupuesto', presupuesto ?? 0);
    },[presupuesto])



    return <Context1.Provider value={{
            presupuesto,
            setPresupuesto,
            isval,
            setIsval,
            editarpresu,
            setEditarpresu
            }}>
            {children}
           </Context1.Provider>
}