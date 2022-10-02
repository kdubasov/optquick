import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../../database/firebase-connect";

export const handleAddUserData = (e,data, url) =>{
    e.preventDefault();
    return set(ref(realtimeDB, url),{
        ...data
    })
}