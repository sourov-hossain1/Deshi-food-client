import React, { useEffect, useState } from 'react';
import './Home.css'
import { Button, Card, CardGroup, Row } from 'react-bootstrap';

const Home = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <div className='text-center bg-primary bg-opacity-75 text-white py-4'>
                <h5 className='ms-4 me-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut esse expedita assumenda, qui quidem aliquid, pariatur quis quas labore iusto consectetur.</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsa cumque perferendis.</p>
            </div>
            <h3 className='text-center mt-4'>Bangladeshi Chef</h3>
            <div className='mid-content'>
                {
                    foods.map(food => <div
                        key={food.id} >

                        <CardGroup>
                            <Card className='card-style'>
                                <Card.Img variant="top" src={food.picture} />
                                <Card.Body>
                                    <Card.Title>{food.name}</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"> <Button variant="primary">View Recipes</Button></small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>

                    </div>)

                }
            </div>
            <h2 className='text-center mt-4'>Rice and Fish</h2>
            <div className='two-section'>
                
                <div>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis deserunt dolor, sapiente obcaecati consectetur fugiat doloribus ipsum maiores qui quo!</h4>
                </div>
                <div className='img-one'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwP8zJurAUtFLdWqcOGR8PmRaEjI309FmO8g&usqp=CAU" alt="" />
                </div>
            </div>
            <div className='two-section'>
                <div className='img-one'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSqLtUxN11Sil3fphKW5hoWyCnvWcqxknQA&usqp=CAU" alt="" />
                </div>
                <div>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt aspernatur ad fugit ratione enim ipsum sint explicabo architecto earum!</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;