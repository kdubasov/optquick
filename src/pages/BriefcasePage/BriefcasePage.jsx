import React from 'react';
import {Alert, Badge} from "react-bootstrap";
import {useGetBriefcaseProducts} from "../../pages-functions/Briefcase/useGetBriefcaseProducts";
import {useUserAuth} from "../../context/AuthContext";
import {useGetBriefcaseData} from "../../pages-functions/Briefcase/useGetBriefcaseData";
import CardProduct from "../../pages-components/AdminPage/Products/CardProduct/CardProduct";
import {Link} from "react-router-dom";

const BriefcasePage = () => {

    const { user } = useUserAuth();

    // get data from briefcase
    const linkDB = `/users/${user?.uid}/briefcase`;
    const briefcaseData = useGetBriefcaseData(linkDB);
    // console.log(briefcaseData);

    //get data products
    const briefcaseProducts = useGetBriefcaseProducts(briefcaseData);
    // console.log(briefcaseProducts,'data in BriefcasePage');

    return (
        <div className={'BriefcasePage py-3 container'}>
            <h4><Badge>Избранные товары</Badge></h4>

            <div className="w-100 d-flex flex-wrap">
                {
                    Boolean(briefcaseProducts.length) &&
                    briefcaseProducts.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))
                }
            </div>

            {
                !Boolean(briefcaseProducts.length) &&
                <Alert className={"w-50 p-2 small"}>
                    Вы не добавили ни одного товара в избранное. Вы можете
                    <Link to={'/categories'} className={"mx-1"}>перейти в каталог</Link>
                    товаров и выбрать интересные вам товары.
                </Alert>
            }
        </div>
    );
};

export default BriefcasePage;
