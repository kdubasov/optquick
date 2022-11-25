import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";

//for get data from realtime database
export const useGetReviewsAll = () =>{
    //для вывода всех отзывов

    const [data,setData] = useState([]);

    useEffect(() =>{
        onValue(ref(realtimeDB, '/users/'),snapshot => {
            setData([])
            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                // eslint-disable-next-line
                Object.values(dataInner).map(elem => {
                    if (elem['reviews']){
                        // console.log(Object.values(elem['reviews']))
                        Object.values(elem['reviews']).map(rev => (
                            setData(old => [...old,rev])
                        ))
                    }
                })
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[])

    return data
}