import React, {useState} from 'react';
import {useGetCategory} from "../../../../../pages-functions/AdminPage/Categories/useGetCategory";
import {Alert} from "react-bootstrap";

//css
import "./UserReviewsList.css";
import "./UserReviewsListMedia.css";

const UserReviewsList = ({userId}) => {

    //колько отзывов показывать
    const [slice,setSlice] = useState(3);

    const reviewsData = useGetCategory(`/users/${userId}/reviews`);
    // console.log(reviewsData,'UserReviewsList review');

    if(reviewsData.length){
        return (
            <div className={"UserReviewsList"}>

                {/*<Badge>Всего: {reviewsData.length} отзыв(ов,a)</Badge>*/}
                <h4 className={"w-100"}>Отзывы ({reviewsData.length})</h4>

                {
                    reviewsData.slice(0,slice).map(elem => (
                        <div className={"UserReview"} key={elem.id}>
                            <h6 className={"user"}>
                                {elem.userSendSurname + ' ' + elem.userSendName}
                            </h6>

                            <small>{elem.dateTime}</small>

                            <div className="stars small">
                                {elem.grade && <img src={"/images/auth/star.svg"} alt={"star 1"} />}
                                {elem.grade > 1 && <img src={"/images/auth/star.svg"} alt={"star 2"} />}
                                {elem.grade > 2 && <img src={"/images/auth/star.svg"} alt={"star 3"} />}
                                {elem.grade > 3 && <img src={"/images/auth/star.svg"} alt={"star 4"} />}
                                {elem.grade > 4 && <img src={"/images/auth/star.svg"} alt={"star 5"} />}
                                ({elem.grade}/5)
                            </div>

                            <p className={"mb-0"}>{elem.message}</p>
                        </div>
                    ))
                }

                {//кнопка показать еще
                    reviewsData.length > 3 &&
                    (
                        slice === 3 ?
                            <button
                                className={"but-light w-100"}
                                onClick={() => setSlice(reviewsData.length)}
                            >
                                Показать еще
                            </button> :
                            <button className={"but-light w-100"} onClick={() => setSlice(3)}>Скрыть</button>
                    )
                }
            </div>
        );
    }else {
        return (
            <Alert className={"small p-2"}>
                Отзывы отсутствуют.
            </Alert>
        )
    }
};

export default UserReviewsList;
