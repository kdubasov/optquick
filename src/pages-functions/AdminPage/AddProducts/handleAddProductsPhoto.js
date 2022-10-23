import {ref, uploadBytesResumable} from "firebase/storage";
import {storageDB} from "../../../database/firebase-connect";

export const handleAddProductsPhoto = async (e,userId,productId,images) => {
    e.preventDefault();

    for (let image in images){
        let fileRef = ref(storageDB,`/products/${userId}/${productId}/${images[image].name}`);
        uploadBytesResumable(fileRef,images[image])
            .then(() => console.log('Картинка ' + images[image].name + ' загружена.'))
    }
}
