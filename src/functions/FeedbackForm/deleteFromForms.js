import { ref,remove } from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";

//delete block with feedback form message from db
export const deleteFromBriefcase = (form,id) =>{
    const dbURL = `/forms/${form}/${id}`;
    // console.log(dbURL);
    return remove(ref(realtimeDB,dbURL))
}
