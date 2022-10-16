import {realtimeDB} from "../../../database/firebase-connect";
import {set,ref} from "firebase/database";

export const handleAddProducts = (e,url,id,title,image) =>{

    e.preventDefault()

    return set(ref(realtimeDB, `${url}/${id}`),{
        id,
        title,
        image
    })
};