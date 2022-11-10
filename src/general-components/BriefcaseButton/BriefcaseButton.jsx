import React from 'react';
import {Button} from "react-bootstrap";
import {useUserAuth} from "../../context/AuthContext";
import {handleAddInBriefcase} from "../../pages-functions/Briefcase/handleAddInBriefcase";
import {useGetBriefcaseData} from "../../pages-functions/Briefcase/useGetBriefcaseData";
import {handleDeleteCategory} from "../../pages-functions/AdminPage/Categories/handleDeleteCategory";

const BriefcaseButton = ({elemData,setAlertData}) => {

    // console.log(elemData,'elemData BriefcaseButton');

    const { user } = useUserAuth();

    //add in briefcase
    const addInBriefcase = e => {
        e.preventDefault();
        if (user){
            if (setAlertData){
                handleAddInBriefcase(e,elemData.id,user.uid)
                    .then(() => setAlertData({
                        variant: 'success',
                        show: true,
                        text: `Товар "${elemData.title}" добавлен в избранное`,
                    }))
                    .catch(() => setAlertData({
                        variant: 'danger',
                        show: true,
                        text: `Ошибка добавления товара, пожалуйста, попробуйте позже.`,
                    }))
            }else{
                handleAddInBriefcase(e,elemData.id,user.uid)
                    .then(res => console.log(res))
            }
        }
        if (setAlertData){
            setTimeout(() => setAlertData({variant:'',show:false,text:''}),5000)
        }
    }

    // delete from briefcase
    const deleteFromBriefcase = e => {
        e.preventDefault();
        if (user){
            if (setAlertData){
                handleDeleteCategory(`/users/${user.uid}/briefcase/${elemData.id}`)
                    .then(() => setAlertData({
                        variant: 'primary',
                        show: true,
                        text: `Товар "${elemData.title}" успешно удален из избранное`,
                    }))
                    .catch(() => setAlertData({
                        variant: 'danger',
                        show: true,
                        text: `Ошибка удаления товара, пожалуйста, попробуйте позже.`,
                    }))
            }else{
                handleDeleteCategory(`/users/${user.uid}/briefcase/${elemData.id}`)
                    .then(res => console.log(res))
            }
        }
        if (setAlertData){
            setTimeout(() => setAlertData({variant:'',show:false,text:''}),5000)
        }
    }

    // get data from briefcase
    const linkDB = `/users/${user?.uid}/briefcase`;
    const briefcaseData = useGetBriefcaseData(linkDB);
    // console.log(briefcaseData);

    if (user && user.uid !== elemData.userUid){
        //проверяем добавлен ли данный товар в избранное
        if(briefcaseData.includes(elemData.id)){
            return (
                <Button
                    size={"sm"}
                    className={"my-2"}
                    variant={"outline-danger"}
                    onClick={deleteFromBriefcase}
                >
                    Удалить из избранного
                </Button>
            )
        }else {
            return (
                <>
                    <Button
                        size={"sm"}
                        className={"my-2"}
                        variant={"outline-success"}
                        onClick={addInBriefcase}
                    >
                        Добавить в избранное
                    </Button>
                </>
            );
        }
    }
};

export default BriefcaseButton;
