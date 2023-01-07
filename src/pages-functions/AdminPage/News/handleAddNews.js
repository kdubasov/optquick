import {realtimeDB} from "../../../database/firebase-connect";
import {set,ref} from "firebase/database";
import {getDate} from "../../../functions/getDate";

export const handleAddCategory = (data) =>{

    const date = Date.now();
    const id = (data.link).trim() + "-" + date

    return set(ref(realtimeDB, `/articles/${id}`),{
        id:id.trim(),
        dateNoRedact:date,
        date:getDate(date),
        show:true,
        ...data
    })
};