import {ref, update} from "firebase/database";
import {realtimeDB} from "../../../../database/firebase-connect";

export const handleSetUserData = (id,data) =>{
    // console.log(id)
    // console.log(data)
    return update(ref(realtimeDB, `/users/${id}`),{
        ...data
    })
}