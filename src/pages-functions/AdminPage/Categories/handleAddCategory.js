import {realtimeDB} from "../../../database/firebase-connect";
import {set,ref} from "firebase/database";

export const handleAddCategory = (e,url,id,title,image,sub = "") =>{

    e.preventDefault()

    return set(ref(realtimeDB, `${url}/${id}`),{
        id,
        title,
        image,
        category:sub ? sub : "",
    })
};
