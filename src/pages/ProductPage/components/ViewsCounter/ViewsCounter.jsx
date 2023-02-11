import React from 'react';

//css
import "./ViewsCounter.css";
import "./ViewsCounterMedia.css";

const ViewsCounter = ({productData}) => {

    //if value false return 0 else return value
    const checkValue = value => {
        if (value) return value;
        return 0;
    }

    return (
        <div className={"ViewsCounter"}>
            <div className="inner">
                <img src="/images/icons/eye.svg" alt="views"/>
                <p className="small">
                    {checkValue(productData["views"])}
                </p>
            </div>
            <div className="inner">
                <img src="/images/icons/user.svg" alt="added"/>
                <p className="small">
                    {checkValue(productData["getContacts"])}
                </p>
            </div>
            <div className="inner">
                <img src="/images/icons/icon-love.svg" alt="views"/>
                <p className="small">
                    {checkValue(productData["addBriefcase"])}
                </p>
            </div>
        </div>
    );
};

export default ViewsCounter;
