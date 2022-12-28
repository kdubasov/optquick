import React from 'react';
import {Alert, Container} from "react-bootstrap";
import {useGetBriefcaseProducts} from "../../pages-functions/Briefcase/useGetBriefcaseProducts";
import {useUserAuth} from "../../context/AuthContext";
import {useGetBriefcaseData} from "../../pages-functions/Briefcase/useGetBriefcaseData";
import CardProduct from "../../general-components/CardProduct/CardProduct";
import {Link} from "react-router-dom";
import "./BriefcasePage.css";

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
        <Container className={'BriefcasePage'}>
            <h3 className={"title"}>
                Избранные товары ({briefcaseProducts.length})
            </h3>

            <div className="products-container">
                {
                    Boolean(briefcaseProducts.length) &&
                    briefcaseProducts.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))
                }
            </div>

            {
                !Boolean(briefcaseProducts.length) &&
                <Alert className={"small"}>
                    Вы не добавили ни одного товара в избранное. Вы можете
                    <Link to={'/categories'} className={"mx-1"}>перейти в каталог</Link>
                    товаров и выбрать интересные вам товары.
                </Alert>
            }
        </Container>
    );
};

export default BriefcasePage;
