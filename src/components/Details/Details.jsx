import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const foodDetails = useLoaderData();
    console.log(foodDetails)
    return (
        <div>
            <h2>this is details</h2>
            <h3>hello: {foodDetails.name}</h3>
        </div>
    );
};

export default Details;