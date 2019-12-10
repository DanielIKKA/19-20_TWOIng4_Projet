import React from "react";
import {Link} from "react-router-dom";

const AddBtn = props => {
    const {linkTo} = props;
    return (
        <div className={'text-center'}>
            <Link to={linkTo}>
                <svg width={100} height={100} fill="none">
                    <circle cx={'50%'} cy={'50%'} r={'40%'} fill="#45A196"/>
                    <rect x={'33%'} y={'48%'} width={'33%'} height={'4%'} fill="#fff"/>
                    <rect x={'48%'} y={'33%'} width={'4%'} height={'33%'} fill="#fff"/>
                </svg>
            </Link>
        </div>
    );
};

export default AddBtn;