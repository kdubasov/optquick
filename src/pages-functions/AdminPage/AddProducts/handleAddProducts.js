import {realtimeDB} from "../../../database/firebase-connect";
import {set,ref} from "firebase/database";
import {getDate} from "../../../functions/getDate";
import {handleAddProductsPhoto} from "./handleAddProductsPhoto";

export const handleAddProducts = (
    e, userUid, productId, dataForm, selectCategory,
    selectSubCategory, selectDelivery, selectPay, images
) =>{

    // console.log(images.filter(img => img.name));

    e.preventDefault();

    const url = `/categories/${selectCategory}/subcategories/${selectSubCategory}/products/${productId}`;

    handleAddProductsPhoto(e, userUid, productId, images)
        .then(() => console.log('Картинки успешно загружены'))

    return set(ref(realtimeDB, url),{
        id: productId,
        userUid: userUid,
        date: getDate(Date.now()),
        dateNoRedact: Date.now(),
        title: dataForm.title,
        price: dataForm.price,
        amount: dataForm.amount,
        description: dataForm.description,
        characteristics: dataForm.characteristics,
        minOrder: dataForm.minOrder,
        colors: dataForm.colors.split(' '),
        location: dataForm.location,
        sizes: dataForm.sizes.split(' '),
        deliveryPeriod: dataForm.deliveryPeriod,
        showPhoneNumber: dataForm.showPhoneNumber,
        showEmailAddress: dataForm.showEmailAddress,
        selectCategory: selectCategory,
        selectSubCategory: selectSubCategory,
        selectDelivery: selectDelivery,
        selectPay: selectPay,
        images: images,
    })
};
