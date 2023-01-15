import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";

export const handleAddContacts = (url,productData) =>{

    if (Object.keys(productData).length){
        // console.log(productData.title + " + 1 запрос контактов | OptQuick");
        return update(ref(realtimeDB, url),{
            ...productData,
            getContacts: productData.getContacts ? productData.getContacts + 1 : 1,
        })
    }
    return false;
}