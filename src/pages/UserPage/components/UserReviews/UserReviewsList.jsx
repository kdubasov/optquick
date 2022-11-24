import React, {useState} from 'react';
import {useGetCategory} from "../../../../pages-functions/AdminPage/Categories/useGetCategory";
import {Alert, Badge, Button, ListGroup, ListGroupItem, ProgressBar} from "react-bootstrap";

const UserReviewsList = ({userId}) => {

    //колько отзывов показывать
    const [slice,setSlice] = useState(2);

    const reviewsData = useGetCategory(`/users/${userId}/reviews`);
    // console.log(reviewsData,'UserReviewsList review');

    if(reviewsData.length){
        return (
            <div className={"UserReviewsList my-2 p-1 border"}>

                {/*<Badge>Всего: {reviewsData.length} отзыв(ов,a)</Badge>*/}
                <h5 className={"m-0 fw-bolder"}>Последние отзывы</h5>

                <ListGroup className={"small"}>
                    {
                        reviewsData
                            .slice(0,slice)
                            .map(elem => (
                            <ListGroupItem action className={"small p-1"} key={elem.id}>

                                <ProgressBar
                                    className={"w-25 my-2"}
                                    now={(elem.grade * 20)}
                                    label={`Оценка: ${elem.grade}`}
                                    variant={elem.grade >= 4 ? "success": elem.grade >= 2 && elem.grade < 4 ? "warning":"danger"}
                                />

                                Отправитель:
                                <Badge className={"mx-1"}>
                                    {elem.userSendSurname + ' ' + elem.userSendName}
                                </Badge>

                                <div className="p-1 border">
                                    <p className={"mb-1"}>{elem.message}</p>
                                    <p className="small m-0 opacity-50">{elem.dateTime}</p>
                                </div>
                            </ListGroupItem>
                        ))
                    }

                    {//кнопка показать еще
                        reviewsData.length > 2 &&
                        (
                            slice === 2 ?
                                <Button onClick={() => setSlice(reviewsData.length)} size={"sm"}>Показать еще</Button> :
                                <Button onClick={() => setSlice(2)} size={"sm"}>Скрыть</Button>
                        )
                    }
                </ListGroup>
            </div>
        );
    }else {
        return (
            <Alert className={"small p-2 my-1"}>
                У данного пользователя пока нет отзывов,
                вы можете написать первый!
            </Alert>
        )
    }
};

export default UserReviewsList;
