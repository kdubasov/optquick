import React, {useState} from 'react';
import AddCategory from "../../general-components/AdminPage/Categories/AddCategory";
import MessageAlert from "../../general-components/MessageAlert/MessageAlert";
import ListCategory from "../../general-components/AdminPage/Categories/ListCategoty/ListCategory";
import {Badge} from "react-bootstrap";
import AddProduct from "../PostProductPage/AddProducts/AddProduct";
import ListProducts from "../../general-components/AdminPage/Products/ListProducts";
import FeedbackTable from "../../general-components/AdminPage/FeedbackMessages/FeedbackTable";
import ComplaintsTable from "../../general-components/AdminPage/ComplaintsMessages/ComplaintsTable";
import ReviewsTable from "../../general-components/AdminPage/ReviewsMessages/ReviewsTable";
import {useUserAuth} from "../../context/AuthContext";
import {Navigate} from "react-router-dom";
import UsersList from "../../general-components/AdminPage/UsersList/UsersList";
import Loader from "../../general-components/Loader/Loader";


const AdminPage = () => {

    const { user } = useUserAuth();

    //for res after func or error
    const [res,setRes] = useState({error:false,res:false})

    if (user && user.phoneNumber){
        if (user.phoneNumber === "+79040574145"){
            return (
                <div className={`container`}>

                    <MessageAlert res={res} />

                    <h2 className={"mt-3 mb-3"}>
                        <Badge bg={'success'}>Админ. страница</Badge>
                    </h2>

                    {/*add category or sub category*/}
                    <AddCategory setRes={setRes}  />
                    {/*add product*/}
                    <AddProduct />
                    {/*list categories or sub categories*/}
                    <ListCategory />
                    {/*products list*/}
                    <ListProducts />
                    {/*Таблица с заявками feedback формы*/}
                    <FeedbackTable setRes={setRes} />
                    {/*Таблица с жалобами*/}
                    <ComplaintsTable setRes={setRes} />
                    {/*Таблица с отзывами*/}
                    <ReviewsTable setRes={setRes} />
                    {/*Таблица пользователей*/}
                    <UsersList />
                </div>
            );
        }else{
            return <Navigate to="/404" />;
        }
    }else {
        return <Loader />
    }
};

export default AdminPage;
