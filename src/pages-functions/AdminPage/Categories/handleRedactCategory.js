import {ref, update} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect";

export const handleRedactCategory = (url,elemId,elemTitle,elemImage) =>{
    return update(ref(realtimeDB, `${url}`),{
        id:elemId.trim(),
        title: elemTitle.trim(),
        image: elemImage,
    })
}
