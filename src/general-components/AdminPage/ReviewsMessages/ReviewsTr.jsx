import React from 'react';
import {Badge, Button, ProgressBar} from "react-bootstrap";
import {handleDeleteCategory} from "../../../pages-functions/AdminPage/Categories/handleDeleteCategory";
import {checkBadWords} from "../../../functions/checkBadWords";

const ReviewsTr = ({data,setRes}) => {

    //удалить отзыв
    const handleDeleteItem = () => {
        handleDeleteCategory(`/users/${data.userReviewId}/reviews/${data.id}`)
            .then(() => setRes({error:false,res:"Удалено."}))
            .catch(() => setRes({error:true,res:"Ошибка удаления."}))
        setTimeout(() => setRes({error:false,res:false}),3000)
    }

    return (
        <tr className={"small"}>
            {/*date*/}
            <td>{data.dateTime}</td>
            {/*send id*/}
            <td>
                <Badge>{data.userSendId}</Badge>
            </td>
            {/*get id*/}
            <td>
                <Badge>{data.userReviewId}</Badge>
            </td>
            {/*оценка*/}
            <td width={150}>
                <ProgressBar
                    now={(data.grade * 20)}
                    label={`Оценка: ${data.grade}`}
                    variant={data.grade >= 4 ? "success": data.grade >= 2 && data.grade < 4 ? "warning":"danger"}
                />
            </td>
            {/*message*/}
            <td>
                {
                    checkBadWords(data.message) ?
                        <Badge bg={"danger"}>{data.message}</Badge>:
                        data.message
                }
            </td>
            <td>
                <Button size={"sm"} variant={"danger"} onClick={handleDeleteItem}>
                    Удалить
                </Button>
            </td>
        </tr>
    );
};

export default ReviewsTr;
