import React from 'react';
import {BenefitsCardsData} from "./BenefitsCardsData";

//css
import "./BenefitsCards.css";
import "./BenefitsCardsMedia.css";

const BenefitsCards = () => {
    return (
        <div className={"BenefitsCards"}>
            {
                BenefitsCardsData.map(elem => (
                    <div className={"inner-card"} key={elem.id}>
                        <div
                            className="color"
                            style={{backgroundColor:`${elem.color}`}}
                        />

                        <div className="text">
                            <h5>{elem.title}</h5>
                            <h6>{elem.text}</h6>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BenefitsCards;
