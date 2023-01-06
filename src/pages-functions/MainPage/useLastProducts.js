import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";

//выбираем по одному товару из каждой подкатегории
export const useLastProducts = () => {

    const [products,setProducts] = useState([]);

    useEffect(() =>{
        onValue(ref(realtimeDB,'/categories'),snapshot => {
            //clear array
            setProducts([])
            const dataInner = snapshot.val();

            if (dataInner){
                //eslint-disable-next-line
                Object.values(dataInner).map(categ => {
                    if (categ.subcategories){
                        //eslint-disable-next-line
                        Object.values(categ.subcategories).map(sub => {
                            if (sub.products){
                                //eslint-disable-next-line
                                Object.values(sub.products).map(prod => {
                                    if (prod.amount <= 100){
                                        setProducts(old => [...old,prod]);
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
    },[])

    return products;
}