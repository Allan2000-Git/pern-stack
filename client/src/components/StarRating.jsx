import React from 'react'
import { FaStar, FaStarHalfAlt,FaRegStar } from "react-icons/fa";

const StarRating = ({rating}) => {
    const stars = [];

    for(let i=1;i<=5;i++){
        if(i <= rating){
            stars.push(<FaStar />);
        } else if(i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<FaStarHalfAlt />);
        } else {
            stars.push(<FaRegStar />);
        }
    }

    return (
        <>
            {stars}
        </>
    )
}

export default StarRating