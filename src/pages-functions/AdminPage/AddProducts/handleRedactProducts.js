import {ref, update} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect";
import {getDate} from "../../../functions/getDate";

export const handleRedactProducts = (e,dataProduct) => {
    e.preventDefault()

    const urlForProduct = `/categories/${dataProduct.selectCategory}/subcategories/${dataProduct.selectSubCategory}/products/${dataProduct.id}`;

    return update(ref(realtimeDB, urlForProduct),{
        title:dataProduct.title,
        price:dataProduct.price,
        amount:dataProduct.amount,
        description:dataProduct.description,
        characteristics:dataProduct.characteristics,
        minOrder:dataProduct.minOrder,
        colors:dataProduct.colors,
        location:dataProduct.location,
        sizes:dataProduct.sizes,
        deliveryPeriod:dataProduct.deliveryPeriod,
        showPhoneNumber:dataProduct.showPhoneNumber,
        showEmailAddress:dataProduct.showEmailAddress,
        selectDelivery:dataProduct.selectDelivery,
        selectPay:dataProduct.selectPay,
        dateRedact:getDate(Date.now()),
    })
}