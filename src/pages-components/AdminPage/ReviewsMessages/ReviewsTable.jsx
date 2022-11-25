import React, {useState} from 'react';
import {Badge, Button, Table} from "react-bootstrap";
import {useGetReviewsAll} from "../../../pages-functions/AdminPage/ReviewsMessages/useGetReviewsAll";
import ReviewsTr from "./ReviewsTr";
import {checkBadWords} from "../../../functions/checkBadWords";

const ReviewsTable = ({setRes}) => {

    //показать только сообщения с возможными плохими словами
    const [showBad,setShowBad] = useState(false);

    //все отзывы
    const reviewsAll = useGetReviewsAll();
    // console.log(reviewsAll)

    if (reviewsAll.length)
    return (
        <div className={'ReviewsTable p-1 border my-1'}>
            <h5>
                <Badge bg={"secondary"} className={"fw-light"}>Отзывы о пользователях</Badge>
            </h5>

            <Button onClick={() => setShowBad(!showBad)} size={"sm"} className={"mb-2"}>
                {showBad ? "Показать все" : "Показать сообщения с плохими словами"}
            </Button>

            <Table striped bordered>
                <thead>
                    <tr className={"small"}>
                        <th>Дата</th>
                        <th>ID отправителя</th>
                        <th>ID получателя</th>
                        <th>Оценка</th>
                        <th>Сообщение</th>
                        <th>-</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        (showBad ? reviewsAll.filter(elem => checkBadWords(elem.message)) : reviewsAll)
                            .map(rev => (
                            <ReviewsTr key={rev.id} data={rev} setRes={setRes} />
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ReviewsTable;
