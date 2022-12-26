import React from 'react';
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useGetProductsPhoto} from "../../../pages-functions/AdminPage/GetProducts/useGetProductsPhoto";
import {Spinner} from "react-bootstrap";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CardProductSwiper.css";

const CardProductSwiper = ({product}) => {

    const linkForDB = `/products/${product.userUid}/${product.id}`;
    const imagesList = useGetProductsPhoto(linkForDB);
    // console.log(imagesList,'Images for product card (CardProduct)');

    if (imagesList.length){
        return (
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="CardProductSwiper"
            >
                {imagesList.map(image => (
                    <SwiperSlide key={image.link}>
                        <img src={image.link} alt={product.title} />
                        {/*filename*/}
                        {/*<p>{image.metaData.name}</p>*/}
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }else {
        return (
            <div className={"CardProductSwiper wait"}>
                <Spinner animation={"border"} variant={"dark"} />
            </div>
        )
    }
};

export default CardProductSwiper;
