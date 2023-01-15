import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";

export const handleDeleteBriefcase = (url,productData) =>{

    if (Object.keys(productData).length){
        // console.log(productData.title + " - 1 добавление в избранное | OptQuick");
        return update(ref(realtimeDB, url),{
            ...productData,
            addBriefcase: productData.addBriefcase ? productData.addBriefcase - 1 : 0,
        })
    }
    return false;
}