import React from 'react';
import "./SliderNews.css";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";

//swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";


const SliderNews = () => {

    //database data
    const data = useGetCategory("/articles");

    //styles for slider
    const getStyles = (bgColor) => {
        return {
            backgroundColor: bgColor,
        }
    }

    if (data.length)
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={20}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="SliderNews"
        >
            {
                data.map(news => (
                    <SwiperSlide
                        key={news.id}
                        style={getStyles(news.cardBG,news.cardPhoto)}
                    >
                        <img src={news.cardPhoto} alt={news.title} className="static-img"/>

                        {/*link to news page*/}
                        <Link to={`/articles/${news.id}`} />

                        <div className="content">
                            <h5>{news.title}</h5>
                            <p className={"m-0"}>{news.openingText}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default SliderNews;
