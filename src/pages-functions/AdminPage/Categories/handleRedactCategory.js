import {ref, update} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect";

export const handleRedactCategory = (url,id,title,image,icon,category) =>{
    return update(ref(realtimeDB, `${url}`),{
        id:id,
        title: title,
        image: image,
        iconImage:icon,
        category:category,
    })
}
