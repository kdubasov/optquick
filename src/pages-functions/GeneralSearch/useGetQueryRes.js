import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";

export const useGetQueryRes = query => {

    const [categories,setCategories] = useState([]);
    const [sub,setSub] = useState([]);
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        onValue(ref(realtimeDB,'/categories'),snapshot => {

            //clear arrays
            setCategories([])
            setSub([])
            setProducts([])

            const dataInner = snapshot.val();
            // console.log(dataInner);

            if (dataInner){
                // eslint-disable-next-line
                Object.values(dataInner).map(categ => {
                    if(((categ.title).toLowerCase()).includes(query.toLowerCase())){
                        setCategories(old => [...old,categ])
                    }
                    if(categ["subcategories"]){
                        //eslint-disable-next-line
                        Object.values(categ["subcategories"]).map(sub => {
                            if(((sub.title).toLowerCase()).includes(query.toLowerCase())){
                                setSub(old => [...old,sub])
                            }
                            if(sub['products']){
                                //eslint-disable-next-line
                                Object.values(sub['products']).map(prod => {
                                    if(((prod.title).toLowerCase()).includes(query.toLowerCase())){
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
    },[query])

    return {
        products: products,
        categories: categories,
        subcategories: sub,
    }
}