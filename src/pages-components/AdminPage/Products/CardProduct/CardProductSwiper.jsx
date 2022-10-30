import React from 'react';
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useGetProductsPhoto} from "../../../../pages-functions/AdminPage/GetProducts/useGetProductsPhoto";
import {Badge} from "react-bootstrap";

const CardProductSwiper = ({product}) => {

    const linkForDB = `/products/${product.userUid}/${product.id}`;
    const imagesList = useGetProductsPhoto(linkForDB);
    console.log(imagesList,'Images for product card (CardProduct)')

    return (
        <>
            {
                imagesList.length ?
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {imagesList.map(image => (
                            <SwiperSlide key={image.link}>
                                <img className={"w-100"} src={image.link} alt={product.title}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>:
                    <Badge>Картинки загружаются</Badge>
            }
        </>
    );
};

export default CardProductSwiper;
