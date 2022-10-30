import {ref, listAll,getDownloadURL,getMetadata } from "firebase/storage";
import {storageDB} from "../../../database/firebase-connect";
import {useEffect, useState} from "react";

//получаем фото из storage
export const useGetProductsPhoto = link => {

    const listRef = ref(storageDB,link);

    //for files from db
    const [data,setData] = useState([])

    useEffect(() => {

        listAll(listRef)
            .then(res => {
                setData([])
                res.items.forEach(itemRef => {
                    getDownloadURL(itemRef).then(elemLink => {
                        getMetadata(itemRef).then(elemMD => {
                            //получаем ссылку и метадату
                            setData(old => [...old, {link: elemLink, metaData: elemMD}])
                        })
                    })
                })
            })
            .catch(() => setData([]));

        //eslint-disable-next-line
    }, [link]);

    return data;
}