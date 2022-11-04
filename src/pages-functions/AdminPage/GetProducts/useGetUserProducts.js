import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect";

export const useGetUserProducts = userUid => {

    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB,'/categories'),snapshot => {
            setData([])
            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                // eslint-disable-next-line
                Object.values(dataInner).map(categ => {
                    if(categ["subcategories"]){
                        Object.values(categ["subcategories"]).map(sub => {
                            if(sub['products']){
                                Object.values(sub['products']).map(prod => {
                                    if((prod.id).startsWith(userUid)){
                                        setData(old => [...old,prod]);
                                    }
                                })
                            }
                        })
                    }
                })
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[userUid])

    return data;
}