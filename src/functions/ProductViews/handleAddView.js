import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";

export const handleAddView = (url,productData) =>{

    if (Object.keys(productData).length){
        // console.log(productData.title + " + 1 просмотр | OptQuick");
        return update(ref(realtimeDB, url),{
            ...productData,
            views: productData.views ? productData.views + 1 : 1,
        })
    }
    return false;
}