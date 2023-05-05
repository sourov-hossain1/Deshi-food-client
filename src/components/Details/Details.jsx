import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const foodDetails = useLoaderData();
    console.log(foodDetails)
    return (
        <div className='mt-4 mb-4'>
            <h2 className='text-center'>Chef Recipes</h2>
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={foodDetails.picture} />
                <Card.Body>
                    <Card.Title>{foodDetails.name}</Card.Title>
                    <Card.Text>
                        {foodDetails.details}
                    </Card.Text>
                    <p>Experience: {foodDetails.experience}</p>
                    <Button variant="primary">Favorite</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;