import React from 'react';
import {Badge} from "react-bootstrap";
import {useGetBriefcaseProducts} from "../../pages-functions/Briefcase/useGetBriefcaseProducts";
import {useUserAuth} from "../../context/AuthContext";
import {useGetBriefcaseData} from "../../pages-functions/Briefcase/useGetBriefcaseData";
import CardProduct from "../../pages-components/AdminPage/Products/CardProduct/CardProduct";

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
                    briefcaseProducts.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default BriefcasePage;
