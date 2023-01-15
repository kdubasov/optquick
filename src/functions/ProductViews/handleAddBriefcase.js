import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";

export const handleAddBriefcase = (url,productData) =>{

    if (Object.keys(productData).length){
        // console.log(productData.title + " + 1 запрос контактов | OptQuick");
        return update(ref(realtimeDB, url),{
            ...productData,
            addBriefcase: productData.addBriefcase ? productData.addBriefcase + 1 : 1,
        })
    }
    return false;
}