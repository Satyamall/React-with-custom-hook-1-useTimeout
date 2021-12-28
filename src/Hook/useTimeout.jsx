import { useEffect, useRef, useState } from "react"


export const useTimeout=(delay)=>{
     
    const [ready,setReady]=useState(false);
    const timeId=useRef();
 
    const show=()=> setReady(true);

    useEffect(()=>{
        timeId.current = show;
    },[show])

    useEffect(()=>{
        const fn=()=>{
            timeId.current();
        }
        if(delay!==null)
        {
            let id=setTimeout(fn,delay);
            return ()=> clearTimeout(id);
        }
    },[delay])

    return {ready};
}

