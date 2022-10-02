import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {realtimeDB} from "../../../../database/firebase-connect";

export const useGetUser = (url) =>{

    const [data,setData] = useState({})

    useEffect(() =>{
        onValue(ref(realtimeDB,url),snapshot => {
            setData({})
            const dataInner = snapshot.val();
            if (dataInner){
                // eslint-disable-next-line
                setData(dataInner)
            }else {
                return {}
            }
        })
        // eslint-disable-next-line
    },[url])

    return data
}