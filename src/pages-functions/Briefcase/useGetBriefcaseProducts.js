import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";

export const useGetBriefcaseProducts = arrProdsIds => {

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
                        //eslint-disable-next-line
                        Object.values(categ["subcategories"]).map(sub => {
                            if(sub['products']){
                                //eslint-disable-next-line
                                Object.values(sub['products']).map(prod => {
                                    if(arrProdsIds.includes(prod.id)){
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
    },[arrProdsIds])

    return data;

}