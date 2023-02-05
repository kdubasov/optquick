import React from 'react';
import "./SliderNews.css";
import "./SliderNewsMedia.css";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import { useMediaQuery } from 'react-responsive'

//swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";


const SliderNews = () => {

    //database data
    const data = useGetCategory("/articles");

    //media query
    const media991px = useMediaQuery({query: '(max-width: 991px)'});

    //styles for slider
    const getStyles = (bgColor) => {
        return {
            backgroundColor: bgColor,
        }
    }

    if (data.length)
    return (
        <Swiper
            slidesPerView={media991px?1:2}
            spaceBetween={media991px?0:20}
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
                        className={"NewsCard"}
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
